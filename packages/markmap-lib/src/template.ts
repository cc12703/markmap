import { JSItem, INode, persistJS, persistCSS } from 'markmap-common';
import { IAssets } from './types';

const template: string = process.env.TEMPLATE;

const baseJs: JSItem[] = [
  `https://cdn.jsdelivr.net/npm/d3@${process.env.D3_VERSION}`,
  `https://cdn.jsdelivr.net/npm/@cc12703m/markmap-view@${process.env.VIEW_VERSION}`,
].map((src) => ({
  type: 'script',
  data: {
    src,
  },
}));

export function fillTemplate(data: INode | undefined, opts: IAssets): string {
  const { scripts, styles } = opts;
  const cssList = [
    ...styles ? persistCSS(styles) : [],
  ];
  const context = {
    getMarkmap: () => (window as any).markmap,
    data,
  };
  const jsList = [
    ...persistJS(baseJs),
    ...scripts ? persistJS(scripts, context) : [],
    ...persistJS([
      {
        type: 'iife',
        data: {
          fn: (getMarkmap, data) => {
            const { Markmap } = getMarkmap();
            (window as any).mm = Markmap.create('svg#mindmap', null, data);
          },
          getParams: ({ getMarkmap, data }) => {
            return [getMarkmap, data];
          },
        },
      },
    ], context),
  ];
  const html = template
    .replace('<!--CSS-->', () => cssList.join(''))
    .replace('<!--JS-->', () => jsList.join(''));
  return html;
}

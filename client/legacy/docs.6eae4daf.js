import './web.url.c352fc66.js';
import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, L as stores$1, M as validate_store, N as component_subscribe, o as onMount, O as validate_each_argument, e as element, k as claim_element, l as children, h as detach_dev, r as attr_dev, p as add_location, P as set_style, u as insert_dev, w as append_dev, Q as destroy_each, f as text, c as space, m as claim_text, j as claim_space, R as toggle_class, T as set_data_dev, g as create_component, n as claim_component, U as HtmlTag, x as mount_component, y as listen_dev, A as transition_in, B as transition_out, C as destroy_component, b as binding_callbacks } from './client.5032b84c.js';
import { l as loadJS } from './markmap.6cf6f1a5.js';
import { F as Footer } from './footer.6f5a3fef.js';

var docs = "<p>This project is heavily inspired by <a href=\"https://github.com/dundalek/markmap\">dundalek&#39;s markmap</a>.</p>\n<h2 id=\"introduction\">Introduction</h2>\n<h3 id=\"what-is-markmap\">What is markmap?</h3>\n<p>Markmap is a combination of markdown and mindmap. It parses markdown content and extract its intrinsic hierarchical structure and renders an interactive mindmap, aka markmap.</p>\n<p>The easiest way to use it is to load your markdown content to the <a href=\"/repl\">try it out</a> 👉 page and see your markmap on the right.</p>\n<p>You can also try it in:</p>\n<ul>\n<li><a href=\"https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode\">VSCode</a> 🚀</li>\n<li>command-line: see <a href=\"#markmap-cli\">markmap-cli</a> 👇</li>\n<li>Vim / Neovim: see <a href=\"#coc-markmap\">coc-markmap</a> 👇</li>\n</ul>\n<h2 id=\"projects\">Projects</h2>\n<h3 id=\"markmap-lib\">markmap-lib</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-lib.svg\" alt=\"NPM\"></p>\n<p>Transform Markdown to data used by markmap.</p>\n<h4 id=\"installation\">Installation</h4>\n<pre><code class=\"language-sh\">$ yarn add markmap-lib</code></pre>\n<h4 id=\"usage\">Usage</h4>\n<p>Parse markdown and create a node tree, return the root node and a <code>features</code> object containing the active features during parsing.</p>\n<p>Transform Markdown to markmap data:</p>\n<pre><code class=\"language-js\">import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n\n// 1. transform markdown\nconst { root, features } = transform(markdown);\n\n// 2. get assets\n// either get assets required by used features\nconst { styles, scripts } = getUsedAssets(features);\n// or get all possible assets that could be used later\nconst { styles, scripts } = getAssets(features);</code></pre>\n<p>Now we have the data for rendering. See <a href=\"#markmap-view\">markmap-view</a> 👇 for how to use them.</p>\n<h3 id=\"markmap-view\">markmap-view</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-view.svg\" alt=\"NPM\"></p>\n<p>Render a markmap from transformed data.</p>\n<h4 id=\"installation-1\">Installation</h4>\n<pre><code class=\"language-sh\">$ yarn add markmap-view</code></pre>\n<h4 id=\"usage-1\">Usage</h4>\n<p>Create an SVG element with explicit width and height:</p>\n<pre><code class=\"language-html\">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/d3@6&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-view&quot;&gt;&lt;/script&gt;\n\n&lt;svg id=&quot;markmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;</code></pre>\n<p>We got <code>{ root }</code> from transforming, and possible extraneous assets <code>{ styles, scripts }</code>.</p>\n<p>Now we can render a markmap to the SVG element:</p>\n<pre><code class=\"language-js\">const { Markmap, loadCSS, loadJS } = window.markmap;\n\n// 1. load assets\nif (styles) loadCSS(styles);\nif (scripts) loadJS(scripts, { getMarkmap: () =&gt; window.markmap });\n\n// 2. create markmap\nMarkmap.create(&#39;#markmap&#39;, null, root);</code></pre>\n<p>The first argument of <code>Markmap.create</code> can also be an actual SVG element, for example:</p>\n<pre><code class=\"language-js\">const svgEl = document.querySelector(&#39;#markmap&#39;);\nMarkmap.create(svgEl, null, data);</code></pre>\n<h3 id=\"markmap-cli\">markmap-cli</h3>\n<p><img src=\"https://img.shields.io/npm/v/markmap-cli.svg\" alt=\"NPM\"></p>\n<p>Use markmap command-line in a local terminal.</p>\n<h4 id=\"usage-2\">Usage</h4>\n<pre><code class=\"language-sh\">$ npx markmap-cli markmap.md</code></pre>\n<p>You can also install it globally:</p>\n<pre><code class=\"language-sh\">$ yarn global add markmap-cli\n$ markmap markmap.md</code></pre>\n<p>There is a watch mode so that you could edit the Markdown file and get updates on the fly:</p>\n<pre><code class=\"language-sh\">$ markmap -w markmap.md</code></pre>\n<h3 id=\"coc-markmap\">coc-markmap</h3>\n<p><img src=\"https://img.shields.io/npm/v/coc-markmap.svg\" alt=\"NPM\"></p>\n<h4 id=\"installation-2\">Installation</h4>\n<p>Make sure <a href=\"https://github.com/neoclide/coc.nvim\">coc.nvim</a> is started.</p>\n<p>Then install with the Vim command:</p>\n<pre><code>:CocInstall coc-markmap</code></pre>\n<h4 id=\"usage-3\">Usage</h4>\n<p>Open a Markdown file in Vim / Neovim, and execute:</p>\n<pre><code class=\"language-viml\">:CocCommand markmap.create</code></pre>\n<p>An HTML file with the same basename as the Markdown file will be created and opened in your default browser.</p>\n<p>Visualization of selected text is also supported.</p>\n<h2 id=\"migration-notes\">Migration notes</h2>\n<h3 id=\"09x---010x\">0.9.x -&gt; 0.10.x</h3>\n<p>The entrance has changed:</p>\n<pre><code class=\"language-diff\">- import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n- import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n+ import { transform, getUsedAssets, getAssets, fillTemplate } from &#39;markmap-lib&#39;;\n\n- import * as markmap from &#39;markmap-lib/dist/view&#39;;\n- import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-view&#39;;</code></pre>\n<h3 id=\"08x---09x\">0.8.x -&gt; 0.9.x</h3>\n<p>In 0.9.x the plugins at rendering time are removed in favor of the transforming plugins. As a result, the generated markmap can be loaded faster with less overhead and hopefully without flash of untranspiled code. The transforming plugins are enabled on demand, i.e. when the markdown content is detected to have the feature included.</p>\n<p>So the changes are:</p>\n<h4 id=\"transforming\">Transforming</h4>\n<p>We get both the root node and a map of used features. Then we get the assets list for future usage.</p>\n<pre><code class=\"language-diff\">- import { transform } from &#39;markmap-lib/dist/transform&#39;;\n+ import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n\n- const root = transform(markdown);\n+ const { root, features } = transform(markdown);\n\n+ const assets = getUsedAssets(features);\n+ // or just get all possible assets if the content may change in the future\n+ const assets = getAssets();</code></pre>\n<h4 id=\"filling-the-template\">Filling the template</h4>\n<p>We need to inject the extraneous assets required by plugins to the output.</p>\n<pre><code class=\"language-diff\">  import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n\n- const html = fillTemplate(root);\n+ const html = fillTemplate(root, assets);</code></pre>\n<h4 id=\"render\">Render</h4>\n<p>We don&#39;t need to load the view plugins any more, but we&#39;ll have to include the assets if plugin features are used.</p>\n<pre><code class=\"language-diff\">- import { Markmap, loadPlugins } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-lib/dist/view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n\n+ const { styles, scripts } = assets;\n+ if (styles) loadCSS(styles);\n+ if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n\n- loadPlugins([\n-   &#39;mathJax&#39;,\n-   &#39;prism&#39;,\n- ])\n- .then(() =&gt; {\n    Markmap.create(&#39;#markmap&#39;, null, data);\n- });</code></pre>\n<p>Note that the scripts may want to access <code>markmap</code> module, so we should export a <code>getMarkmap</code> method to <code>loadScript</code>. However this can be omitted if your markmap library is loaded from CDN and can be accessed via <code>window.markmap</code>.</p>\n<pre><code class=\"language-diff\">+ &lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-lib/dist/browser/view.min.js&quot;&gt;&lt;/script&gt;</code></pre>\n<pre><code class=\"language-diff\">  console.log(window.markmap); // -&gt; the markmap object\n- if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n+ if (scripts) loadJS(scripts);</code></pre>\n";

/* src/routes/docs.svelte generated by Svelte v3.29.4 */
const file = "src/routes/docs.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (69:2) {#if headings}
function create_if_block(ctx) {
	let aside;
	let ul;
	let each_value = /*headings*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			aside = element("aside");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true, style: true });
			var aside_nodes = children(aside);
			ul = claim_element(aside_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "toc");
			add_location(ul, file, 70, 6, 1675);
			attr_dev(aside, "class", "bg-gray-100 p-4 hidden lg:block overflow-auto");
			set_style(aside, "width", "240px");
			add_location(aside, file, 69, 4, 1587);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*headings, $page, active*/ 14) {
				each_value = /*headings*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(aside);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(69:2) {#if headings}",
		ctx
	});

	return block;
}

// (72:8) {#each headings as heading}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*heading*/ ctx[7].title + "";
	let t0;
	let a_href_value;
	let t1;
	let li_class_value;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = "" + (/*$page*/ ctx[3].path + "#" + /*heading*/ ctx[7].id));
			toggle_class(a, "active", /*heading*/ ctx[7] === /*active*/ ctx[2]);
			add_location(a, file, 73, 12, 1792);
			attr_dev(li, "class", li_class_value = "toc-item toc-" + /*heading*/ ctx[7].depth);
			add_location(li, file, 72, 10, 1738);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*headings*/ 2 && t0_value !== (t0_value = /*heading*/ ctx[7].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*$page, headings*/ 10 && a_href_value !== (a_href_value = "" + (/*$page*/ ctx[3].path + "#" + /*heading*/ ctx[7].id))) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*headings, active*/ 6) {
				toggle_class(a, "active", /*heading*/ ctx[7] === /*active*/ ctx[2]);
			}

			if (dirty & /*headings*/ 2 && li_class_value !== (li_class_value = "toc-item toc-" + /*heading*/ ctx[7].depth)) {
				attr_dev(li, "class", li_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(72:8) {#each headings as heading}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main_1;
	let t0;
	let div;
	let html_tag;
	let t1;
	let footer;
	let current;
	let mounted;
	let dispose;
	let if_block = /*headings*/ ctx[1] && create_if_block(ctx);
	footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			main_1 = element("main");
			if (if_block) if_block.c();
			t0 = space();
			div = element("div");
			t1 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			main_1 = claim_element(nodes, "MAIN", { class: true });
			var main_1_nodes = children(main_1);
			if (if_block) if_block.l(main_1_nodes);
			t0 = claim_space(main_1_nodes);
			div = claim_element(main_1_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t1 = claim_space(div_nodes);
			claim_component(footer.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			main_1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(t1);
			attr_dev(div, "class", "markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto");
			add_location(div, file, 79, 2, 1951);
			attr_dev(main_1, "class", "flex md:fs");
			add_location(main_1, file, 67, 0, 1540);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main_1, anchor);
			if (if_block) if_block.m(main_1, null);
			append_dev(main_1, t0);
			append_dev(main_1, div);
			html_tag.m(docs, div);
			append_dev(div, t1);
			mount_component(footer, div, null);
			/*div_binding*/ ctx[6](div);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "scroll", /*handleScroll*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*headings*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(main_1, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main_1);
			if (if_block) if_block.d();
			destroy_component(footer);
			/*div_binding*/ ctx[6](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const loading =  (async () => {
	await loadJS([
		{
			type: "script",
			data: {
				src: "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"
			}
		}
	]);

	// components will be added by paths relative to path of autoloader
	await loadJS([
		{
			type: "script",
			data: {
				src: "https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"
			}
		}
	]);
})();

function instance($$self, $$props, $$invalidate) {
	let $page;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Docs", slots, []);
	const { page } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(3, $page = value));
	let main;
	let headings;
	let active;

	function handleScroll() {
		if (!headings) return;
		let last;

		for (const heading of headings) {
			const rect = heading.el.getBoundingClientRect();
			if (rect.top > 100) break;
			last = heading;
		}

		$$invalidate(2, active = last || headings[0]);
	}

	onMount(async () => {
		main.querySelectorAll("a[href]").forEach(el => {
			const href = el.getAttribute("href");
			if (href.startsWith("#")) el.href = $page.path + href;
		});

		$$invalidate(1, headings = Array.from(main.querySelectorAll("h1,h2,h3,h4,h5,h6"), el => {
			return {
				el,
				id: el.id,
				title: el.textContent,
				depth: +el.tagName.toLowerCase().slice(1)
			};
		}));

		handleScroll();
		await loading;
		window.Prism.highlightAllUnder(main);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Docs> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			main = $$value;
			$$invalidate(0, main);
		});
	}

	$$self.$capture_state = () => ({
		loadJS,
		loading,
		onMount,
		stores: stores$1,
		Footer,
		docs,
		page,
		main,
		headings,
		active,
		handleScroll,
		$page
	});

	$$self.$inject_state = $$props => {
		if ("main" in $$props) $$invalidate(0, main = $$props.main);
		if ("headings" in $$props) $$invalidate(1, headings = $$props.headings);
		if ("active" in $$props) $$invalidate(2, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [main, headings, active, $page, page, handleScroll, div_binding];
}

class Docs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Docs",
			options,
			id: create_fragment.name
		});
	}
}

export default Docs;

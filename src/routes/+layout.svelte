<script lang="ts">

	export const prerender = true;
	
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<main class = "overflow-x-hidden">
<header class = "p-5 bg-neutral-900">
	<h2 class = "h2 font-bold"><span class = "gradient-heading">MOGA</span></h2>
</header>

<div class = "flex flex-col w-screen justify-center overflow-hidden">
<slot />
</div>

<footer class = "bg-neutral-900 p-5">
	<p class = "italic p-2">Note: The author of this website does not endorse any of the views expressed in this website. This website was created for the pure purpose of amusement.</p>
</footer>
</main>
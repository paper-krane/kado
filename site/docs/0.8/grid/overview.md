---
layout: "0.8/documentation"
title: "Grid  Overview"
---
<h1>Overview</h1>
<p class="text-large">A grid system is here to help make the web page layout process a breeze. Simply add intuitive class names and your all set.</p>
<p>Origami's grid system was built using good ol' flexbox making it safe for browsers <span class="highlight">IE11+</span> and of course all other modern browsers. While flexbox is supported partially in IE10+, not all componenets have been tested (one day I hope to test it on IE10) so if you do plan on using Origami for older browsers, there is a 'float' based grid system still packed inside but disabled by default.</p>
<div class="mt-3 mt-5-l"></div>
<h4>Required Files</h4>
<p>For the new grid system (installed and compiled by default), simply make sure to import <span class="highlight">flex-grid</span> like so:</p>
<pre><code class="language-scss">@import "layout/flex-grid";</code></pre>
<p>Or else, for older browers feel free to import the <span class="highlight">_old-school-grid</span> (<em>which is available but <strong>not included to the master Origami build</strong> by default</em>):</p>
<pre><code class="language-scss">@import "layout/old-school-grid";</code></pre>
<p>The grid layout classes can be used interchangeably as they are identical. So if you by chance are upgrading from a previous version of Origami, you can do so in a non-descructive way.</p>

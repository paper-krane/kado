---
layout: "0.8/documentation"
title: "Responsive Breakpoints"
---

<div class="col s12 l8 xl9">
<h1 id="breakpoints">Responsive Breakpoints</h1>
<p>Since {{ site.title }} is designed to be mobile first, we use a handful of media queries to create breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements and layouts as the viewport changes. Their sizes are as follows:</p>
<pre><code class="language-scss">// Small devices such as portrait mobile devices etc.
// Will affect devices <= 599px

// Medium devices like landscape mobile phones or small tablets
@media screen and (min-width: 600px) {...}

// Larger devices such as landscape tablets and small laptops
@media screen and (min-width: 992px) {...}

// Extra large devices such as desktop screens etc.
@media screen and (min-width: 1280px) {...}

// And last but not least, the mega screens such as iMac's, 27" PC monitors etc.
@media screen and (min-width: 1600px) {...}</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="min-width-sass-variables">Min-Width SASS Variables <a href="#min-width-sass-variables">#</a></h4>
<p>Since {{ site.title }} is written in SASS and further compiled to CSS, you can customize these breakpoints easily in the <span class="highlight">"/scss/components/_variables.scss"</span> file. The file will give you the following variables which you can easily change and have effect all other {{ site.title }} components.</p>
<pre><code class="language-scss">// Media Queries
$mobile-landscape-screen-up: 600px !default; // Used for min-width cases
$tablet-landscape-screen-up: 992px !default; // Used for min-width cases
$desktop-screen-up: 1280px !default; // Used for min-width cases
$desktop-large-screen-up: 1600px !default; // Used for min-width cases</code></pre>
<p>Please also note that we do also include 'max-width' breakpoint values. While not used often, we do have them for some features such as hiding/revealing elements based upon screen size. When editing the 'min-width' media queries, make sure to edit the 'max-width' media query breakpoints as well.</p>
<div class="mt-3 mt-5-l"></div>



<h4 id="max-width-sass-variables">Max-Width SASS Variables <a href="#max-width-sass-variables">#</a></h4>
<pre><code class="language-scss">// Media Queries
$mobile-screen: 599.98px !default; // Used for max-width cases
$tablet-screen-down: 991.98px !default; // Used for max-width cases
$desktop-screen-down: 1279.98px !default; // Used for max-width cases
$desktop-large-screen-down: 1599.98px !default; // Used for max-width cases</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="breakpoint-naming">Breakpoint Naming For Utilities, Grid Layouts &amp; More <a href="#breakpoint-naming">#</a></h4>
<p>{{ site.title }} was designed with the idea in mind that components, such as spacing, text alignment and much more, may need to be adjusted depending on the screen size. So, we decided to create a simple breakpoint naming convention that will allow you adjust a vast amount of utility classes to adjust based upon the viewport size.</p>
<p>The breakpoint names are pretty simple:</p>
<ul>
    <li><span class="highlight">s</span> - Small Devices <em>( <= 599.98px )</em></li>
    <li><span class="highlight">m</span> - Medium Devices <em>( 600px to 991.98px )</em></li>
    <li><span class="highlight">l</span> - Large Devices <em>( 992px to 1279.98px )</em></li>
    <li><span class="highlight">xl</span> - Extra Large Devices <em>( 1280px to 1599.98px )</em></li>
    <li><span class="highlight">xxl</span> - Extra Extra Large Devices <em>( >= 1600px )</em></li>
</ul>
<p>Usage is pretty simple as well but will vary slightly between utility classes and grid layout classes. Here is a quick example:</p>
<pre><code class="language-html">&lt;!-- Grid usage - notice the 's12' and 'l6'. These quick classes are saying on small devices, span 12 columns. On large devices, span only 6 columns. -->
&lt;div class="col s12 l6"&gt;
    &lt;!-- For utility classes, the breakpoint names are a little different, they are added at the end of the class name --&gt;
    &lt;div class="py-2 py-4-l"&gt;
        &lt;!-- We will learn more of about these classes and usage later --&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<blockquote>
    Since {{ site.title }} was designed mobile first, if you declare a particular style on the <span class="highlight">s</span> (small) device size <em>OR</em> use the unprefixed version (not declaring a breakpoint size), it will affect every device size unless another sizing declaration is made for a larger breakpoint.
</blockquote>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#breakpoints">Breakpoints</a></li>
        <li><a href="#min-width-sass-variables">Min Width SASS Variables</a></li>
        <li><a href="#max-width-sass-variables">Max Width SASS Variables</a></li>
        <li><a href="#breakpoint-naming">Breakpoint Naming</a></li>
    </ul>
</div>

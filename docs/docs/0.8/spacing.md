---
layout: "0.8/documentation"
title: "Spacing"
---
<div class="col s12 l8 xl9">
<h1>Spacing</h1>
<p class="text-large">{{ site.title }} includes a variety of responsive margin and padding utility classes to modify the spacing between elements.</p>
<div class="mt-3 mt-5-l"></div>


<h4 id="how-it-works">How Spacing Utilities Work <a href="#how-it-works">#</a></h4>
<p>{{ site.title }} spacing utilities allow you to add margin and padding CSS rules with a set of utility classes. These classes can effect individual sides, all sides, horizontal sides and of course verticals sides as well. Each class has a responsive variation allowing you to add spacing or remove it based upon the <a href="/docs/breakpoints">breakpoint</a>. Class spacing sizes range from .5rem to 5rem.</p>
<div class="mt-3 mt-5-l"></div>


<h4 id="spacing-syntax">Spacing Syntax <a href="#spacing-syntax">#</a></h4>
<p>As with most all of our breakpoint based utilities, spacing utilities that apply to all breakpoints have no breakpoint abbreviation in them (for example: <span class="highlight">flex</span> applies to all breakpoints while <span class="highlight">flex-m</span> applies to medium breakpoint sizes and up).</p>
<p>Spacing utility classes are named using the format <span class="highlight">{property}{sides}-{size}</span> for small breakpoint and up (all breakpoints) and <span class="highlight">{property}{sides}-{size}-{breakpoint}</span>.</p>
<p>Where <em>property</em> is one of:</p>
<ul>
    <li><span class="highlight">m</span> - for classes that set margin</li>
    <li><span class="highlight">p</span> - for classes that set padding</li>
</ul>
<p>Where <em>sides</em> is one of:</p>
<ul>
    <li><span class="highlight">t</span> - for classes that set margin-top or padding-top</li>
    <li><span class="highlight">b</span> - for classes that set margin-bottom or padding-bottom</li>
    <li><span class="highlight">l</span> - for classes that set margin-left or padding-left</li>
    <li><span class="highlight">r</span> - for classes that set margin-right or padding-right</li>
    <li><span class="highlight">x</span> - for classes that set both *-left and *-right</li>
    <li><span class="highlight">y</span> - for classes that set both *-top and *-bottom</li>
    <li>blank - for classes that set a margin or padding on all 4 sides of the element</li>
</ul>
<p>Where <em>size</em> is one of:</p>
<ul>
<li><span class="highlight">0</span> - for classes that eliminate the <span class="highlight">margin</span> or <span class="highlight">padding</span> by setting it to <span class="highlight">0</span></li>
<li><span class="highlight">1</span> - (by default) for classes that set the <span class="highlight">margin</span> or <span class="highlight">padding</span> to <span class="highlight">1rem</span></li>
<li><span class="highlight">2</span> - (by default) for classes that set the <span class="highlight">margin</span> or <span class="highlight">padding</span> to <span class="highlight">2rem</span></li>
<li><span class="highlight">3</span> - (by default) for classes that set the <span class="highlight">margin</span> or <span class="highlight">padding</span> to <span class="highlight">3rem</span></li>
<li><span class="highlight">4</span> - (by default) for classes that set the <span class="highlight">margin</span> or <span class="highlight">padding</span> to <span class="highlight">4rem</span></li>
<li><span class="highlight">5</span> - (by default) for classes that set the <span class="highlight">margin</span> or <span class="highlight">padding</span> to <span class="highlight">5rem</span></li>
<li><span class="highlight">auto</span> - for classes that set the <span class="highlight">margin</span> to <span class="highlight">auto</span></li>
</ul>
<p><em>(Adding more sizes / altering sizes is as easy as adjusting the SASS loop that generates the sizes based upon the iteration.)</em></p>
<div class="mt-3 mt-5-l"></div>


<h4 id="example-usage">Example Usage <a href="#example-usage">#</a></h4>
<div class="demo-container text-small">
    <div class="demo-content inline-block p-2 pr-5-l pl-1-l">Padding Classes</div>
    <div class="demo-content inline-block ml-1 ml-5-l mb-4-l">Margin Classes</div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="inline-block p-2 pr-5-l pl-1-l"&gt;
    Padding Classes
&lt;/div&gt;
&lt;div class="inline-block ml-1 ml-5-l mb-4-l"&gt;
    Margin Classes
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>


<h4 id="horizontal-centering">Horizontal Centering <a href="#horizontal-centering">#</a></h4>
<p>Additionally, {{ site.title }} also includes an <span class="highlight">mx-auto</span> class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.</p>
<div class="demo-container text-small">
    <div class="demo-content text-center mx-auto" style="width: 180px">I'm Centered</div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="text-center mx-auto" style="width: 180px"&gt;
    I'm Centered
&lt;/div&gt;</code></pre>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#spacing-syntax">Syntax</a></li>
        <li><a href="#example-usage">Example</a></li>
        <li><a href="#horizontal-centering">Horizontal Centering</a></li>
    </ul>
</div>

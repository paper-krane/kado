---
layout: "0.8/documentation"
title: "Buttons"
---

<div class="col s12 l8 xl9">
<h1>Buttons</h1>
<p class="text-large">Unique button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
<div class="mt-3 mt-5-l"></div>



<h4 id="default-button">Default Button <a href="#default-button">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn">Default Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn"&gt;
    Default Button
&lt;/a&gt;</code></pre>
<p>Origami by default comes with one button style/color scheme with subtle variations. The reasoning was rather simple, Origami is designed to be used as a starting point for design. To be built upon and customized to make it your own. While it may start with an elegant button, it by no means needs to stay the same moving forward.</p>
<div class="mt-3 mt-5-l"></div>



<h4 id="usable-button-tags">Usable Button Tags <a href="#usable-button-tags">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn">Anchor Element</a>
    <button type="submit" class="btn">Button Element</button>
    <label class="btn">Label Element</label>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn"&gt;
    Anchor Element
&lt;/a&gt;
&lt;button type="submit" class="btn"&gt;
    Button Element
&lt;/button&gt;
&lt;label for="example-element" class="btn"&gt;
    Label Element
&lt;/label&gt;</code></pre>
<p>The <span class="highlight">btn</span> class is very versatile and can be used with many HTML elements such as <span class="highlight">&lt;div&gt;</span>s and <span class="highlight">&lt;span&gt;</span>s as well.</p>
<blockquote>
    While it may be inconvenient to some, using the <span>btn</span> class on an input element will render the proper button shape, but not the gradient hover effect because HTML input elements can not use CSS pseudo selectors. To use the <span class="highlight">btn</span> class with input elements you must use the <span class="highlight">btn-standard</span> class in conjunction with the <span class="highlight">btn</span> class. For an example, see <a href="#standard-buttons">below</a>.
</blockquote>
<div class="mt-3 mt-5-l"></div>



<h4 id="outlined-buttons">Outlined Buttons <a href="#outlined-buttons">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn btn-outline">Outlined Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-outline"&gt;
    Outlined Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="standard-buttons">Standard Buttons <a href="#standard-buttons">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn btn-standard">Standard (Boring) Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-standard"&gt;
    Standard (Boring) Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="button-sizes">Button Sizes <a href="#button-sizes">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn btn-small mb-1">Small Button</a>
    <a href="#" class="btn mb-1">Default Button</a>
    <a href="#" class="btn btn-large">Large Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-small"&gt;
    Small Button
&lt;/a&gt;
&lt;a href="#" class="btn"&gt;
    Default Button
&lt;/a&gt;
&lt;a href="#" class="btn btn-large"&gt;
    Large Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="inline-button-usage">Inline Button Usage <a href="#inline-button-usage">#</a></h4>
<div class="demo-container">
    <p>This is a piece of a paragraph with a <a href="#" class="btn btn-small">Button</a> to click right in the middle!</p>
</div>
<pre class="mt-0"><code class="language-html">&lt;p&gt;
    This is a piece of a paragraph with a &lt;a href="#" class="btn btn-small"&gt;Button&lt;/a&gt; to click right in the middle!
&lt;/p&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="disabled-button-state">Disabled Button State <a href="#disabled-button-state">#</a></h4>
<p>Make buttons look and act inactive by adding the <span class="highlight">disabled</span> boolean attribute to any <span class="highlight">&lt;button&gt;</span> element.</p>
<p>Disabled buttons using the <span class="highlight">&lt;a&gt;</span> element behave a bit different:</p>
<ul>
    <li><span class="highlight">&lt;a&gt;</span>s don’t support the disabled attribute, so you must add the <span class="highlight">disabled</span> class to make it visually appear disabled.</li>
    <li>As Origami is built for browsers <span class="highlight">IE11+</span>, the disabled class adds the <span class="highlight">pointer-events: none;</span> CSS property which will help prevent links from performing their default actions through the use of the 'click' event (but not tab and keyboard events). Please also understand that having the pointer events set to 'none' will also force the browser to not show the 'not allowed' cursor.</li>
    <li>Disabled buttons should include the aria-disabled="true" attribute to indicate the state of the element to assistive technologies.</li>
</ul>
<div class="demo-container">
    <button class="btn" disabled>Disabled Button</button>
    <a href="#button-example" class="btn disabled">Disabled Anchor</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;button class="btn" disabled&gt;
    Disabled button
&lt;/button&gt;
&lt;a href="#button-example" class="btn disabled"&gt;
    Disabled Anchor
&lt;/a&gt;</code></pre>
<blockquote>
<h6>Link Functionality Caveat</h6>
The .disabled class uses pointer-events: none to try to disable the link functionality of <span class="highlight">&lt;a&gt;</span>s, but that CSS property is not yet standardized. In addition, even in browsers that do support <span class="highlight">pointer-events: none</span>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <span class="highlight">tabindex="-1"</span> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
</blockquote>
<div class="mt-3 mt-5-l"></div>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#default-button">Default Button</a></li>
        <li><a href="#usable-button-tags">Usable Button Tags</a></li>
        <li><a href="#outlined-buttons">Outlined Buttons</a></li>
        <li><a href="#standard-buttons">Standard Buttons</a></li>
        <li><a href="#button-sizes">Button Sizes</a></li>
        <li><a href="#inline-button-usage">Inline Button Usage</a></li>
        <li><a href="#disabled-button-state">Disabled Button State</a></li>
    </ul>
</div>

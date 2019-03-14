---
layout: "0.8/documentation"
title: "Buttons"
---

<div class="col s12 l8 xl9">
<h1>Buttons</h1>
<p class="text-large">Unique button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
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



<h4 id="default-button">Default Button <a href="#default-button">#</a></h4>
<div class="demo-container">
    <a href="#" class="btn">Default Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn"&gt;
    Default Button
&lt;/a&gt;</code></pre>
<p>{{ site.title }} by default comes with one color scheme. The reasoning was rather simple, {{ site.title }} is designed to be used as a starting point for design. To be built upon and customized to make it your own with color schemes and even shape. While it may start with an elegant button, it by no means needs to stay the same moving forward.</p>
<div class="mt-3 mt-5-l"></div>



<h5 id="standard-buttons">Standard Buttons <a href="#standard-buttons">#</a></h5>
<div class="demo-container">
    <a href="#" class="btn btn-standard">Standard Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-standard"&gt;
    Standard Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="light-buttons">Light Buttons <a href="#standard-buttons">#</a></h5>
<div class="demo-container dark">
    <a href="#" class="btn btn-light">Light Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-standard"&gt;
    Standard Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="outlined-buttons">Outlined Buttons <a href="#outlined-buttons">#</a></h5>
<div class="demo-container">
    <a href="#" class="btn btn-outline">Outlined Button</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-outline"&gt;
    Outlined Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="button-sizes">Button Sizes <a href="#button-sizes">#</a></h5>
<div class="demo-container">
    <a href="#" class="btn btn-large">Large Button</a>
    <a href="#" class="btn">Default Button</a>
    <a href="#" class="btn btn-small">Small Button</a>
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



<h5 id="inline-button-usage">Inline Button Usage <a href="#inline-button-usage">#</a></h5>
<div class="demo-container">
    <p>This is a piece of a paragraph with a <a href="#" class="btn btn-small">Button</a> to click right in the middle!</p>
</div>
<pre class="mt-0"><code class="language-html">&lt;p&gt;
    This is a piece of a paragraph with a &lt;a href="#" class="btn btn-small"&gt;Button&lt;/a&gt; to click right in the middle!
&lt;/p&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="disabled-button-state">Disabled Button State <a href="#disabled-button-state">#</a></h5>
<p>Make buttons look and act inactive by adding the <span class="highlight">disabled</span> boolean attribute to any <span class="highlight">&lt;button&gt;</span> element.</p>
<p>Disabled buttons using the <span class="highlight">&lt;a&gt;</span> element behave a bit different:</p>
<ul>
    <li><span class="highlight">&lt;a&gt;</span>s don’t support the disabled attribute, so you must add the <span class="highlight">disabled</span> class to make it visually appear disabled.</li>
    <li>As {{ site.title }} is built for browsers <span class="highlight">IE11+</span>, the disabled class adds the <span class="highlight">pointer-events: none;</span> CSS property which will help prevent links from performing their default actions through the use of the 'click' event (but not tab and keyboard events). Please also understand that having the pointer events set to 'none' will also force the browser to not show the 'not allowed' cursor.</li>
    <li>Disabled buttons should include the aria-disabled="true" attribute to indicate the state of the element to assistive technologies.</li>
</ul>
<div class="demo-container">
    <button class="btn" disabled>Disabled Button</button>
    <a href="#button-example" class="btn disabled" tabindex="-1">Disabled Anchor</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;button class="btn" disabled&gt;
    Disabled button
&lt;/button&gt;
&lt;a href="#button-example" class="btn disabled" tabindex="-1"&gt;
    Disabled Anchor
&lt;/a&gt;</code></pre>
<blockquote>
<h6>Link Functionality Caveat</h6>
The .disabled class uses pointer-events: none to try to disable the link functionality of <span class="highlight">&lt;a&gt;</span>s, but that CSS property is not yet standardized. In addition, even in browsers that do support <span class="highlight">pointer-events: none</span>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <span class="highlight">tabindex="-1"</span> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
</blockquote>
<div class="mt-3 mt-5-l"></div>



<h4 id="slide-buttons">Slide Buttons <a href="#slide-button">#</a></h4>
<div class="demo-container">
<a href="#" class="btn-slide">
    <span class="btn-slide-icon"></span>
    Slide Button
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn-slide"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Slide Button
&lt;/a&gt;</code></pre>
<p>Shown above, slide buttons are a unique variation of the normal button but one that gives you the ability to accent your normal buttons for secondary call to actions. Unlike the default button, the slide button does involve additional syntax to make it all work.</p>
<div class="mt-3 mt-5-l"></div>



<h5 id="standard-slide-buttons">Standard Slide Buttons <a href="#standard-slide-button">#</a></h5>
<div class="demo-container">
<a href="#" class="btn-slide btn-standard">
    <span class="btn-slide-icon"></span>
    Standard Slide Button
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn-slide btn-standard"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Standard Slide Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="light-slide-buttons">Light Slide Buttons <a href="#light-slide-button">#</a></h5>
<div class="demo-container dark">
<a href="#" class="btn-slide btn-light">
    <span class="btn-slide-icon"></span>
    Light Slide Button
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn-slide btn-light"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Light Slide Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="outlined-slide-buttons">Outlined Slide Buttons <a href="#outlined-slide-button">#</a></h5>
<div class="demo-container">
<a href="#" class="btn-slide btn-outline">
    <span class="btn-slide-icon"></span>
    Outlined Slide Button
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn-slide btn-outline"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Outlined Slide Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="slide-button-sizes">Slide Button Sizes<a href="#slide-button-sizes">#</a></h5>
<div class="demo-container">
<a href="#" class="btn-slide btn-large">
    <span class="btn-slide-icon"></span>
    Large Slide Button
</a>
<a href="#" class="btn-slide ">
    <span class="btn-slide-icon"></span>
    Normal Slide Button
</a>
<a href="#" class="btn-slide btn-small">
    <span class="btn-slide-icon"></span>
    Small Slide Button
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn-slide btn-outline"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Outlined Slide Button
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="disabled-slide-buttons">Disabled Slide Buttons <a href="#disabled-slide-button">#</a></h5>
<div class="demo-container">
<button class="btn-slide" disabled>
    <span class="btn-slide-icon"></span>
    Disabled Slide &lt;button&gt;
</button>
<a href="#" class="btn-slide disabled" tabindex="-1">
    <span class="btn-slide-icon"></span>
    Disabled Slide &lt;a&gt;
</a>
</div>
<pre class="mt-0"><code class="language-html">&lt;button class="btn-slide" disabled&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Disabled Slide Button
&lt;/button&gt;
&lt;a href="#" class="btn-slide disabled" tabindex="-1"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Disabled Slide Anchor
&lt;/a&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="mix-and-match">Mixing & Matching Button Style Classes <a href="#mix-and-match">#</a></h4>
<p>As you can see from the above buttons, you have, by default, 3 simple color variations (default, light, and standard) along with an outlined style and a size. With these classes you can mix a color style with a size and the outline class. Here is an example:</p>
<div class="demo-container">
    <a href="#" class="btn btn-large btn-standard mr-half">Start Your Free Trial</a>
    <a href="#" class="btn-slide btn-large btn-outline">
        <span class="btn-slide-icon"></span>
        Learn More
    </a>
</div>
<pre class="mt-0"><code class="language-html">&lt;a href="#" class="btn btn-large btn-standard"&gt;
    Start Your Free Trial
&lt;/a&gt;
&lt;a href="#" class="btn-slide btn-large btn-outline"&gt;
    &lt;span class="btn-slide-icon"&gt;&lt;/span&gt;
    Learn More
&lt;/a&gt;</code></pre>


</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#usable-button-tags">Usable Button Tags</a></li>
        <li>
            <a href="#default-button">Default Button</a>
            <ul>
                <li><a href="#standard-buttons">Standard Button</a></li>
                <li><a href="#light-buttons">Light Button</a></li>
                <li><a href="#outlined-buttons">Outlined Button</a></li>
                <li><a href="#button-sizes">Button Sizes</a></li>
                <li><a href="#inline-button-usage">Inline Button Usage</a></li>
                <li><a href="#disabled-button-state">Disabled Button State</a></li>
            </ul>
        </li>
        <li>
            <a href="#slide-buttons">Slide Button</a>
            <ul>
                <li><a href="#standard-slide-buttons">Standard Slide Button</a></li>
                <li><a href="#light-slide-buttons">Light Slide Button</a></li>
                <li><a href="#outlined-slide-buttons">Outlined Slide Button</a></li>
                <li><a href="#slide-button-sizes">Slide Button Sizes</a></li>
                <li><a href="#disabled-slide-button-state">Disabled Slide Button State</a></li>
            </ul>
        </li>
        <li><a href="#mix-and-match">Mixing & Matching Button Classes</a></li>
    </ul>
</div>

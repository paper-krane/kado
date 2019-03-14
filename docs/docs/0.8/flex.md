---
layout: "0.8/documentation"
title: "Flexbox Layout Utilities"
---
<div class="col s12 l8 xl9">
<h1>Flexbox Layout Utilities</h1>
<p class="text-large">Extend the functionality of the layout, alignment, sizing, & ordering of {{ site.title }}'s grid system by adding responsive flexbox utility classes. Or, you can use them on their own and create elegant layouts.</p>
<div class="mt-3 mt-5-l"></div>


<h4 id="flex-display">Setting Flex Display <a href="#flex-display">#</a></h4>
<p>Add flex classes to create a <span class="highlight">flexbox</span> container and transform direct children elements into flex items. Flex containers and items are able to be styled further with additional flex properties. Both displays of <span class="highlight">flex</span> and <span class="highlight">inline-flex</span> available.</p>
<div class="demo-container text-small">
    <div class="demo-content flex mb-1">
        I have a display property of flex
    </div>
    <div class="demo-content inline-flex">
        I have a display property of inline-flex
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex mb-1"&gt;
    I have a display property of flex
&lt;/div&gt;
&lt;div class="inline-flex"&gt;
    I have a display property of inline-flex
&lt;/div&gt;</code></pre>
<p>To extend this usage even further, flex displays also come with responsive class names as well to give you the freedom to apply the display property of 'flex' at whichever breakpoint you want. It uses our <a href="/docs/breakpoints">breakpoint</a> naming convention and can be used like so...</p>
<p>For flex:</p>
<ul>
    <li><span class="highlight">.flex</span> (applies to all breakpoints)</li>
    <li><span class="highlight">.flex-m</span></li>
    <li><span class="highlight">.flex-l</span></li>
    <li><span class="highlight">.flex-xl</span></li>
    <li><span class="highlight">.flex-xxl</span></li>
</ul>
<p>For inline-flex:</p>
<ul>
    <li><span class="highlight">.inline-flex</span> (applies to all breakpoints)</li>
    <li><span class="highlight">.inline-flex-m</span></li>
    <li><span class="highlight">.inline-flex-l</span></li>
    <li><span class="highlight">.inline-flex-xl</span></li>
    <li><span class="highlight">.inline-flex-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="flex-direction">Flex Item Direction <a href="#flex-direction">#</a></h4>
<p>You can set both the horizontal and vertical <span class="highlight">flex-direction</span> for flex items (direct children of the flex container) with directional utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
<p>To set the <strong>horizontal</strong> direction (the browser default), you can use the <span class="highlight">row-normal</span> and <span class="highlight">row-reverse</span> classes on the flexbox container to affect the flex items.</p>
<div class="demo-container text-small">
    <div class="demo-content flex row-normal mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex row-reverse">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex row-normal mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex row-reverse"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>To set the <strong>vertical</strong> direction, you can use the <span class="highlight">column</span> and <span class="highlight">column-reverse</span> classes on the parent flex container.</p>
<div class="demo-container text-small">
    <div class="demo-content flex column mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex column-reverse">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex column mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex column-reverse"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>Of course responsive variations also exist for <span class="highlight">flex-direction</span> classes...</p>
<p>For row-normal:</p>
<ul>
    <li><span class="highlight">.row-normal</span></li>
    <li><span class="highlight">.row-normal-m</span></li>
    <li><span class="highlight">.row-normal-l</span></li>
    <li><span class="highlight">.row-normal-xl</span></li>
    <li><span class="highlight">.row-normal-xxl</span></li>
</ul>
<p>For row-reverse:</p>
<ul>
    <li><span class="highlight">.row-reverse</span></li>
    <li><span class="highlight">.row-reverse-m</span></li>
    <li><span class="highlight">.row-reverse-l</span></li>
    <li><span class="highlight">.row-reverse-xl</span></li>
    <li><span class="highlight">.row-reverse-xxl</span></li>
</ul>
<p>For column:</p>
<ul>
    <li><span class="highlight">.column</span></li>
    <li><span class="highlight">.column-m</span></li>
    <li><span class="highlight">.column-l</span></li>
    <li><span class="highlight">.column-xl</span></li>
    <li><span class="highlight">.column-xxl</span></li>
</ul>
<p>For column-reverse:</p>
<ul>
    <li><span class="highlight">.column-reverse</span></li>
    <li><span class="highlight">.column-reverse-m</span></li>
    <li><span class="highlight">.column-reverse-l</span></li>
    <li><span class="highlight">.column-reverse-xl</span></li>
    <li><span class="highlight">.column-reverse-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="justify-content">Justify Flex Content <a href="#justify-content">#</a></h4>
<p>Use <span class="highlight">justify-content</span> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start by browser default, y-axis if the <span class="highlight">flex-direction: column</span>). Choose from <span class="highlight">start</span> (browser default), <span class="highlight">end</span>, <span class="highlight">center</span>, <span class="highlight">between</span>, or <span class="highlight">around</span>.</p>
<p>A quick definition for 'start' and 'end' alignment keywords:</p>
<ul>
    <li><span class="highlight">start</span> = Positioned <em>left</em> for row styling and <em>top</em> if the flex-direction is set to column</li>
    <li><span class="highlight">end</span> = Positioned <em>right</em> for row styling and <em>bottom</em> if the flex-direction is set to column</li>
</ul>
<div class="demo-container text-small">
    <div class="demo-content flex justify-start mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex justify-end mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex justify-center mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex justify-space-between mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex justify-space-around">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex justify-start mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex justify-end mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex justify-center mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex justify-space-between mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex justify-space-around"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the justified content classes...</p>
<p>For justify-start:</p>
<ul>
    <li><span class="highlight">.justify-start</span></li>
    <li><span class="highlight">.justify-start-m</span></li>
    <li><span class="highlight">.justify-start-l</span></li>
    <li><span class="highlight">.justify-start-xl</span></li>
    <li><span class="highlight">.justify-start-xxl</span></li>
</ul>
<p>For justify-end:</p>
<ul>
    <li><span class="highlight">.justify-end</span></li>
    <li><span class="highlight">.justify-end-m</span></li>
    <li><span class="highlight">.justify-end-l</span></li>
    <li><span class="highlight">.justify-end-xl</span></li>
    <li><span class="highlight">.justify-end-xxl</span></li>
</ul>
<p>For justify-center:</p>
<ul>
    <li><span class="highlight">.justify-center</span></li>
    <li><span class="highlight">.justify-center-m</span></li>
    <li><span class="highlight">.justify-center-l</span></li>
    <li><span class="highlight">.justify-center-xl</span></li>
    <li><span class="highlight">.justify-center-xxl</span></li>
</ul>
<p>For justify-space-between:</p>
<ul>
    <li><span class="highlight">.justify-space-between</span></li>
    <li><span class="highlight">.justify-space-between-m</span></li>
    <li><span class="highlight">.justify-space-between-l</span></li>
    <li><span class="highlight">.justify-space-between-xl</span></li>
    <li><span class="highlight">.justify-space-between-xxl</span></li>
</ul>
<p>For justify-space-around:</p>
<ul>
    <li><span class="highlight">.justify-space-around</span></li>
    <li><span class="highlight">.justify-space-around-m</span></li>
    <li><span class="highlight">.justify-space-around-l</span></li>
    <li><span class="highlight">.justify-space-around-xl</span></li>
    <li><span class="highlight">.justify-space-around-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="align-content">Aligned Flex Content <a href="#align-content">#</a></h4>
<p>Use <span class="highlight">align-items</span> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <span class="highlight">flex-direction: column</span>). Choose from <span class="highlight">start</span>, <span class="highlight">end</span>, <span class="highlight">center</span>, <span class="highlight">baseline</span>, or <span class="highlight">stretch</span> (browser default).</p>
<p>A quick definition for 'start' and 'end' alignment keywords:</p>
<ul>
    <li><span class="highlight">start</span> = Positioned <em>top</em> for row styling and <em>left</em> if the flex-direction is set to column</li>
    <li><span class="highlight">end</span> = Positioned <em>bottom</em> for row styling and <em>right</em> if the flex-direction is set to column</li>
</ul>
<blockquote>Please also note that the flex containers need a height value and not min-height or will cause flex item alignment to not work for IE11</blockquote>
<div class="demo-container text-small">
    <div class="demo-content demo-tall flex align-start mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex align-end mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex align-center mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex align-baseline mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex align-stretch">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex align-start mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex align-end mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex align-center mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex align-baseline mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex align-stretch"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the alignment classes...</p>
<p>For align-start:</p>
<ul>
    <li><span class="highlight">.align-start</span></li>
    <li><span class="highlight">.align-start-m</span></li>
    <li><span class="highlight">.align-start-l</span></li>
    <li><span class="highlight">.align-start-xl</span></li>
    <li><span class="highlight">.align-start-xxl</span></li>
</ul>
<p>For align-end:</p>
<ul>
    <li><span class="highlight">.align-end</span></li>
    <li><span class="highlight">.align-end-m</span></li>
    <li><span class="highlight">.align-end-l</span></li>
    <li><span class="highlight">.align-end-xl</span></li>
    <li><span class="highlight">.align-end-xxl</span></li>
</ul>
<p>For align-center:</p>
<ul>
    <li><span class="highlight">.align-center</span></li>
    <li><span class="highlight">.align-center-m</span></li>
    <li><span class="highlight">.align-center-l</span></li>
    <li><span class="highlight">.align-center-xl</span></li>
    <li><span class="highlight">.align-center-xxl</span></li>
</ul>
<p>For align-baseline:</p>
<ul>
    <li><span class="highlight">.align-baseline</span></li>
    <li><span class="highlight">.align-baseline-m</span></li>
    <li><span class="highlight">.align-baseline-l</span></li>
    <li><span class="highlight">.align-baseline-xl</span></li>
    <li><span class="highlight">.align-baseline-xxl</span></li>
</ul>
<p>For align-stretch:</p>
<ul>
    <li><span class="highlight">.align-stretch</span></li>
    <li><span class="highlight">.align-stretch-m</span></li>
    <li><span class="highlight">.align-stretch-l</span></li>
    <li><span class="highlight">.align-stretch-xl</span></li>
    <li><span class="highlight">.align-stretch-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="align-self">Flex Items Self Alignment <a href="#align-self">#</a></h4>
<p>Use <span class="highlight">align-self</span> utilities on flexbox items (direct child items of the flex container) to individually change their alignment on the cross axis (the y-axis to start, x-axis if <span class="highlight">flex-direction: column</span>). Choose from the same options as <span class="highlight">align-items</span>: <span class="highlight">start</span>, <span class="highlight">end</span>, <span class="highlight">center</span>, <span class="highlight">baseline</span>, or <span class="highlight">stretch</span> (browser default).</p>
<div class="demo-container text-small">
    <div class="demo-content demo-tall flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content align-self-start">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content align-self-end">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content align-self-center">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content align-self-baseline">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-tall flex">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content align-self-stretch">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="align-self-start"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="align-self-end"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="align-self-center"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="align-self-baseline"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="align-self-stretch"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the flex item alignment classes...</p>
<p>For align-self-start:</p>
<ul>
    <li><span class="highlight">.align-self-start</span></li>
    <li><span class="highlight">.align-self-start-m</span></li>
    <li><span class="highlight">.align-self-start-l</span></li>
    <li><span class="highlight">.align-self-start-xl</span></li>
    <li><span class="highlight">.align-self-start-xxl</span></li>
</ul>
<p>For align-self-end:</p>
<ul>
    <li><span class="highlight">.align-self-end</span></li>
    <li><span class="highlight">.align-self-end-m</span></li>
    <li><span class="highlight">.align-self-end-l</span></li>
    <li><span class="highlight">.align-self-end-xl</span></li>
    <li><span class="highlight">.align-self-end-xxl</span></li>
</ul>
<p>For align-self-center:</p>
<ul>
    <li><span class="highlight">.align-self-center</span></li>
    <li><span class="highlight">.align-self-center-m</span></li>
    <li><span class="highlight">.align-self-center-l</span></li>
    <li><span class="highlight">.align-self-center-xl</span></li>
    <li><span class="highlight">.align-self-center-xxl</span></li>
</ul>
<p>For align-self-baseline:</p>
<ul>
    <li><span class="highlight">.align-self-baseline</span></li>
    <li><span class="highlight">.align-self-baseline-m</span></li>
    <li><span class="highlight">.align-self-baseline-l</span></li>
    <li><span class="highlight">.align-self-baseline-xl</span></li>
    <li><span class="highlight">.align-self-baseline-xxl</span></li>
</ul>
<p>For align-self-stretch:</p>
<ul>
    <li><span class="highlight">.align-self-stretch</span></li>
    <li><span class="highlight">.align-self-stretch-m</span></li>
    <li><span class="highlight">.align-self-stretch-l</span></li>
    <li><span class="highlight">.align-self-stretch-xl</span></li>
    <li><span class="highlight">.align-self-stretch-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="fill">Flex Item Fill <a href="#fill">#</a></h4>
<p>Use the <span class="highlight">fill</span> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.</p>
<div class="demo-container text-small">
    <div class="demo-content flex">
        <div class="demo-content fill">Flex item 1</div>
        <div class="demo-content fill">Flex item 2 with additional content</div>
        <div class="demo-content fill">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex"&gt;
    &lt;div class="fill"&gt;Flex item 1&lt;/div&gt;
    &lt;div class="fill"&gt;Flex item 2 with additional content&lt;/div&gt;
    &lt;div class="fill"&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the flex item fill classes...</p>
<ul>
    <li><span class="highlight">.fill</span></li>
    <li><span class="highlight">.fill-m</span></li>
    <li><span class="highlight">.fill-l</span></li>
    <li><span class="highlight">.fill-xl</span></li>
    <li><span class="highlight">.fill-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="grow-and-shrink">Flex Item Grow &amp; Shrink <a href="#grow-and-shrink">#</a></h4>
<p>Use <span class="highlight">flex-grow</span> and <span class="highlight">flex-grow-initial</span> utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the <span class="highlight">flex-grow</span> element uses all available space it can, while forcing the remaining two flex items to use only their necessary space.</p>
<div class="demo-container text-small">
    <div class="demo-content flex">
        <div class="demo-content flex-grow">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex"&gt;
    &lt;div class="flex-grow"&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>Use <span class="highlight">flex-shrink</span> and <span class="highlight">flex-shrink-initial</span> utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second and third flex item with <span class="highlight">flex-shrink</span> is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with the class <span class="highlight">width-100</span>.</p>
<div class="demo-container text-small">
    <div class="demo-content flex">
        <div class="demo-content width-100">Flex item 1</div>
        <div class="demo-content flex-shrink">Flex item 2</div>
        <div class="demo-content flex-shrink">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex"&gt;
    &lt;div class="width-100"&gt;Flex item 1&lt;/div&gt;
    &lt;div class="flex-shrink"&gt;Flex item 2&lt;/div&gt;
    &lt;div class="flex-shrink"&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the <span class="highlight">flex-grow</span>/<span class="highlight">flex-shrink</span> classes...</p>
<p>For flex-grow:</p>
<ul>
    <li><span class="highlight">.flex-grow</span></li>
    <li><span class="highlight">.flex-grow-m</span></li>
    <li><span class="highlight">.flex-grow-l</span></li>
    <li><span class="highlight">.flex-grow-xl</span></li>
    <li><span class="highlight">.flex-grow-xxl</span></li>
</ul>
<p>For flex-grow-initial:</p>
<ul>
    <li><span class="highlight">.flex-grow-initial</span></li>
    <li><span class="highlight">.flex-grow-initial-m</span></li>
    <li><span class="highlight">.flex-grow-initial-l</span></li>
    <li><span class="highlight">.flex-grow-initial-xl</span></li>
    <li><span class="highlight">.flex-grow-initial-xxl</span></li>
</ul>
<p>For flex-shrink:</p>
<ul>
    <li><span class="highlight">.flex-shrink</span></li>
    <li><span class="highlight">.flex-shrink-m</span></li>
    <li><span class="highlight">.flex-shrink-l</span></li>
    <li><span class="highlight">.flex-shrink-xl</span></li>
    <li><span class="highlight">.flex-shrink-xxl</span></li>
</ul>
<p>For flex-shrink-initial:</p>
<ul>
    <li><span class="highlight">.flex-shrink-initial</span></li>
    <li><span class="highlight">.flex-shrink-initial-m</span></li>
    <li><span class="highlight">.flex-shrink-initial-l</span></li>
    <li><span class="highlight">.flex-shrink-initial-xl</span></li>
    <li><span class="highlight">.flex-shrink-initial-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="auto-margins">Auto Margins <a href="#auto-margins">#</a></h4>
<p>When you mix flex alignments with auto margins, beautiful things happen. Shown below are four examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<span class="highlight">mr-auto</span>), and pushing two items to the left (<span class="highlight">ml-auto</span>), and last but not least centering one element (<span class="highlight">mx-auto</span> but could also center multiple elements with the first element having <span class="highlight">ml-auto</span> and last having <span class="highlight">mr-auto</span>).</p>
<p><strong>Please note, IE 10 & 11 render auto margins incorrectly if parent container uses the 'justify-content' properties. They prioritize the <span class="highlight">justify-{position keyword}</span> over auto-margins</strong>. <a href="https://stackoverflow.com/questions/37534254/flex-auto-margin-not-working-in-ie10-11/37535548#37535548" target="_blank">See this StackOverflow answer</a> for more details.</p>
<div class="demo-container text-small">
    <div class="demo-content flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex mb-1">
        <div class="demo-content mr-auto">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content flex mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content ml-auto">Flex item 3</div>
    </div>
    <div class="demo-content flex">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content mx-auto">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex mb-1"&gt;
    &lt;div class="mr-auto"&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div class="ml-auto"&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="mx-auto"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>


<h5 id="auto-margins-align-based">Auto Margins With 'Align' Based Items <a href="#auto-margins-align-based">#</a></h5>
<p>Vertically move one flex item to the top or bottom of a container by mixing align-items, <span class="highlight">flex-direction: column</span>, and <span class="highlight">margin-top: auto</span> or <span class="highlight">margin-bottom: auto</span>.</p>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex column mb-1">
        <div class="demo-content mb-auto">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
    <div class="demo-content demo-extra-tall flex column mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content mt-auto">Flex item 3</div>
    </div>
    <div class="demo-content demo-extra-tall flex column mb-1">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content my-auto">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex column mb-1"&gt;
    &lt;div class="mb-auto"&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex column mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div&gt;Flex item 2&lt;/div&gt;
    &lt;div class="mt-auto"&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex column mb-1"&gt;
    &lt;div&gt;Flex item 1&lt;/div&gt;
    &lt;div class="my-auto"&gt;Flex item 2&lt;/div&gt;
    &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>To see a full list of margin utility classes, visit out <a href="/docs/spacing">spacing page</a>.</p>
<div class="mt-3 mt-5-l"></div>



<h4 id="flex-wrapping">Flex Item Wrapping <a href="#flex-wrapping">#</a></h4>
<p>Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <span class="highlight">wrap-none</span>, wrapping with <span class="highlight">wrap</span>, or reverse wrapping with <span class="highlight">wrap-reverse</span>.</p>
<div class="demo-container text-small">
    <div class="demo-content container xs flex wrap-none">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap-none"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content container xs flex wrap">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content container xs flex wrap-reverse">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex wrap-reverse"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the <span class="highlight">wrap</span>,<span class="highlight">wrap-none</span> and <span class="highlight">wrap-reverse</span> classes...</p>
<p>For wrap:</p>
<ul>
    <li><span class="highlight">.wrap</span></li>
    <li><span class="highlight">.wrap-m</span></li>
    <li><span class="highlight">.wrap-l</span></li>
    <li><span class="highlight">.wrap-xl</span></li>
    <li><span class="highlight">.wrap-xxl</span></li>
</ul>
<p>For wrap-none:</p>
<ul>
    <li><span class="highlight">.wrap-none</span></li>
    <li><span class="highlight">.wrap-none-m</span></li>
    <li><span class="highlight">.wrap-none-l</span></li>
    <li><span class="highlight">.wrap-none-xl</span></li>
    <li><span class="highlight">.wrap-none-xxl</span></li>
</ul>
<p>For wrap-reverse:</p>
<ul>
    <li><span class="highlight">.wrap-reverse</span></li>
    <li><span class="highlight">.wrap-reverse-m</span></li>
    <li><span class="highlight">.wrap-reverse-l</span></li>
    <li><span class="highlight">.wrap-reverse-xl</span></li>
    <li><span class="highlight">.wrap-reverse-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="flex-order">Flex Item Order <a href="#flex-order">#</a></h4>
<p>Change the visual order of specific flex items with {{ site.title }}'s <span class="highlight">order</span> utilities. Flexbox order takes any integer value (for {{ site.title }}, you will have access to order integers spanning from 0 through 12). If you need to add more order values, custom CSS will be needed.</p>
<p>When using flexbox order, you need to understand that all flex items order is by browser default <span class="highlight">0</span>. So, if you were to add the class <span class="highlight">order-1</span> to the first element in a group of three elements, since 1 comes after 0, it will rearrange itself to come last in the visual order. Dave Geddes has written a great <a href="https://gedd.ski/post/flexbox-order/" target="_blank" rel="nofollow">article</a> explaining flex order if you wish to learn more. But, let's go ahead and look at an example.</p>
<div class="demo-container text-small">
    <div class="demo-content flex wrap">
        <div class="demo-content order-3">Flex item 1</div>
        <div class="demo-content order-2">Flex item 3</div>
        <div class="demo-content order-1">Flex item 2</div>
        <div class="demo-content order-5">Flex item 4</div>
        <div class="demo-content order-4">Flex item 5</div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="flex"&gt;
    &lt;div class="order-3"&gt;Flex item 1&lt;/div&gt;
    &lt;div class="order-2"&gt;Flex item 3&lt;/div&gt;
    &lt;div class="order-1"&gt;Flex item 2&lt;/div&gt;
    &lt;div class="order-5"&gt;Flex item 4&lt;/div&gt;
    &lt;div class="order-4"&gt;Flex item 5&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the <span class="highlight">order-*</span> classes...</p>
<ul>
    <li><span class="highlight">.order-{0 - 12}</span></li>
    <li><span class="highlight">.order-{0 - 12}-m</span></li>
    <li><span class="highlight">.order-{0 - 12}-l</span></li>
    <li><span class="highlight">.order-{0 - 12}-xl</span></li>
    <li><span class="highlight">.order-{0 - 12}-xxl</span></li>
</ul>
<div class="mt-3 mt-5-l"></div>



<h4 id="content-alignment">Content Alignment <a href="#content-alignment">#</a></h4>
<p>Use <span class="highlight">align-content</span> utilities on flexbox containers to align flex items together on the cross axis. Choose from <span class="highlight">start</span> (browser default), <span class="highlight">end</span>, <span class="highlight">center</span>, <span class="highlight">between</span>, <span class="highlight">around</span>, or <span class="highlight">stretch</span>. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.</p>
<p>Please understand that this property has no effect on single rows of flex items.</p>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-start">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-start"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-end">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-end"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-center">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-center"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-between">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-between"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-around">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-around"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<div class="demo-container text-small">
    <div class="demo-content demo-extra-tall flex wrap align-content-stretch">
        <div class="demo-content">Flex item 1</div>
        <div class="demo-content">Flex item 2</div>
        <div class="demo-content">Flex item 3</div>
        <div class="demo-content">Flex item 4</div>
        <div class="demo-content">Flex item 5</div>
        <div class="demo-content">Flex item 6</div>
        <div class="demo-content">Flex item 7</div>
        <div class="demo-content">Flex item 8</div>
        <div class="demo-content">Flex item 9</div>
        <div class="demo-content">Flex item 10</div>
        <div class="demo-content">Flex item 11</div>
        <div class="demo-content">Flex item 12</div>
    </div>
</div>
<pre class="mt-0 mb-1"><code class="language-html">&lt;div class="flex wrap align-content-stretch"&gt;
    &lt;!-- flex items --&gt;
&lt;/div&gt;</code></pre>
<p>And the responsive variations for the <span class="highlight">align-content</span> classes...</p>
<p>For align-content-start</p>
<ul>
    <li><span class="highlight">.align-content-start</span></li>
    <li><span class="highlight">.align-content-start-m</span></li>
    <li><span class="highlight">.align-content-start-l</span></li>
    <li><span class="highlight">.align-content-start-xl</span></li>
    <li><span class="highlight">.align-content-start-xxl</span></li>
</ul>
<p>For align-content-end</p>
<ul>
    <li><span class="highlight">.align-content-end</span></li>
    <li><span class="highlight">.align-content-end-m</span></li>
    <li><span class="highlight">.align-content-end-l</span></li>
    <li><span class="highlight">.align-content-end-xl</span></li>
    <li><span class="highlight">.align-content-end-xxl</span></li>
</ul>
<p>For align-content-center</p>
<ul>
    <li><span class="highlight">.align-content-center</span></li>
    <li><span class="highlight">.align-content-center-m</span></li>
    <li><span class="highlight">.align-content-center-l</span></li>
    <li><span class="highlight">.align-content-center-xl</span></li>
    <li><span class="highlight">.align-content-center-xxl</span></li>
</ul>
<p>For align-content-between</p>
<ul>
    <li><span class="highlight">.align-content-between</span></li>
    <li><span class="highlight">.align-content-between-m</span></li>
    <li><span class="highlight">.align-content-between-l</span></li>
    <li><span class="highlight">.align-content-between-xl</span></li>
    <li><span class="highlight">.align-content-between-xxl</span></li>
</ul>
<p>For align-content-around</p>
<ul>
    <li><span class="highlight">.align-content-around</span></li>
    <li><span class="highlight">.align-content-around-m</span></li>
    <li><span class="highlight">.align-content-around-l</span></li>
    <li><span class="highlight">.align-content-around-xl</span></li>
    <li><span class="highlight">.align-content-around-xxl</span></li>
</ul>
<p>For align-content-stretch</p>
<ul>
    <li><span class="highlight">.align-content-stretch</span></li>
    <li><span class="highlight">.align-content-stretch-m</span></li>
    <li><span class="highlight">.align-content-stretch-l</span></li>
    <li><span class="highlight">.align-content-stretch-xl</span></li>
    <li><span class="highlight">.align-content-stretch-xxl</span></li>
</ul>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#flex-display">Flex Display</a></li>
        <li><a href="#flex-direction">Flex Direction</a></li>
        <li><a href="#justify-content">Justify Content</a></li>
        <li><a href="#align-content">Align Content</a></li>
        <li><a href="#align-self">Align Self</a></li>
        <li><a href="#fill">Fill</a></li>
        <li><a href="#grow-and-shrink">Grow &amp; Shrink</a></li>
        <li>
            <a href="#auto-margins">Auto Margins</a>
            <ul>
                <li><a href="#auto-margins-align-based">Auto Margins With Flex Align</a></li>
            </ul>
        </li>
        <li><a href="#flex-wrapping">Wrapping</a></li>
        <li><a href="#flex-order">Ordering</a></li>
        <li><a href="#content-alignment">Content Alignment</a></li>
    </ul>
</div>

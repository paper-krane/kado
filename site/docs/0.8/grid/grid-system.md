---
layout: "0.8/documentation"
title: "Grid System"
---

<h1>Flexbox Grid System</h1>
<p class="text-large">A simply named, mobile first, responsive 12 column flexbox grid system that will adjust to 5 different <a href="/docs/breakpoints" title="Responsive Break Points">breakpoints</a>.</p>
<blockquote>
Before we begin with the grid, please also know that if you do require a grid system that will hold up before IE10, we do still have our '<span class="highlight">old-school-grid</span>' system with identical class names (so upgrading in the future would be a breeze). To use it, simply go to the master <span class="highlight">origami.scss</span> file and import it.
</blockquote>
<div class="mt-3 mt-5-l"></div>
<h4>How The Grid System Works</h4>
<p>Grids are pretty simple. You have 3 major players. First, you have a <span class="highlight">container</span> to 'contain' all of your content to remain in the horizontal center of the page (unless you use a full width container). Next you have your <span class="highlight">row</span> elements that will be a child of the container and allow you to create horizontal rows of columns. Finally we have the <span class="highlight">columns</span>. Now, since Origami is by default a 12 column grid, you will have the control to specify how many columns you want your element to span. If you don't specify, no worries, Flexbox will do the work for you and calculate it automatically.</p>
<p>To take this up a notch, Origami's grid system is fully responsive and can adjust to what you need based upon the viewport size. Let's take a look at a quick example to see a grid in action.</p>
<div class="demo-container text-small">
    <div class="container my-2-m">
        <div class="row text-center align-stretch">
            <div class="col s12 m7 flex">
                <div class="demo-content fill">I am a column and span 7/12 columns</div>
            </div>
            <div class="col s12 m5 flex">
                <div class="demo-content fill">I am a column and span 5/12 columns</div>
            </div>
            <div class="col s12 flex no-margin">
                <div class="demo-content fill">I am a column and span 12/12 columns</div>
            </div>
        </div>
    </div>
</div>
<pre class="mt-0-s"><code class="language-html">&lt;!-- Notice how the 'container' and 'row' are invisible
while the columns are used for the primary content --&gt;
&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col s12 m7"&gt;
            &lt;div&gt;I am a column&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s12 m5"&gt;
            &lt;div&gt;I am a column&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s12"&gt;
            &lt;div&gt;I am a column&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>So we built a quick grid that in mobile devices, spans the full 12 column grid and once reaching the medium breakpoint size then forces the top 2 elements to span both 7 and 5 columns out of the total 12 while leaving the last column at its initial state. And of course invisible to the eye, you have the <span class="highlight">container</span> centering the content in the middle while making sure to not butt up against the viewport sides. Then you have the <span class="highlight">row</span> element containing the columns (<span class="highlight">col</span>) and preventing the inner content from collapsing into other rows and columns.</p>
<p>To get into more detail...</p>
<ul>
    <li>Origami <span class="highlight">container</span> elements are used to contain both grids and other page content in the horizontal center of the page. This is a clean, simple way to prevent content from hitting the viewport edges (especially in mobile devices). All Origami containers are fluid meaning they organically adapt to the viewport size without jumping into place. To top it all off, you can change the <a href="/docs/grid/containers">container sizes</a> as well making it easy to create different sized grids.</li>
    <li>The <span class="highlight">row</span> class is used to wrap the inner columns and more importantly, activate the inner column's grid functionality. Please understand that if you place a column outside of a row, it will not function with the desired results. <strong>A column class must be used inside a row to work properly</strong>.</li>
    <li>The <span class="highlight">col</span> elements (columns) will be where you place your content. <strong>It is not recommended to place content as a direct child of a row as it will yield unexpected results. Please only use columns as direct children of rows</strong>. Columns also come with a default horizontal padding of 10px on each side, with a bottom margin of 20px to prevent column content for being on top of one another. The padding and margin can be removed with spacing utilities.</li>
    <li>With Origami's grid now built with flexbox, you no longer need to declare a column width. Simply by adding the <span class="highlight">col</span> class, your column elements will evenly distribute their widths. For instance, if you have a row with 5 child columns with the class of 'col', your columns will each span 20% of the row width. The best part is you can mix and match fixed width columns with fluid/adaptive columns.</li>
    <li>If you do want to set particular widths for your column element, simply choose which <a href="/docs/breakpoints">breakpoint</a> you want to effect and then how many columns (out of 12) you wish your column to span. For example, you can add the class <span class="highlight">s6</span> to span 6 columns on small devices, and <span class="highlight">l4</span> in the same class attribute to span only 4 columns in large devices. The sizing classes must be used with the 'col' class.</li>
    <li>Each column size is fluid and calculated in percentages so they are always sized relative to the parent element.</li>
    <li>Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., <span class="highlight">.m6</span> applies to medium, large, extra large, and extra extra large devices, but not the first 's' breakpoint).</li>
</ul>
<p>Be aware about potential <a href="https://github.com/philipwalton/flexbugs" target="_blank">flexbox bugs</a> and even <a href="https://github.com/philipwalton/flexbugs#flexbug-9" target="_blank">certain elements that do not work as flex containers</a>. Shout out to <a href="https://getbootstrap.com" target="_blank" rel="nofollow">Bootstrap</a> for finding awesome articles and <a href="https://github.com/philipwalton" target="_blank" rel="nofollow">Philip Walton</a> for writing these articles!</p>
<div class="mt-3 mt-5-l"></div>
<h4>Grid Breakpoint Size Options</h4>
<p>While most elements are sized using relative units (%, rem, em, etc.), breakpoints are not. They are set using the fixed pixel unit.</p>

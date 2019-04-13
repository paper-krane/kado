---
layout: "0.8/documentation"
title: "Grid System"
---

<div class="col s12 l8 xl9">
<h1>Flexbox Grid System</h1>
<p class="text-large">A simply named, mobile first, responsive 12 column flexbox grid system that will adjust to 5 different <a href="/docs/breakpoints" title="Responsive Break Points">breakpoints</a>.</p>
<!-- <blockquote>
Before we begin with the grid, please also know that if you do require a grid system that will hold up before IE10, we do still have our '<span class="highlight">old-school-grid</span>' system with identical class names (so upgrading in the future would be a breeze). To use it, simply go to the master <span class="highlight">kado.scss</span> file and import it.
</blockquote> -->
<div class="mt-3 mt-5-l"></div>



<h4 id="how-it-works">How The Grid System Works <a href="#how-it-works">#</a></h4>
<p>Grids are pretty simple. You have 3 major players. First, you have a <span class="highlight">container</span> to 'contain' all of your content to remain in the horizontal center of the page (unless you use a full width container). Next you have your <span class="highlight">row</span> elements that will be a child of the container and allow you to create horizontal rows of columns. Finally we have the <span class="highlight">columns</span>. Now, since {{ site.title }} is by default a 12 column grid, you will have the control to specify how many columns you want your element to span. If you don't specify, no worries, Flexbox will do the work for you and calculate it automatically.</p>
<p>To take this up a notch, {{ site.title }}'s grid system is fully responsive and can adjust to what you need based upon the viewport size. Let's take a look at a quick example to see a grid in action.</p>
<div class="demo-container text-small">
    <div class="container my-1">
        <div class="row text-center">
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
<pre class="mt-0"><code class="language-html">&lt;!-- Notice how the 'container' and 'row' are invisible
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
    <li>{{ site.title }} <span class="highlight">container</span> elements are used to contain both grids and other page content in the horizontal center of the page. This is a clean, simple way to prevent content from hitting the viewport edges (especially in mobile devices). All {{ site.title }} containers are fluid meaning they organically adapt to the viewport size without jumping into place. To top it all off, you can change the <a href="/docs/grid/containers">container sizes</a> as well making it easy to create different sized grids.</li>
    <li>The <span class="highlight">row</span> class is used to wrap the inner columns and more importantly, activate the inner column's grid functionality. Please understand that if you place a column outside of a row, it will not function with the desired results. <strong>A column class must be used inside a row to work properly</strong>.</li>
    <li>The <span class="highlight">col</span> elements (columns) will be where you place your content. <strong>It is not recommended to place content as a direct child of a row as it will yield unexpected results. Please only use columns as direct children of rows</strong>. Columns also come with a default horizontal padding of 10px on each side, with a bottom margin of 20px to prevent column content for being on top of one another. The padding and margin can be removed with spacing utilities.</li>
    <li>With {{ site.title }}'s grid now built with flexbox, you no longer need to declare a column width. Simply by adding the <span class="highlight">col</span> class, your column elements will evenly distribute their widths. For instance, if you have a row with 5 child columns with the class of 'col', your columns will each span 20% of the row width. The best part is you can mix and match fixed width columns with fluid/adaptive columns.</li>
    <li>If you do want to set particular widths for your column element, simply choose which <a href="/docs/breakpoints#breakpoint-naming">breakpoint</a> you want to effect and then how many columns (out of 12) you wish your column to span. For example, you can add the class <span class="highlight">s6</span> to span 6 columns on small devices, and <span class="highlight">l4</span> in the same class attribute to span only 4 columns in large devices. The sizing classes must be used with the 'col' class.</li>
    <li>Each column size is fluid and calculated in percentages so they are always sized relative to the parent element.</li>
    <li>Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., <span class="highlight">.m6</span> applies to medium, large, extra large, and extra extra large devices, but not the first 's' breakpoint).</li>
</ul>
<p>Be aware about potential <a href="https://github.com/philipwalton/flexbugs" target="_blank">flexbox bugs</a> and even <a href="https://github.com/philipwalton/flexbugs#flexbug-9" target="_blank">certain elements that do not work as flex containers</a>. Shout out to <a href="https://getbootstrap.com" target="_blank" rel="nofollow">Bootstrap</a> for finding awesome articles and <a href="https://github.com/philipwalton" target="_blank" rel="nofollow">Philip Walton</a> for writing these articles!</p>
<div class="mt-3 mt-5-l"></div>



<h4 id="breakpoint-size-options">Grid Breakpoint Size Options <a href="#breakpoint-size-options">#</a></h4>
<p>While most elements are sized using relative units (%, rem, em, etc.), breakpoints are not. They are set using the fixed pixel unit.</p>
<div class="mt-3 mt-5-l"></div>


<h4 id="columns">Grid Columns <a href="#columns">#</a></h4>
<p>Utilize column classes for easy column sizing. You can easily manipulate layouts by choosing when and which breakpoint to adjust your columns width. Like most Kado utilities and quick classes, you can use our breakpoint naming convention when making your declarations <strong><em>but unlike</em></strong> the other utility classes, you must declare the breakpoint size as a separate class and used in conjunction with the column class (<span class="highlight">col</span>).</p>
<div class="mt-3 mt-5-l"></div>


<h5 id="equal-width">Equal-Width Columns <a href="#equal-width">#</a></h5>
<p>You can declare the <span class="highlight">col</span> class without a specified length and the element will distribute itself equally based upon the amount of its sibling elements and space available. By using only the <span class="highlight">col</span> class, it will affect every breakpoint unless a specified width is declared.</p>
<div class="demo-container text-small text-center">
    <div class="container my-1">
        <div class="row">
            <div class="col">
                <div class="demo-content ">1 out of 3</div>
            </div>
            <div class="col">
                <div class="demo-content ">2 out of 3</div>
            </div>
            <div class="col">
                <div class="demo-content ">3 out of 3</div>
            </div>
        </div>
        <div class="row">
            <div class="col no-margin">
                <div class="demo-content ">1 out of 2</div>
            </div>
            <div class="col no-margin">
                <div class="demo-content ">2 out of 2</div>
            </div>
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;1 out of 3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;2 out of 3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;3 out of 3&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;1 out of 2&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;2 out of 2&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h6 id="equal-width-responsive-classes" class="mt-2">Equal Width Responsive Classes <a href="#equal-width-responsive-classes">#</a></h6>
<p>When using the <span class="highlight">col</span> class responsively, you must understand how the elements will interact. If used in conjunction with a breakpoint, the column will span the full width of the containing element until the specified breakpoint.</p>
<p>The responsive class additions for the equal-width <span class="highlight">col</span> utility class:</p>
<ul>
    <li><span class="highlight">col</span> <em>- Affects all breakpoints</em></li>
    <li><span class="highlight">col m</span> <em>- Affects medium breakpoints & up</em></li>
    <li><span class="highlight">col l</span> <em>- Affects large breakpoints & up</em></li>
    <li><span class="highlight">col xl</span> <em>- Affects extra large breakpoints & up</em></li>
    <li><span class="highlight">col xxl</span> <em>- Affects extra extra large breakpoints & up</em></li>
</ul>
<div class="mt-3 mt-5-l"></div>


<h6 id="equal-width-multi-row">Equal-Width With Multi-Row <a href="#equal-width-multi-row">#</a></h6>
<p>Create equal-width columns that span multiple rows by inserting a .w-100 where you want the columns to break to a new line. Make the breaks responsive by mixing the <span class="highlight">width-100</span> with responsive display helpers.</p>
<div class="demo-container">
    <div class="container my-1">
        <div class="row">
            <div class="col">
                <div class="demo-content">column 1 of 4</div>
            </div>
            <div class="col">
                <div class="demo-content">column 2 of 4</div>
            </div>
            <div class="width-100"></div>
            <div class="col no-margin">
                <div class="demo-content">column 3 of 4</div>
            </div>
            <div class="col no-margin">
                <div class="demo-content">column 4 of 4</div>
            </div>
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;column 1 of 4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;column 2 of 4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="width-100"&gt;&lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;column 3 of 4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;column 4 of 4&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="set-column-widths">Set-Width Columns <a href="#setting-column-widths">#</a></h5>
<p>With Kado, <span class="highlight">col</span> on its own will turn the element in to a responsive fluid element that adapts to its sibling elements. But when using <span class="highlight">col</span> with an additional sizing class, for example <span class="highlight">s8</span>, the column class will now adapt to spanning 8/12 columns from the small breakpoint and up (affecting all breakpoints). Then, if on the same element, you were to add an additional class of <span class="highlight">l4</span>, your element would then adapt to span 4/12 columns on the large breakpoint and up. Here is an example of a grid that adapts to different layouts upon different breakpoints:</p>
<div class="demo-container text-small text-center">
    <div class="container my-1">
        <div class="row">
            <div class="col s6 l3">
                <div class="demo-content">.col .s6 .l3</div>
            </div>
            <div class="col s6 l3">
                <div class="demo-content">.col .s6 .l3</div>
            </div>
            <div class="col s12 l6">
                <div class="demo-content">.col .s12 .l6</div>
            </div>
            <div class="col s12 m4">
                <div class="demo-content">.col .s12 .m4</div>
            </div>
            <div class="col s5 m8 mb-0 mb-1-m">
                <div class="demo-content">.col .s5 .m8</div>
            </div>
            <div class="col s7 m12 no-margin">
                <div class="demo-content">.col .s7 .m12</div>
            </div>
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col s6 l3"&gt;
            &lt;div&gt;.col .s6 .l3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s6 l3"&gt;
            &lt;div&gt;.col .s6 .l3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s12 l6"&gt;
            &lt;div&gt;.col .s12 .l6&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s12 m4"&gt;
            &lt;div&gt;.col .s12 .m4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s5 m8"&gt;
            &lt;div&gt;.col .s5 .m8&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s7 m12"&gt;
            &lt;div&gt;.col .s7 .m12&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h6 id="set-width-responsive-classes">Set-Width Responsive Classes <a href="#set-width-responsive-classes">#</a></h6>
<div class="mt-3 mt-5-l"></div>



<h6 id="mixing-set-and-equal-width">Mixing Set Column Widths With Equal-Width <a href="#mixing-set-and-equal-width">#</a></h6>
<p>The great thing about a flexbox grid system is that you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below) or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
<div class="demo-container text-small text-center">
    <div class="container my-1">
        <div class="row">
            <div class="col no-margin">
                <div class="demo-content">1 of 3 <span class="hide-m-down">(equal-width)</span></div>
            </div>
            <div class="col s6 no-margin">
                <div class="demo-content">2 of 3 <span class="hide-m-down">(set-width)</span></div>
            </div>
            <div class="col no-margin">
                <div class="demo-content">3 of 3 <span class="hide-m-down">(equal-width)</span></div>
            </div>
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;1 of 3 (equal-width)&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col s6"&gt;
            &lt;div&gt;2 of 3 (set-width)&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col"&gt;
            &lt;div&gt;3 of 3 (equal-width)&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h5 id="variable-width-columns">Variable Width Columns <a href="#variable-width-columns">#</a></h5>



</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#breakpoint-size-options">Breakpoint Size Options</a></li>
        <li>
            <a href="#columns">Grid Columns</a>
            <ul>
                <li>
                    <a href="#equal-width">Equal-Width Columns</a>
                    <ul>
                        <li><a href="#equal-width-responsive-classes">Equal Width Responsive Classes</a></li>
                        <li><a href="#equal-width-multi-row">Equal-Width & Multi-Row</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#set-column-widths">Set Column Widths</a>
                    <ul>
                        <li><a href="#set-width-responsive-classes">Set-Width Responsive Classes</a></li>
                        <li><a href="#mixing-set-and-equal-width">Set Column Widths With Equal-Width</a></li>
                    </ul>
                </li>
                <li><a href="#variable-width-columns">Variable Width Columns</a></li>
            </ul>
        </li>
    </ul>
</div>

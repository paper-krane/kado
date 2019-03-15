---
layout: "0.8/documentation"
title: "Grid Containers"
---

<div class="col s12 l8 xl9">
<h1 id="containers">Containers</h1>
<p>Containers are a core part of any web layout and can be found in almost every website and with {{ site.title }}, are <strong>essential in order to use the built in grid system</strong>. All containers are designed to be fluid.</p>
<p>Using {{ site.title }} containers is pretty straight forward. Just add the <code class="language-markup">container</code> class.</p>
<div class="demo-container text-small">
    <div class="demo-content my-2-m container">
        <div class="p-2-s text-center">
            The default container size has a max width of 1080px
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container"&gt;
    &lt;!-- your grid will go in here --&gt;
&lt;/div&gt;</code></pre>
<div class="mt-3 mt-5-l"></div>



<h4 id="changing-container-sizes">Changing Container Sizes <a href="#changing-container-sizes">#</a></h4>
<p>By default, containers have a maximum width of <span class="highlight">1080px</span> but that can easily be changed by adding a container sizing class. You can add the following classes, in addition to the container class, to change the maximum width:</p>
<ul>
    <li><code class="language-markup">.s</code> = Maximum width of 600px.</li>
    <li><code class="language-markup">.m</code> = Maximum width of 800px.</li>
    <li><code class="language-markup">.xl</code> = Maximum width of 1280px.</li>
    <li><code class="language-markup">.xxl</code> = Maximum width of 1600px.</li>
    <li><code class="language-markup">.full-width</code> = Maximum width of 100%.</li>
</ul>
<p>So, if you wanted a small container, your code would look like so:</p>
<div class="demo-container text-small">
    <div class="demo-content my-2-m container s">
        <div class="p-2-s text-center">
            A small container will max out at 600px
        </div>
    </div>
</div>
<pre class="mt-0"><code class="language-html">&lt;div class="container s"&gt;
    &lt;!-- your grid will go in here --&gt;
&lt;/div&gt;</code></pre>
<p>All containers (except the full width of course) have margins on the left and right of 5% in mobile <a href="/docs/breakpoints">breakpoints</a>, and 7.5% in larger tablet/desktop <a href="/docs/breakpoints">breakpoints</a>. This keeps your content from butting up against the edge of the screen.</p>
<blockquote>Please also know that containers can be nested but the need to use nested containers is pretty rare.</blockquote>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#containers">Containers</a></li>
        <li><a href="#changing-container-sizes">Changing Container Sizes</a></li>
    </ul>
</div>

---
layout: "0.8/documentation"
title: "Getting Started"
---
<div class="col s12 l8 xl9">
    <h1 id="overview">Overview of {{ site.title }} <span class="heading-accent">Current Version {{ site.data.globals.version }}</span></h1>
    <p>{{ site.title }} is, in it's current state, my idea of what a framework should be. Tools to help you create a layout rapidly for your projects that leaves more than enough room for you to customize as the project progresses.</p>
    <p>It was written in SASS, vanilla JavaScript and compiled / minified with Gulp.js. But you can compile with whatever you like.</p>
    <p>There are no dependencies like JQuery. Just plug it in and you are good to go.</p>
    <br />
    <a href="{{ site.data.globals.downloadUrl }}" target="_blank" class="btn mr-half"><span class="ti-cloud-down mr-half"></span>Source Files</a>
    <div class="mt-3 mt-5-l"></div>


    <h4 id="browser-support">Browser Support <a href="#browser-support">#</a></h4>
    <p>{{ site.title }} was written for the modern browser but, {{ site.title }} does support <span class="highlight">IE11+</span>. Technically you can use the {{ site.title }} in IE10 and the layouts will holdup beautifully but some JavaScript components haven't been fully tested hence why it is stated as supporting IE11+.</p>
    <div class="mt-3 mt-5-l"></div>



    <h4 id="installation">Installation <a href="#installation">#</a></h4>
    <p>Starting a project with {{ site.title }} is pretty straight forward. Simply <a href="{{ site.data.globals.downloadUrl }}" target="_blank">download the {{ site.title }} files</a>. Once downloaded, you will have access to both source files and compiled files (minified versions as well) so if you want to get started quickly, just find the compiled files from the <span class="highlight">dist</span> folder and add them to your project. I recommend using the minified versions for speed purposes.</p>
    <p>Once you have your {{ site.title }} files in the respective css / js folders for your project, you can set up your first page like so: </p>
    <pre><code class="language-html">&lt;!DOCTYPE html&gt;
    &lt;html lang="en" class="no-js"&gt;
        &lt;head&gt;
            &lt;meta charset="utf-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;&lt;/title&gt;
            &lt;!-- {{ site.title }} CSS Files Linked Here --&gt;
            &lt;link rel="stylesheet" href="/path/to/kado.min.css"&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;main class="page-body"&gt;
                &lt;!-- your awesome content goes here --&gt;
            &lt;/main&gt;
            &lt;!-- {{ site.title }} JavaScript Files Linked Here --&gt;
            &lt;script type="text/javascript" src="/path/to/kado.min.js"&gt;&lt;/script&gt;
        &lt;/body&gt;
    &lt;/html&gt;</code></pre>
    <p>As you can see, we try to abide by best practices. Keep your JavaScript near the closing body tag to allow your page to load before your script.</p>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#browser-support">Browser Support</a></li>
        <li><a href="#installation">Installation</a></li>
    </ul>
</div>

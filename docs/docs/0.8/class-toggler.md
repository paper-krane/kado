---
layout: "0.8/documentation"
title: "JavaScript Class Toggler"
---

# Class Toggler
<p class="text-large">The tiny javascript engine that powers the animated Origami components such as modals & mobile navs. This small plugin will allow you to create your own custom animations with ease.</p>
<div class="mt-3 mt-5-l"></div>



#### How It Works
<p>To start, you do need to include <span class="highlight">origami.min.js</span> in your project file (if you do not want all Origami modules, you can easily just use the data-toggle.js library). No initialization is necessary. Just link to the proper JavaScript assets and the class toggler will automatically listen.</p>
<pre><code class="language-html">&lt;script type="text/javascript" src="/your/path/to/origami.min.js"&gt;&lt;/script&gt;</code></pre>
<p>There are two roles, <span class="italic">togglers</span> and <span class="italic">targets</span>, and two different data attributes to your elements based upon what you want the element to do. For <span class="bold">toggle</span> elements, you will require two data attributes:</p>
<ul>
    <li><span class="highlight">data-toggle</span></li>
    <li><span class="highlight">data-toggle-class="{your-custom-class-name}"</span></li>
</ul>
<p>With the these data attributes, you are doing two things. First you are declaring that this element will become a button to toggle a class and the second attribute tells the plugin what class will be being toggled when clicked.</p>
<p>For <span class="bold">target</span> elements, you only need to declare one data attribute and that is the <span class="highlight">data-toggle-class</span> attribute with the same value as the <span class="italic">toggler</span>s <span class="highlight">data-toggle-class</span> attribute.</p>
<div class="mt-3 mt-5-l"></div>



#### Under The Hood
<p>The reason this plugin works is it first listens for a click event on the <span class="highlight">data-toggle="true"</span> and once the input is received, it then searches all other <span class="highlight">data-toggle-class</span> attributes to look for matching values. For every matching value, it will then add the <span class="highlight">data-toggle-class</span> value to the elements class list allowing you to use CSS specificity to animate your elements. With this approach, you can make complex animations that effect multiple HTML elements with ease.</p>
<p>So rather than dedicating a small plugin for each and every modal, navigation, or even dropdown, you can now use one plugin and influence all components the same way with much less scripting.</p>
<div class="mt-3 mt-5-l"></div>



#### Example
<p>Here is an example of the class toggler plugin in action:</p>
<div class="demo-container text-center">
    <style>
        .target, .target-2 {
            text-align: center;
            width: 60%;
            margin: 0 auto;
            transition: all 0.5s ease;
        }
        .target-2 {
            width: 100%;
        }
        .target.example {
            width: 100%;
        }
        .target-2.example {
            width: 60%;
        }
    </style>
    <a class="btn mb-1" data-toggle data-toggle-class="example">I'm The Toggle</a>
    <div class="demo-content mb-1 target" data-toggle-class="example">I'm The Target</div>
    <div class="demo-content target-2" data-toggle-class="example">I'm The Second Target</div>
</div>
<pre class="mt-0"><code class="language-html">&lt;style&gt;
    .target, .target-2 {
        text-align: center;
        width: 60%;
        margin: 0 auto;
        transition: all 0.5s ease;
    }
    .target-2 {
        width: 100%;
    }
    .target.example {
        width: 100%;
    }
    .target-2.example {
        width: 60%;
    }
&lt;/style&gt;
&lt;a class="btn mb-1" data-toggle data-toggle-class="example"&gt;
    I'm The Toggle
&lt;/a&gt;
&lt;div class="demo-content mb-1 target" data-toggle-class="example"&gt;
    I'm The Target
&lt;/div&gt;
&lt;div class="demo-content target-2" data-toggle-class="example"&gt;
    I'm The Second Target
&lt;/div&gt;</code></pre>

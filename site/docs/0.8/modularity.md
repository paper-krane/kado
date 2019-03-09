---
layout: "0.8/documentation"
title: "Modularity"
---
<h1>Modularity</h1>
<p>Maybe love some parts of Origami but dislike other aspects (but being completely transparent, I really hope you like <em>all</em> of Origami) but I get it. Origami was built with SASS and compiled with Gulp so you can take certain pieces from it and leave out the rest.</p>
<p>The easiest way would be to build your own <span class="highlight">.scss</span> file or even use the <span class="highlight">origami.scss</span> file and import only the modules you want. It can be done like so:</p>
<pre><code class="language-scss">@import "layout/flex-grid";
@import "components/buttons";
@import "components/forms";</code></pre>
<p>And right there you have the grid, buttons, and form design elements ready to go while leaving out all the other fluff you didn't want.</p>
<div class="mt-3 mt-5-l"></div>
<h4>New to SASS?</h4>
<p>It's cool. I didn't use it for the longest time either. Its description (via the SASS team themselves) is CSS with super powers. If I could explain it, it is essentially a means of breaking your CSS up into smaller documents to keep it organized while adding in additional features like variables (really awesome for colors schemes), mixins, loops and more. So yeah... CSS with super powers.</p>

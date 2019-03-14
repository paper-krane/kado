---
layout: "0.8/documentation"
title: "Modularity"
---
<div class="col s12 l8 xl9">
    <h1 id="modularity">Modularity</h1>
    <p>Maybe love some parts of {{ site.title }} but dislike other aspects (but being completely transparent, I really hope you like <em>all</em> of {{ site.title }}) but I get it. {{ site.title }} was built with SASS and compiled with Gulp so you can take certain pieces from it and leave out the rest.</p>
    <p>The easiest way would be to build your own <span class="highlight">.scss</span> file or even use the <span class="highlight">kado.scss</span> file and import only the modules you want. It can be done like so:</p>
    <pre><code class="language-scss">@import "layout/flex-grid";
    @import "components/buttons";
    @import "components/forms";</code></pre>
    <p>And right there you have the grid, buttons, and form design elements ready to go while leaving out all the other fluff you didn't want.</p>
    <div class="mt-3 mt-5-l"></div>


    <h4 id="available-scss-modules">Available SCSS Modules <a href="#available-scss-modules">#</a></h4>
<pre><code class="language-scss">@import "components/variables";
@import "components/globals";
@import "layout/flex-grid";
@import "layout/old-school-grid";
@import "layout/flex-utilities";
@import "components/typography";
@import "components/buttons";
@import "components/forms";
    // Form Sub Modules
    @import "forms/text-inputs";
    @import "forms/checkboxes-radios";
    @import "forms/range";
    @import "forms/file-upload";
    @import "forms/datepicker";
@import "components/nav";
@import "components/modal";
@import "components/mouse-animation";
@import "components/helpers";
    // Helper Sub Modules
    @import "helpers/misc";
    @import "helpers/spacing";
    @import "helpers/text-helpers";
    @import "helpers/width-height";
    @import "helpers/hide";
    @import "helpers/shadow";
    @import "helpers/iframe-ratio-containers";
    @import "helpers/borders-corners";
    @import "helpers/bg-colors";</code></pre>
    <div class="mt-3 mt-5-l"></div>


    <h4 id="new-to-sass">New to SASS? <a href="#new-to-sass">#</a></h4>
    <p>It's cool. I didn't use it for the longest time either. Its description (via the SASS team themselves) is CSS with super powers. If I could explain it, it is essentially a means of breaking your CSS up into smaller documents to keep it organized while adding in additional features like variables (really awesome for colors schemes), mixins, loops and more. So yeah... CSS with super powers.</p>
</div>
<div class="col s12 l4 xl3 hide-m-down" id="side-nav">
    <ul class="sub-nav">
        <li><a href="#modularity">Modularity</a></li>
        <li><a href="#available-scss-modules">Available Modules</a></li>
        <li><a href="#new-to-sass">SASS</a></li>
    </ul>
</div>

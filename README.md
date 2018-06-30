<p align="center">
    <h2 align="center">Origami</h2>
</p>
<p align="center">
    A mobile-first front-end framework for written for minimal, elegant web design.
</p>
<br/>
<br/>

## 1. Features

- 12 column grid
    - Push, pull, & offset
- Flexbox
    - Rows & columns
    - Justify, alignment, & align-self
    - Ordering
    - etc.
- Basic element styles
    - Buttons
    - Cards
    - Form elements
        - Text inputs
        - Textareas
        - Select dropdowns
        - Checkboxes and radios
        - Range selector
        - Datepicker
        - File upload
- Helpers
    - Spacing (margins, padding)
    - Height (set vh heights)
    - Text alignment
    - Text size
    - Material shadows
    - Hide classes
    - Responsive iframes / ratio containers
- Quick toggle using HTML5 data attributes (build your own modals, navs, etc.)
- ie11 + support
- Fallbacks styles for browsers without JavaScript

Included are a lot of the tools to build and scale a website quickly. Until the doc site is up, a test page (demo.html) has been included. As for the Javascript, no dependencies are required. It was written with ES5 and is currently there to enhance user experience with forms and to add quick toggle abilities (to create your own custom modals and navigations).

<br/>
<br/>

## 2. In the works...

- Navigation
- Footer
- Drag'n'drop file uploads
- Button ripple effect on click
- Notifications / Toasts
- Modal

<br/>
<br/>

## 3. Usage

### Installation
It's rather easy. Start by cloning or [downloading](https://github.com/benjamin-farnham/origami/archive/master.zip) directly and include the origami.min.css file along with the origami.min.js file (with the script preferably before the closing body tag) in your HTML.

```html
<!DOCTYPE html>
<html lang="en" class="no-js"><!-- no-js class allows a small javascript check -->
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">

        <!-- Origami <link> tag -->
        <link href="path/to/origami.min.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <!-- Your content here -->

        <!-- Origami <script> tag -->
        <script type="text/javascript" src="path/to/origami.min.js"></script>
    </body>
</html>
```

No CDN yet. But it is in the plans.

I also want to state that Origami was built mobile first and has 5 breakpoints that will be defined as follows:

- s (mobile size - <= 599px)
- m (mobile landscape / small tablets - 600px to 991px)
- l (tablets / small desktops - 992px to 1279px)
- xl (desktop - 1280px to 1599px)
- xxl (desktop - >= 1600px)

Pretty simple sizing, but memorizing the sizes / styles will let you build quickly. Now with that out of the way, let's look at layouts.

<br/>
<br/>

## 3.1 - Grid System

Origami's default grid is 12 columns wide and is fluid with each breakpoint. The default container size maxes its width out at 1080px with a 5% margin on each side in mobile, and a 7.5% margin on each side on desktop.

To use the grid system, simply declare a container, a row, and finally declare an element a column and tell that element how many columns you want your element to span at what breakpoint. Basic usage would be the following:

```html
<div class="container">
    <div class="row">
        <!-- This element will span 12 columns on mobile, 6 columns on mobile landscape / small tablets, and 3 columns on desktop -->
        <div class="col s12 m6 l3"></div>
        <!-- This element will span 12 columns on mobile, 6 columns on mobile landscape / small tablets, and 3 columns on desktop -->
        <div class="col s12 m6 l3"></div>
        <!-- This element will span 12 columns on mobile and 3 columns on desktop -->
        <div class="col s12 l6"></div>
    </div>
</div>
```

By default, `row`'s have a bottom margin. To remove it, simply add the `no-margin` class to your row you wish to remove the margin from.

```html
<div class="container">
    <div class="row no-margin">
        <div class="col s12"></div>
    </div>
</div>
```

Another note, containers have different sizes as well (sure you could just nest grid systems inside of another grid but I find that rather cumbersome). The sizes are as follows:

- s (max-width: 600px)
- m (max-width: 800px)
- xl (max-width: 1280px)
- xxl (max-width: 1600px)
- full-width (max-width: 100%)

### 3.1.1 - Push, Pull, & Offset

Of course, you can push elements, pull elements, and offset them. Usage is pretty simple as well:

Push & pull (uses left & right positioning to offset elements)
```html
<div class="container">
    <div class="row">
        <div class="col s12 l4 push-l4"></div>
        <div class="col s12 l8 pull-l8"></div>
    </div>
</div>
```

Offset (uses margins to offset element)
```html
<div class="container">
    <div class="row">
        <!-- centered element -->
        <div class="col s12 l6 offset-l3"></div>
    </div>
</div>
```

Pretty straight forward. Just type what effect you are trying to achieve and then the desired breakpoint you wish for this s effect to be seen on along with the columns you wish it to push, pull or offset (`push-{device-size}{column-count}`, `pull-{device-size}{column-count}`, or `offset-{device-size}{column-count}`).
<br/>
<br/><br/>
<br/>
## 3.2 - Flexbox

Now that flexbox is in the green for browsers ie11 & up, I wanted to make sure and include it with Origami.

### 3.2.1 - Flex Containers

Container declaration is as follows and you have two options:

```html
<div class="flex"></div>
<div class="inline-flex"></div>
```

> Also note that if you want to add the flex layout only in larger breakpoints, you can add the desired breakpoint at the end (`flex-{device-size}` or `inline-flex-{device-size}`).

### 3.2.2 - Flex Rows & Columns

With flexbox, you can specify how to align elements horizontally and vertically. Let's start with the horizontal declarations...

> You can also declare at which device breakpoint you want to add these styles as well by appending a '-{device-size}'. For example `flex-row-s`

Rows
```html
<div class="flex flex-row">
    <!-- Aligns items starting from left to right and starting on top left (normal) -->
</div>
<div class="flex flex-row-reverse">
    <!-- Aligns items starting from right to left from the top right side -->
</div>
```

Columns
```html
<div class="flex flex-column">
    <!-- Aligns items starting/ordered from top to bottom -->
</div>
<div class="flex flex-column-reverse">
    <!-- Aligns items starting/ordered from bottom to top -->
</div>
```

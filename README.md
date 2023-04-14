# JSA | JavaScript Accordion

This Accordion is based on The Description List Element.



### Demo
https://jsa.homerocavazos.com/


### NPM

```
npm i @js-toolbox/js-accordion
```

### Usage

To activate the accordion add .jsa class to the `<dl>` tag. The `<dt><a href="#">...</a></dt>` needs to have an anchor tag for best accessibility experience.

#### HTML

```
<dl class="jsa">

  <dt><a href="#">Title One</a></dt>
  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>

  <dt><a href="#">Title Two</a></dt>
  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>

  <dt><a href="#">Title Three</a></dt>
  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>

</dl>
```

#### JavaScript

```
// Instantiate
var example = new jsa();

// Default with .jsa class
example.init();

```

### Options

#### Parent Selector

The default required selector name is `<dl class="jsa">`. You may choose a different selector name as long as you specify it in the init function as the first argument. This is useful when creating multiple accordions on a page. Each instance must be unique.

```
// Custom selector
example.init('#myAccordion');
example2.init('.accordion2');
```

By default the selector for opening each drawer is the anchor tag in the `<dt>` tag. You can change this by updating the dt option.

```
// Custom question selector
example.init( '#myAccordion', { dt: "dt a"} );
```

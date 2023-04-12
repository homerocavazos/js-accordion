# JSA | JavaScript Accordion

This Accordion is based on The Description List Element.


### NPM

```
npm i @js-toolbox/js-accordion
```

### CDN


### Usage

To activate the accordion add .jsa class to the `<dl>` tag. The dt needs to have an anchor tag for best accessibility experience.

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

// Custom parent selector
example.init('#myAccordion');

// Custom question selector
example.init('#myAccordion', { 
  dt: "dt a"
 }
);
```

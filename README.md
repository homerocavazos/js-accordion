# JSA | JavaScript Accordion

This Accordion is based on The Description List Element.

### Demo

[See demo and instructions](https://jsa.homerocavazos.com/)

### NPM

```
npm i @js-toolbox/js-accordion
```

### CDN

#### CSS

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/homerocavazos/js-accordion@master/_css/jsa-theme.min.css"
  integrity="sha384-RT0W4dRolQxg7Kqf6slCOxF/poCOfEUOMKia9OoHHySBJMQh3P5rmV91REGA1Nk/" crossorigin="anonymous">
```

#### JS

```
<script src="https://cdn.jsdelivr.net/gh/homerocavazos/js-accordion@master/_js/jsa.min.1.2.js"
  integrity="sha384-8fF9qqR0P8Ylsznek1CxmiDG6APtcNg00AUlydEWYj9Hk6ZJ+5NsBLFR0jV1MmMD" crossorigin="anonymous"></script>
```

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

// Custom selector
example.init('#myAccordion');
```

"use strict";
let jsa = window.jsa || {};

jsa = (() => {
  function jsa(opts) {
    let _ = this;

    _.settings = {
      dt: "dt",
      dd: "dd",
      greet: "hello",
    };

    _.terms = _.getObjs(document.querySelectorAll(_.settings.dt));
    _.definitions = _.getObjs(document.querySelectorAll(_.settings.dd));
  } //jsa function

  return jsa;
})();

jsa.prototype.setOpts = function (opts) {
  let _ = this;
  if (typeof opts == "object")
    for (let key in opts) {
      if (opts.hasOwnProperty(key)) {
        _.settings[key] = opts[key];
      }
    }
  else return;
};
jsa.prototype.getOpts = function () {
  let _ = this;
  console.log(_.settings);
};

jsa.prototype.getObjs = function (objs) {
  return Object.keys(objs).map(function (e) {
    return objs[e];
  });
};

jsa.prototype.reset = function () {
  let _ = this;
  _.terms.map(function (term) {
    term.classList.remove("active");
  });
  _.definitions.map(function (definition) {
    definition.classList.add("collapsed");
    definition.classList.remove("show");
  });
};

jsa.prototype.collapse = function (el) {
  el.classList.add("active");

  let definition = el.nextElementSibling;
  definition.classList.remove("collapsed");
  definition.classList.add("show");
};

jsa.prototype.logic = function (e) {
  e.preventDefault();

  let _ = this; // this obj not event
  let el = e.target;

  if (el.classList.value === "active") {
    el.classList.remove("active");
    _.reset();
  } else if (e.keyCode === 13) {
    // Enter
    _.reset();
    _.collapse(el);
  } else if (e.keyCode === 9) {
    // Tab
    el.blur();
  } else {
    _.reset();
    _.collapse(el);
  }
};
jsa.prototype.init = function (opts) {
  let _ = this;
  _.setOpts(opts);

  _.definitions.reduce((index, definition) => {
    definition.classList.add("collapsed");
    definition.setAttribute("id", "definition" + index);
    definition.setAttribute("aria-labelledby", "term" + index);
    index += 1;
    return index;
  }, 1);
  _.terms.reduce((index, term) => {
    term.addEventListener("click", _.logic.bind(this));
    term.addEventListener("keydown", _.logic.bind(this));
    term.setAttribute("id", "term" + index);
    term.setAttribute("data-target", "definition" + index);
    term.setAttribute("tabindex", "0");
    index += 1;
    return index;
  }, 1);
};

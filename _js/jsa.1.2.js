/*
     _________/\/\____/\/\/\/\/\______/\/\_____
    _________/\/\__/\/\____________/\/\/\/\___
   _________/\/\____/\/\/\/\____/\/\____/\/\_
  _/\/\____/\/\__________/\/\__/\/\/\/\/\/\_
 ___/\/\/\/\____/\/\/\/\/\____/\/\____/\/\_
__________________________________________

 Version: 1.0.0
  Author: Homero Cavazos
 Website: https://github.com/homerocavazos/jsa

 */
"use strict"
let jsa = window.jsa || {}

jsa = (() => {
  function jsa() {
    const _ = this

    _.settings = {
      dt: "a",
      dd: "dd",
    }
    _.el = null
  } //jsa function

  return jsa
})()

jsa.prototype.setOpts = function (opts) {
  let _ = this
  if (typeof opts == "object")
    for (let key in opts) {
      if (opts.hasOwnProperty(key)) {
        _.settings[key] = opts[key]
      }
    }
  else return
}
jsa.prototype.setParentEL = function (el) {
  let _ = this
  _.el = el || ".jsa"
}
jsa.prototype.getID = function (el) {
  let _ = this
  let id = _.el.replace(".", "")
  return id
}
jsa.prototype.getObjs = function (objs) {
  return Object.keys(objs).map(function (e) {
    return objs[e]
  })
}

jsa.prototype.reset = function () {
  let _ = this
  _.terms.map(function (term) {
    term.classList.remove("active")
  })
  _.definitions.map(function (definition) {
    definition.classList.add("collapsed")
    definition.classList.remove("show")
  })
}

jsa.prototype.collapse = function (el) {
  el.classList.add("active")

  let triggerID = el.dataset.target
  let targetDefinition = document.getElementById(triggerID)

  targetDefinition.classList.remove("collapsed")
  targetDefinition.classList.add("show")
}

jsa.prototype.logic = function (e) {
  e.preventDefault()

  let _ = this // this jsa obj
  let el = e.target

  if (el.classList.value === "active") {
    el.classList.remove("active")
    _.reset()
    el.blur()
  } else {
    _.reset()
    _.collapse(el)
    el.blur()
  }
}
jsa.prototype.init = function (el, opts) {
  let _ = this
  _.setParentEL(el)
  _.setOpts(opts)

  _.terms = _.getObjs(document.querySelectorAll(`${_.el} ${_.settings.dt}`))

  _.terms.map(function (a) {
    a.addEventListener("click", _.logic.bind(_))
  })

  _.definitions = _.getObjs(
    document.querySelectorAll(`${_.el} ${_.settings.dd}`)
  )
  _.definitions.reduce((index, definition) => {
    definition.classList.add("collapsed")
    definition.setAttribute("id", `${_.getID()}-definition` + index)
    definition.setAttribute("aria-labelledby", `${_.getID()}-term` + index)
    index += 1
    return index
  }, 1)
  _.terms.reduce((index, term) => {
    term.setAttribute("id", `${_.getID()}-term` + index)
    term.setAttribute("data-target", `${_.getID()}-definition` + index)
    term.setAttribute("tabindex", "0")
    index += 1
    return index
  }, 1)
}

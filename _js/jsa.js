const jsa = (function () {
  let settings = {
    dt: "dt",
    dd: "dd",
  }

  const dt = document.querySelectorAll(settings.dt)
  const dd = document.querySelectorAll(settings.dd)

  const _terms = Object.keys(dt).map(function (e) {
    return dt[e]
  })
  const _definitions = Object.keys(dd).map(function (e) {
    return dd[e]
  })

  const _resetDefinitions = () => {
    //Reset Term
    _terms.map(function (term) {
      term.classList.remove("active")
    }, 0)
    // Reset Definitions
    _definitions.map(function (definition) {
      definition.classList.add("collapsed")
      definition.classList.remove("show")
    }, 0)
  }

  const _collapse = (el) => {
    // Add active to clicked item
    // This takes care of the plus minus icon
    let term = el
    term.classList.add("active")
    // Show the DD
    let definition = el.nextElementSibling
    definition.classList.remove("collapsed")
    definition.classList.add("show")
  }

  const _logic = (e) => {
    e.preventDefault()
    let el = e.target
    if (el.classList.value === "active") {
      el.classList.remove("active")
      _resetDefinitions()
    } else if (e.keyCode === 13) {
      // Enter
      _resetDefinitions()
      _collapse(el)
    } else if (e.keyCode === 9) {
      // Tab
      el.blur()
    } else {
      _resetDefinitions()
      _collapse(el)
    }
  }

  const _init = () => {
    _definitions.reduce((index, definition) => {
      definition.classList.add("collapsed")
      definition.setAttribute("id", "definition" + index)
      definition.setAttribute("aria-labelledby", "term" + index)
      index += 1
      return index
    }, 1)

    _terms.reduce((index, term) => {
      term.addEventListener("click", _logic)
      term.addEventListener("keydown", _logic)
      term.setAttribute("id", "term" + index)
      term.setAttribute("data-target", "definition" + index)
      term.setAttribute("tabindex", "0")
      index += 1
      return index
    }, 1)
  }

  // Public API
  return {
    init: _init,
  }
})() //jsa

jsa.init()

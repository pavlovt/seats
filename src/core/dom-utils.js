export default {
  createElement: (tag, otherAttrs = {}) => {
    let el = document.createElement(tag)
    
    Object.keys(otherAttrs)
      .forEach(attr => el[attr] = otherAttrs[attr])

    return el
  }
}
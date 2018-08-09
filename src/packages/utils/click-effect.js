function hasClass (ele, cls) {
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

function addClass (ele, cls) {
  if (!hasClass(ele, cls)) ele.className = cls + ' ' + ele.className
}

function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export default function clickedWithClass (el, cls) {
  setTimeout(function () {
    addClass(el, cls)
  }, 100)
  setTimeout(function () {
    removeClass(el, cls)
  }, 1200)
}

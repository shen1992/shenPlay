const TEXT_NODE = Symbol('__text_node')
function isTextNode(type) {
  return type === TEXT_NODE
}

function createFiber(type, props, children) {
  let key = props.key
  delete props.key

  let vnode = {
    type,
    props,
    key,
    $el: null,
    index: 0
  }

  children = children.map((child, index) => {
    if (child.type) {
      children = {
        type: TEXT_NODE,
        props: {
          nodeValue: child
        },
        children: []
      }
    }
    return child
  })

  vnode.children = bindFiber(vnode, children)
  return vnode
}

function bindFiber(parent, children) {
  let firstChild

  return children.map((child, index) => {
    child.$parent = parent
    child.index = index

    if (!firstChild) {
      
    }
  })
}
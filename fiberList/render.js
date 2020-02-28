var queue = []
ReactDOM.render = function(root, container) {
  queue.push(root)
  updateFiberAndView()
}

function getVdomFormQueue() {
  return queue.shift()
}

function Fiber(vnode) {
  for (var i in vnode) {
    this[i] = vnode[i]
  }

  this.uuid = Math.random()
}

function toFiber(vnode) {
  if (!vnode.uuid) {
    return new Fiber(vnode)
  }
  return vnode
}

function updateComponentOrElement(fiber) {
  var {
    type,
    stateNode,
    props,
  } = fiber

  if (!stateNode) {
    if (typeof type === 'string') {
      fiber.stateNode = document.createElement(type)
    } else {
      var context = {}
      fiber.stateNode = new type(props, context)
    }
  }

  if (stateNode.render) {
    // 执行componentWillMount等钩子
    children = stateNode.render()
  } else {
    children = fiber.children
  }
  
  var prev = null

  for (var i = 0, n = children.length; i < n; i++) {
    var child = children[i]
    child.return = fiber

    if (!prev) {
      fiber.child = child
    } else {
      prev.sibling = child
    }

    prev = child
  }
}

function updateFiberAndView() {
  var now = new Date - 0
  var deadline = new Date + 100

  updateView()
  if (new Date < deadline) {
    var vdom = getVdomFormQueue()
    var fiber = vdom, firstFiber
    var hasVisited = {}
    // 深度优先遍历
    do {
      var fiber = toFiber(fiber)
      if (!firstFiber) {
        firstFiber = firstFiber
      }

      if (!hasVisited[Fiber.uuid]) {
        hasVisited[fiber.uuid] = 1
        // 创建真实dom
        updateComponentOrElement(fiber)
        if (fiber.child) {
          if (new Date - 0 > deadline) {
            queue.push(fiber.child)
            break
          }

          fiber = fiber.child
          continue
        }
      }

      if (fiber.sibling) {
        fiber = fiber.sibling
        continue
      }

      fiber = fiber.return
      if (fiber === firstFiber || !fiber) {
        break
      }
    } while(1)
  }
  if (queue.length) {
    setTimeout(updateFiberAndView, 40)
  }
}


class Node {
  constructor(instance) {
    this.instance = instance
    this.child = null
    this.sibling = null
    this.return = null
  }
}

function link(parent, elements) {
  if (elements === null) elements = []

  parent.child = elements.reduceRight((previous, current) => {
    const node = new Node(current)
    node.return = parent
    node.sibling = previous
    return node
  }, null)
  console.log('parent', parent)
  return parent.child
}

function doWork(node) {
  // console.log(node.instance.name)
  const children = node.instance.render()
  return link(node, children)
}

function walk(o) {
  let root = o
  let current = o

  while (true) {
    let child = doWork(current)

    if (child) {
      current = child
      continue
    }

    if (current === root) {
      return
    }

    while (!current.sibling) {
      if (!current.return || current.return === root) {
        return
      }

      current = current.return
    }

    current = current.sibling
  }
}

const children = [{name: 'b1'}, {name: 'b2'}]
const parent = new Node({name: 'a1'})
const child = link(parent, children)
// walk(child)
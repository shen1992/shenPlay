function workLoop() {
  let cursor = newFiber

  const workLoop = () => {
    while (cursor) {
      cursor = performUnitWork(cursor, patches)
    }
  }

  scheduleWork(workLoop)
}

function performUnitWork(fiber, patches) {
  diffFiber(oldFiber, fiber, patches)
  diffChildren(oldChildren, fiber.children, patches)

  if (fiber.$child) return fiber.$child

  while (fiber) {
    if (fiber.$sibling) return fiber.$sibling

    fiber = fiber.$parent
    if (!fiber) return null
  }

  return null
}
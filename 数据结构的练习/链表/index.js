/**
 * Created by shen on 2016/12/28.
 */

function LinkedList() {
    var Node = function (element) {
        this.elements = element
        this.next = null
    }

    var length = 0,
        head = null

    this.append = function (element) {
        var node = new Node(element),
            current
        if(head == null) {
            head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }

            current.next = node

        }
        length++
    }
    this.insert = function (position, element) {
        var current = head,
            index = 0,
            node = new Node(element),
            previous

        if(position >= 0 && position <= length) {
            if(position == 0) {
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            var index = 0,
                current = head,
                previous

            if(position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.elements
        } else {
            return false
        }
    }
    this.remove = function () {}
    this.indexOf = function () {}
    this.isEmpty = function () {}
    this.size = function () {}
    this.toString = function () {}
    this.print = function () {}

}

var node = new LinkedList()
node.append('1')
node.append('2')
node.append('3')
node.append('4')




function DoublyLinkedList() {
    var Node = function (element) {
        this.elements = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0

            if(position === 0) {
                if(!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if(position === length) {  //最后一项
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous

                length++ //更新列表长度
                return true
            }
        } else {
            return false
        }
    }

    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            var current = head,
                previous,
                index = 0

            if(position === 0) {
                head = current.next

                //如果只有一项，更新tail
                if(length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if(position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                //移除
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.elements
        } else {
            return null
        }
    }

}
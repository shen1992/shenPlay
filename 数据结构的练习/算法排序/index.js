/**
 * Created by shen on 2016/12/23.
 */
function ArrayList() {
    var array = []

    this.insert = function (item) {
        array.push(item)
    }
    this.toString = function () {
        return array.join()
    }

    var swap = function (index1, index2) {
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }

    this.bubblesSort = function () {
        var length = array.length
        for(var i = 0; i < length; i++) {
            for(var j = 0; j < length - 1 - i; j++) {
                if(array[j] > array[j+1]) {
                    swap(j, j + 1)
                }
            }
        }
    }

    this.selectionSort = function () {
        var length = array.length,
            indexMin
        for(var i = 0; i < length - 1; i++) {
            indexMin = i
            for(var j = i; j < length; j++) {
                if(array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if(i !== indexMin) {
                swap(i, indexMin)
            }
        }
    }
    this.mergeSort = function () {
        array = mergeSortRec()
    }
    function mergeSortRec(array) {
        var length = array.length

        if(length === 1) return array

        var mid = Math.floor(length / 2),
            left = Array.slice(0, mid),
            right = Array.slice(mid, length)

        return merge(mergeSortRec(length), mergeSortRec(right))

    }

    this.binarySearch = function (item) {
        this.selectionSort()
        var low = 0,
            height = array.length - 1,
            mid,
            element
        while (low <= height) {
            mid = Math.floor((low + height) / 2)
            element = array[mid]
            if(element > item) {
                height = mid - 1
            } else if(element < item) {
                low = mid + 1
            } else {
                return mid
            }

        }
        return -1
    }
}

function createNonSortedArray(size) {
    var array = new ArrayList()
    for(var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array
}

var array = createNonSortedArray(5)
// console.log(array.toString())
// array.bubblesSort()
// array.selectionSort()
// console.log(array.toString())
console.log(array.binarySearch(5))



































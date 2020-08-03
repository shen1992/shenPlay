/*
let obj = new Proxy({}, {
    set: (target, name, value, receiver) => {
        let success = Reflect.set(target, name, value, receiver)
        if (success) {
            console.log('property ' + name + ' on ' + target + ' set to ' + value)
        }
        return success
    }
})

obj.name = 'shen'
*/
console.log(Reflect.apply(Math.floor, null, [1.75]))
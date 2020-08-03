/*
let obj = new Proxy({}, {
  get: (target, propKey, receiver) => {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: (target, propKey, value, receiver) => {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
})

obj.count = 1
++obj.count
*/
/*
var proxy = new Proxy({}, {
  get: (target, propKey) => {
    return 35
  }
})

console.log('11', proxy.time)
*/

/*
let person = {
  name: '张三'
}

let proxy = new Proxy(person, {
  get: (target, propKey) => {
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
})

// console.log(proxy.name)
console.log(proxy.age)
*/

let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo
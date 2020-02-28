function randomHexColor() {
  return '#' + ('0000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
}

// setTimeout(function() {
//   var k = 0;
//   var root = document.getElementById('root')
//   for (var i = 0; i < 10000; i++) {
//     k += new Date - 0
//     var el = document.createElement('div')
//     el.innerHTML = k
//     root.appendChild(el)
//     el.style.cssText = `background:${randomHexColor()};height:40px`
//   }
// })

setTimeout(function () {
  function loop(n) {
      var k = 0;
      console.log(n);
      for (var i = 0; i < 100; i++) {
          k += new Date - 0;
          var el = document.createElement("div");
          el.innerHTML = k;
          root.appendChild(el);
          el.style.cssText = `background:${randomHexColor()};height:40px`;
      }
      if (n) {
          setTimeout(function () {
              loop(n - 1);
          }, 40);
      }
  }
  loop(100);
}, 1000)
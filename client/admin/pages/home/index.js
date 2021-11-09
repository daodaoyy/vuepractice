let timeout = null
let timer = null
export default {
  name: 'Home',
  data() {
    return {
      num: 1
    }
  },
  methods: {
    /**
     * 闭包练习
     */
    clickClosure() {
      // 5->5,5,5,5,5
      // for (var i = 0; i < 5; i++) {
      //   setTimeout(function() {
      //     console.log(new Date, i);
      //   }, 1000);
      // }
      // console.log(new Date, i);

      // 5->0,1,2,3,4
      // for (var i = 0; i < 5; i++) {
      //   (function(j) {
      //     setTimeout(function() {
      //       console.log(new Date(), j)
      //     }, 1000)
      //   })(i)
      // }
      // console.log(new Date, i);

      // 5->0,1,2,3,4
      // for (var i = 0; i < 5; i++) {   
      //   setTimeout(function(j) {
      //     console.log(new Date(), j)
      //   }, 1000, i)
      //   }
      // console.log(new Date, i);

      // 报错->0,1,2,3,4
      for (let i = 0; i < 5; i++) {
        setTimeout(function() {
          console.log(new Date(), i)
        }, 1000)
      }
      // console.log(new Date, i);
    },

    /**
     * this练习
     */
    thisFunction() {
      var person = {
        name: "axuebin",
        age: 25
      };
      var newPerson = {
        name: "newAxuebin",
        age: 26
      };
      function say(job){
        console.log(this.name+":"+this.age+" "+job);
      }
      var f = say.bind(person);
      f()
      // console.log(f());
      say.call(newPerson,"FE"); // axuebin:25 FE
      say.apply(newPerson,["FE"]); // axuebin:25 FE
    },

    /**
    * event loop
    */
    eventLoopFuc() {
      console.log('script start');
      setTimeout(function () {
        console.log('setTimeout');
      }, 0);

      Promise.resolve()
        .then(function () {
          console.log('promise1');
        })
        .then(function () {
          console.log('promise2');
        });

      console.log('script end');
    },
    /**
     * 防抖练习
     */
    clickDebounce() {
      this.debounce(this.count, 2000, true)()
    },
    debounce(func, wait, immediate) {
      return function () {
        let that = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
          let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
          timeout = setTimeout(function () {
            timeout = null;
          }, wait)
          if (callNow) {
            func.apply(that, args)
          }
        }
        else {
          timeout = setTimeout(function () {
            func.apply(that, args)
          }, wait);
        }
      }
    },
    /**
     * 节流练习
     */
    clickThrolle() {
      this.throttled(this.count, 2000)()
    },
    throttled(fn, delay) {
      // let timer = null
      let starttime = Date.now()
      return function () {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
          fn.apply(context, args)
          starttime = Date.now()
        } else {
          timer = setTimeout(fn, remaining);
        }
      }
    },
    count() {
      this.num++
    }
  }
};
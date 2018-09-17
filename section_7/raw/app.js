// var data = {
//    status: "Critical"
// }

// GLOBAL COMPONENT
// Vue.component('my-cmp', {
//    data: function () {
//       return {
//          status: "Critical"
//       };
//    },
//    template: '<p>Server status: {{status}} (<button @click="changeStatus">Change</button>)</p>',
//    methods: {
//       changeStatus: function () {
//          this.status = "Normal";
//       }
//    }
// });


// LOCAL COMPONENT
var cmp = {
   data: function () {
      return {
         status: "Critical"
      };
   },
   template: '<p>Server status: {{status}} (<button @click="changeStatus">Change</button>)</p>',
   methods: {
      changeStatus: function () {
         this.status = "Normal";
      }
   }
};

new Vue({
   el: "#app",
   components: {
      'my-cmp': cmp //local component - tylko do 1 instancji
   }
})

new Vue({
   el: "#app2",
})
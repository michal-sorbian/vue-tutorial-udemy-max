new Vue({
   el: '#exercise',
   data: {
      name: 'Jaśko',
      age: 30,
      imgSrc: 'https://weandthecolor.com/wp-content/uploads/2013/03/Google-Graphics-by-Celeste-Prevost.jpg'
   },
   methods: {
      randomNumber: function () {
         return Math.random();
      }
   }
});
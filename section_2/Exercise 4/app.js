new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    redColorClass: 'redColor',
    borderClass: 'border',
    inputClass: '',
    ownClass: '',
    boolClass: false,
    font: 10,
    barWidth: 0
  },
  methods: {
    startEffect: function() {
      var self = this;
      setInterval(function(){
        self.effectClasses.highlight = !self.effectClasses.highlight;
        self.effectClasses.shrink = !self.effectClasses.shrink;
      }, 1000);
    },
    startBar: function(){
      var self = this;
      var barInt = setInterval(function(){
        self.barWidth++;
        if (self.barWidth === 100) clearInterval(barInt);
      }, 20);
    }
  }
});

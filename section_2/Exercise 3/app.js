new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function(){
            console.log("computed");            
            return this.value > 20 ? "Done": "Not there yet";
        }
    },
    watch: {
        result: function(){
            var self = this;
            setTimeout(function(){
                self.value = 0;
            }, 5000);
        }
    }
});
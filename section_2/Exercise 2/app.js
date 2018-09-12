new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function () {
            alert("hej");
        },
        storeValue: function (e) {
            this.value = e.target.value;
        }
    }
});
// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file

/*
new Vue({
	el: '#app',
	data: {
		title: 'Hello World',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google</a>',
		counter: 0,
		x: 0,
		y: 0,
		name: 'Jaśko',
		licznik: 0,
		drugiLicznik: 0,
		//result: ''
	},
	methods: {
		changeTitle: function(e){
			this.title = e.target.value;
		},
		sayHello: function () {
			//return 'Hello!!!';
			this.title = "Siemka!";
			return this.title;
		},
		increaseCounter: function (step, e) {
			this.counter += step;
			console.log(e.target);
		},
		updateCoords: function (e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		alertMe: function () {
			alert('joł!');
		},
		result: function () {
			console.log("Method");
			
			return this.licznik > 5 ? 'Wiekszy niz 5' : 'Mniejszy niz 5';
		}
	},
	computed: {
		output: function () {
			console.log("computed");
			
			return this.licznik > 5 ? 'Wiekszy niz 5' : 'Mniejszy niz 5';
		}
	},
	watch: {
		licznik: function(value){
			var vm = this;
			setTimeout(function(){
				vm.licznik = 0;
			}, 3000);
		}
	}
});
*/

/*
new Vue({
	el: '#styling',
	data: {
		attachRed: false,
		color: 'green'
	},
	computed: {
		divClasses: function(){
			return {
				red: this.attachRed,
				blue: !this.attachRed
			}
		}
	}
});
*/

new Vue({
	el: '#styling2',
	data: {
		color: 'gray',
		width: 100
	},
	computed: {
		divClasses: function(){
			return {
				backgroundColor: this.color,
				width: this.width+'px'
			}
		}
	}
});
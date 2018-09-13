new Vue({
   el: "#app",
   data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: []
   },
   methods: {
      startGame: function(){
         this.gameIsRunning = true;
         this.playerHealth = 100;
         this.monsterHealth = 100;
         this.turns = [];
      },
      attack: function(){
         var damage = this.dealDamage(3, 10);
         this.monsterHealth -= damage;
         this.turns.unshift({
            isPlayer: true,
            text: `Player hits monster for ${damage} pts!`
         });
         if(this.checkWin()){
            return;
         }

         this.monsterAttacks();
      },
      specialAttack: function(){
         var damage = this.dealDamage(10, 20);
         this.monsterHealth -= damage;
         this.turns.unshift({
            isPlayer: true,
            text: `Player hits monster HARD for ${damage} pts!`
         });
         if(this.checkWin()){
            return;
         }

         this.monsterAttacks();
      },
      heal: function(){
         if(this.playerHealth <= 90) {
            this.playerHealth += 10;
         } else {
            this.playerHealth = 100;
         }
         this.turns.unshift({
            isPlayer: true,
            text: `Player heals for 10 pts!`
         });
         
         this.monsterAttacks();
      },
      giveUp: function(){
         this.gameIsRunning = false;
      },
      monsterAttacks: function() {
         var damage = this.dealDamage(5, 12);
         this.playerHealth -= damage;
         this.checkWin();
         this.turns.unshift({
            isPlayer: false,
            text: `Monster hits player for ${damage} pts!`
         });
      },
      dealDamage: function(min, max) {
         return Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWin: function(){
         if(this.monsterHealth <= 0) {
            if(confirm("You won! Play again?")){
               this.startGame();
            } else {
               this.gameIsRunning = false;
            }
            return true;
         } else if(this.playerHealth <= 0) {
            if(confirm("You lost! Play again?")){
               this.startGame();
            } else {
               this.gameIsRunning = false;
            }
            return true;
         }
         return false;
      }
   }
   
});
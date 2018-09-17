<template>
   <div>
      <p>Server status: {{ status }}</p>      
      <button @click="changeStatus">Change</button>
      <hr>
   </div>   
</template>

<script>
export default {
   data: function () {
      return {
         status: "Critical as hell"
      }
   },
   methods: {
      changeStatus() {
         this.status = "Normal"
      }
   }
}
</script>

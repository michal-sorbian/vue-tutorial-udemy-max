<template>
   <div>
      <div class="form-group">
         <input type="text" placeholder="First name" v-model="firstName">
      </div>
      <div class="form-group">
         <input type="text" placeholder="Last name" v-model="lastName">
      </div>
   </div>
</template>

<script>
export default {
   props: ['value'],
   methods: {

   },
   computed: {
      
   }
}
</script>

<template>
   <div class="row">
      <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
               <app-list-element v-for="index in 5"></app-list-element>
            </ul>
      </div>
      <app-sub-footer></app-sub-footer>
   </div>
</template>

<script>
import ListElement from './ListElement.vue';
import SubFooter from './SubFooter.vue';
export default {
   components: {
      'app-list-element': ListElement,
      'app-sub-footer': SubFooter
   }
}
</script>

<style scoped>
      div {
            border: 1px solid blue;
      }
</style>

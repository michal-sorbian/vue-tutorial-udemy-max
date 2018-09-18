<template>
   <li @click="getServerInfo" class="list-group-item">Server ID: {{ server.id }} | Status: {{ server.status }}</li>
</template>


 <script>
 import { eventBus } from '../../main.js';
 export default {
    props: ['server'],
    methods: {
       getServerInfo(){
          eventBus.$emit('serverWasSelected', this.server);
       }
    }
 }
 </script>
 
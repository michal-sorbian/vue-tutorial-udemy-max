<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server Details: #{{ server.id }} | status: {{ server.status }}</p>
        <button @click="setToNormal">Set to normal</button>
    </div>

</template>

<script>
import { eventBus } from '../../main.js';
export default {
    data: function () {
        return {
            server: null
        }
    },
    methods: {
        setToNormal(){
            this.server.status = "Normal";
        }
    },
    created(){
        eventBus.$on("serverWasSelected", (server) => {
            this.server = server;
        })
    }
}
</script>

<style>

</style>

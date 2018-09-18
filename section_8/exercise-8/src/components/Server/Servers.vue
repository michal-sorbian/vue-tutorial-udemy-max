<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <!-- <li class="list-group-item" v-for="server in servers">
                Server #{{ server.id }}, Status: {{ server.status }}
            </li> -->
            <app-server :server="server" v-for="server in servers"></app-server>
        </ul>
    </div>
</template>

<script>
import ServerItem from './ServerItem.vue';
export default {
    data: function () {
        return {
            servers: [
                { id: 1, status: "Normal" },
                { id: 2, status: "Critical" },
                { id: 3, status: "Unknown" },
                { id: 4, status: "Normal" },
            ]
        }
    },
    components: {
        'app-server': ServerItem
    }
}
</script>


<style>

</style>

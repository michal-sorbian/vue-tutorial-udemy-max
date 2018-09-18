<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ myAge }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    methods: {
        editAge(){
            this.myAge = 30;
            //this.$emit('ageWasChanged', this.myAge);
            //eventBus.$emit('ageWasChanged', this.myAge);
            eventBus.changeAge(this.myAge);
        }
    },
    props: ['myAge'],
}
</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>User age: {{ myAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name in parent</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default {
        props: {
            myName: {
                type: String,
                required: true,
                //default: 'Johny'
            },
            resetFn: Function,
            myAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Jaśko';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on("ageWasChanged", (age) => {
                this.myAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

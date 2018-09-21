<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {    
    // computed: {
    //     id: function () {
    //         return this.$route.params.id
    //     }
    // },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

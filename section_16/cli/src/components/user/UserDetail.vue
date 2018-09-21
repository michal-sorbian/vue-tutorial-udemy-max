<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        <router-link tag="button" class="btn btn-success" :to="{ name: 'userEdit', params: { id: id }, query: { locale: 'en', w: 200 }, /* hash: '#data' */ }">Edit User</router-link>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteEnter(to,from,next){
        if(true){
            next();
        } else {
            next(false);
        }
        
    }
}
</script>

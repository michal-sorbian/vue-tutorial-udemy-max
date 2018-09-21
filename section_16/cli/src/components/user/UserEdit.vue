<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Second query param: {{ $route.query.w }}</p>
        <hr>
        <button @click="confirmed = true" class="btn btn-warning">Confirm</button>
        <div style="height: 700px;"></div>
        <p id="data">Some data</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        };
    },
    beforeRouteLeave(to,from,next){
        if(this.confirmed) {
            next();
        } else {
            if(confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }

    }
}
</script>

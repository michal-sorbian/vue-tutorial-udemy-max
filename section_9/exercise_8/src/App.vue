<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedOne='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedOne='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedOne='appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedOne">
                    <p slot="blue">I'm blue</p>
                    <p slot="green">I'm green</p>
                    <p slot="red">I'm red</p>
                </component>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function () {
            return {
                selectedOne: 'appBlue'
            }
        }
    }
</script>

<style>
</style>

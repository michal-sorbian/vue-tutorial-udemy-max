<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>User name</label>
                    <input type="text" class="form-control" v-model="user.userName">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button @click="submit" class="btn">Submit data</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
                <button @click="getData" class="btn btn-primary">Get data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.userName}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    userName: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                // this.$http.post('/data.json', this.user)
                //     .then(response => {
                //         console.log(response);                        
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });
                //this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            getData(){
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json();
                //     })
                //     .then(data => {
                //         const results = [];
                //         for(let key in data){
                //             results.push(data[key]);
                //         }
                //         this.users = results;
                //     });
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const results = [];
                        for(let key in data){
                            results.push(data[key]);
                        }
                        this.users = results;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>

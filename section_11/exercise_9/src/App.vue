<template>
    <div class="container">
        <form v-if="!isSubmited">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <input type="text" placeholder="First name" v-model="firstName">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Last name" v-model="lastName">
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Pass" v-model="pass">
                    </div>
                    <div class="form-group">
                        <label>Store data?</label>
                        <br>
                        <input type="radio" value="Yes" v-model="store">Yes
                        <br>
                        <input type="radio" value="No" v-model="store">No
                    </div>
                    <div class="form-group">
                        <button @click.prevent="isSubmited = true" class="btn">Submit</button>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row"  v-if="isSubmited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ pass }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                firstName: '',
                lastName: '',
                email: '',
                pass: '',
                store: 'No',
                isSubmited: false,
            }
        }
    }
</script>

<style>
</style>

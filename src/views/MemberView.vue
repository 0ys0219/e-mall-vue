<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%">
                <h2 class="text-center mb-3">會員</h2>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login"
                            type="button" role="tab" aria-controls="nav-login" aria-selected="true">登入</button>
                        <button class="nav-link" id="nav-register-tab" data-bs-toggle="tab" data-bs-target="#nav-register"
                            type="button" role="tab" aria-controls="nav-register" aria-selected="false">註冊</button>
                    </div>
                </nav>
                <div class="tab-content mt-2" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                        <form @submit.prevent="login">

                            <!-- name -->
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="account" class="form-label">帳號</label>
                                    <input type="text" name="account" id="account" class="form-control" placeholder="帳號"
                                        required v-model="member.account" autocomplete="off">
                                </div>
                            </div>
                            <!-- price -->
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="password" class="form-label">密碼</label>
                                    <input type="password" name="password" id="password" class="form-control"
                                        placeholder="密碼" required v-model="member.password" autocomplete="off">
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <input type="submit" value="登入" class="btn btn-primary w-100">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab">
                        <form @submit.prevent="register">

                            <!-- name -->
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="account" class="form-label">帳號</label>
                                    <input type="text" name="account" id="account" class="form-control" placeholder="帳號"
                                        required v-model="member.account" autocomplete="off">
                                </div>
                            </div>
                            <!-- price -->
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="password" class="form-label">密碼</label>
                                    <input type="password" name="password" id="password" class="form-control"
                                        placeholder="密碼" required v-model="member.password" autocomplete="off">
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <input type="submit" value="註冊" class="btn btn-primary w-100">
                                </div>
                            </div>
                        </form>
                    </div>

                </div>



            </div>
        </div>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Member',
    components: {
        Navbar
    },

    data() {
        return {
            member: {
                account: '',
                password: ''

            }
        }
    },

    methods: {
        register() {
            fetch('http://localhost:8080/members/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.member)
            })
                .then(data => {
                    console.log(data)
                    this.$router.push("/")
                })
        },
        login() {
            fetch('http://localhost:8080/members/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.member)
            })
                .then(data => {
                    console.log(data)
                    this.$router.push("/")
                })
        }
    }
}

</script>
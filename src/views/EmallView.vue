<template>
    <main>
        <Navbar />

        <!-- table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text -center">Emall View</h1>
                    <button class="btn btn-primary mx-2" @click="$event => getProducts()">查看全部商品</button>
                    <form>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">商品編號</th>
                                    <th scope="col">商品名稱</th>
                                    <th scope="col">售價</th>
                                    <th scope="col">庫存</th>
                                    <th scope="col">購買數量</th>
                                    <th scope="col">加入</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <th scope="row">{{ product.id }}</th>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.quantity }}</td>
                                    <td style="width: 100px;">
                                        <input type="number" id="typeNumber" class="form-control col-md-12" />
                                    </td>
                                    <td><input class="form-check-input me-1" type="checkbox" value=""></td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" value="新增訂單" class="btn btn-primary w-100">
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import Navbar from '../components/Navbar.vue';

export default {
    name: 'EmallView',
    components: {
        Navbar
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            fetch('http://localhost:8080/products', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    this.products = data
                    console.log(data)
                })
        }


    },
    beforeMount() {
        this.getProducts()
    }

}

</script>
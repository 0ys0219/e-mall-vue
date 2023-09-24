<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%">
                <h2 class="text-center mb-3">新增商品</h2>
                <form @submit.prevent="addProduct">
                    <!-- name -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="name" class="form-label">商品名稱</label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="商品名稱" required
                                v-model="product.name">
                        </div>
                    </div>
                    <!-- price -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="price" class="form-label">商品售價</label>
                            <input type="text" name="price" id="price" class="form-control" placeholder="商品售價" required
                                v-model="product.price">
                        </div>
                    </div>
                    <!-- quantity -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="quantity" class="form-label">商品庫存</label>
                            <input type="text" name="quantity" id="quantity" class="form-control" placeholder="商品庫存"
                                required v-model="product.quantity">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 form-group">
                            <input type="submit" value="新增" class="btn btn-primary w-100">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'AddProduct',
    components: {
        Navbar
    },

    data() {
        return {
            product: {
                name: '',
                price: '',
                quantity: ''
            }
        }
    },

    methods: {
        addProduct() {
            fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.product)
            })
                .then(data => {
                    console.log(data)
                    this.$router.push("/")
                })
        }
    }
}

</script>
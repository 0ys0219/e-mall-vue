<template>
    <main>
        <Navbar />

        <!-- table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text -center">Emall View</h1>


                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">訂單編號</th>
                                <th scope="col">總價</th>
                                <th scope="col">付款狀態</th>
                                <th scope="col">購買數量</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="od in order" :key="od.orderId">
                                <th scope="row">{{ od.orderId }}</th>
                                <td>{{ od.price }}</td>
                                <td>{{ od.payStatus }}</td>
                                <td>{{ od.orderDetailList }}</td>

                            </tr>
                        </tbody>
                    </table>


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
            order: {
                orderId: '',
                memberId: '',
                price: '',
                payStatus: '',
                orderDetailList: []
            }
        }
    },
    methods: {
        getOrders() {
            fetch('http://localhost:8080/members/1/orders', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    this.order = data
                    console.log(data)
                })
        }


    },
    beforeMount() {
        this.getOrders()
    }

}

</script>
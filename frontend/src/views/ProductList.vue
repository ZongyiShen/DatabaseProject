<template>
    <navbar />
    <div class="container">
        <h1>商品列表</h1>
        <hr>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center" id="productBlock">
            <product v-for="item in productArray" :block="item" :key="item.id"></product>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import HelloWorldService from '../services/helloworld.service'


export default {
    data () {
        return {
            productArray: [],
        }
    },
    mounted() {
        HelloWorldService.getProduct().then(data => {
            this.productArray = data.data.result;
        }).catch((error) => {
            console.log("err",error);
        })
    },
    components: {
        Navbar,
        Product,
    },
    name: 'app',
};
</script>
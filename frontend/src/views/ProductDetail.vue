<template>
    <h1>{{ productArray.product_name }}</h1>
</template>

<script>
import HelloWorldService from '../services/helloworld.service'


export default {

    data () {
        return {
            productArray: [],
        }
    },
    mounted() {
        HelloWorldService.getProductById(this.$route.params.id).then(data => {
            this.productArray = data.result;
        }).catch((error) => {
            console.log("err",error);
        })
    },
    name: 'app',
};
</script>
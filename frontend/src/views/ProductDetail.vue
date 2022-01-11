<template>
    <span>{{ product }}</span>
    <button @click="del(index)" :disabled="quantity<=1">-</button>
    <h1>{{ product.product_name }}</h1>
    <h1>{{ memberId }}</h1>
    <h1>{{ productId }}</h1>
    <button @click="del(index)" :disabled="quantity<=1">-</button>
    <span>{{ quantity }}</span>
    <button @click="add(index)" :disabled="quantity>=product.storage">+</button>
    <button @click="PutProducToShoppingCart(memberId, productId, quantity)"></button>

</template>

<script>
import HelloWorldService from '../services/helloworld.service'
import UserService from '../services/user.service'


export default {

    data () {
        return {
            product: [],
            memberId: 0,
            productId: this.$route.params.id,
            quantity: 1,
        }
    },
    methods: {
        PutProducToShoppingCart(memberId, productId, quantity) {
            UserService.postShoppingCart(memberId, productId, quantity).then(data =>{
                if((data.result.status=="成功新增商品。")){
                    alert("成功添加商品。");
                    this.$router.push({path: "/cart"});
                }
                if((data.result.status =="添加商品失敗")){
                    alert(data.result.err)
                }
            })
        },
        add(){
            this.quantity++;
        },
        del(){
            this.quantity--;
        },
    },
    mounted() {
        UserService.getMemberData().then(data => {
            this.memberId = data.result.id;
        }).catch((error) => {
            console.log("err",error);
        });
        HelloWorldService.getProductById(this.$route.params.id).then(data => {
            this.product = data.result;
        }).catch((error) => {
            console.log("err",error);
        })
        
    },
    name: 'app',
};
</script>
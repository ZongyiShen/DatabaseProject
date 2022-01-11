<template>
    <div class="container">
        <h1>購物車列表</h1>
        <hr>
    </div>
    <div class="container py-custom rounded border-custom">
        <div v-for="(itemC, index) in cartArray" :key="index" @change="counter += 1"  class="eachProduct">
            <div v-for="itemP in productArray" :key="itemP.id">
                <div v-if="itemC.product_id === itemP.id" class="row justify-content-center border">
                    <div class="col-3 py-custom">
                        <div class="row justify-content-center">
                            <img class="img-thumbnail w-50" :src="require('@/assets/'+itemP.product_name+'.png')" />
                            商品名稱：{{ itemP.product_name }}
                        </div>
                    </div>
                    <div class="col-9 py-custom">
                        <ul class="list-group">
                            <li class="list-group-item">商品編號：{{ itemP.id }}</li>
                            <li class="list-group-item">尺寸：{{ itemP.size}}</li>
                            <li class="list-group-item">價格：{{ itemP.price }}</li>
                            <li class="list-group-item">描述：{{ itemP.description }}</li>
                        </ul>
                        <div class="left-align">
                        {{ quantityArray }}
                            <button @click="del(index)" :disabled="quantityArray[index]<=1">-</button>
                            產品數量: {{ itemC.quantity }}
                            <button @click="add(index)" :disabled="quantityArray[index]>=itemP.storage">+</button>
                            <button>修改商品</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        請選擇付款方式:
        <select>
            <option>三星</option>
            <option>蘋果</option>
            <option>oppo</option>
        </select>
        <button></button>
    </div>
</template>

<script>
import cartService from "../services/cart.service"
import UserService from '../services/user.service'
import HelloWorldService from "../services/helloworld.service"

export default {
    data () {
        return {
            cartArray: [],
            ProductArray: [],
            quantityArray:[],
        }
    },
    methods: {
        UpdateShoppingCart(memberId, productId, quantity) {
            UserService.updateShoppingCart(memberId, productId, quantity).then(data =>{
                if((data.result.status=="購物車資料更新成功。")){
                    alert("購物車資料更新成功。");
                    this.$router.go(0);
                }
                if((data.result.status =="添加商品失敗")){
                    alert(data.result.err)
                }
            })
        },
        add(index){
            this.$set(this.qauntityArray, index, this.qauntityArray[index]++);
        },
        del(index){
            this.$set(this.qauntityArray, index, this.qauntityArray[index]--);
        },
    },
    watch: {
        
    },
    mounted() {
        cartService.getCart().then(data => {
            this.cartArray = data.result;
            this.cartArray.forEach(item =>
                this.quantityArray.push(item.quantity)
            )
        }).catch((error) => {
            console.log("err",error);
        });
        HelloWorldService.getProduct().then(data => {
            this.productArray = data.result;
        }).catch((error) => {
            console.log("err",error);
        });
    },
    name: 'app',
};
</script>

<style scoped>
    .py-custom{
        padding-top:55px;
        padding-bottom:55px;
    }

    .border-custom{
        border-style: solid;
        border-color: #FFC0AC;
    }

    button{
        width:  100px;
        height:  50px;
        color: #DDA08A;
        background-color: transparent;
        border-color: #FFC0AC;
        border-radius: 10px;
        font-size: 20px;
    }

    .left-align{
        text-align: right;
    }
</style>
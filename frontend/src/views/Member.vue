<template>
    <div class="row justify-content-center">
        <button @click="showSelect=0"><span>會員資料</span></button>
        <button @click="showSelect=1"><span>修改密碼</span></button>
        <button @click="showSelect=2"><span>管理訂單</span></button>
        <button class="logoutButton" @click="logout()"><span>登出</span></button>
    </div>
    <div class="row justify-content-center" v-if="showSelect === 0">
        
    </div>
    <div class="row justify-content-center" v-else-if="showSelect === 1">
        <h1 style="text-align: center">修改會員密碼</h1>
        <div class="row justify-content-center">
            <div>
                <div class="row justify-content-center">
                    <div class="col-3 my-custom">
                        <h2 style="text-align: center">OldPassword</h2>
                    </div>
                    <div class="col-3 my-custom">
                        <form class="d-flex" prop="oldpassword">
                            <input class="form-control me-2" v-model="dynamicValidateForm.OP" >
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div class="row justify-content-center">
                    <div class="col-3 my-custom">
                        <h2 style="text-align: center">NewPassword</h2>
                    </div>
                    <div class="col-3 my-custom">
                        <form class="d-flex" prop="newpassword">
                            <input class="form-control me-2" v-model="ruleForm.NP" >
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-6 row justify-content-center">
                <button class="logoutButton" @click="ChangePassword(dynamicValidateForm.OP,ruleForm.NP)" >
                    <span>修改密碼</span>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
    import registerController from '../components/register.controller'  

    export default {
        name: 'memberInfo',
        components: {

        },
        methods: registerController,
        data() {
            return {
                ruleForm: {
                    NP:  '',
                },
                dynamicValidateForm: {
                    OP:  '',
                },
                showSelect: 0,
            };
        },
        mounted() {
            
        },
    };
    
</script>
<style scoped>
.container{
    margin-top: 100px;
    border-style: solid;
    border-color: #FFC0AC;
}
.col-3{
    color:#FFCBAC;
}
.my-custom{
    margin-top:40px;
    margin-bottom:20px;
}

button{
    width:  200px;
    height:  100px;
    color: #DDA08A;
    background-color: transparent;
    border-color: #FFC0AC;
    border-radius: 10px;
    font-size: 30px;
}
</style>
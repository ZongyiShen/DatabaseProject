<template>
    <div class="row justify-content-center">
        <h1 style="text-align: center">修改會員資料</h1>
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
        <p></p>
        <div class="col-6 row justify-content-center">
            <button class="logoutButton" @click="logout()">
                <span>登出</span>
            </button>
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
            };
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
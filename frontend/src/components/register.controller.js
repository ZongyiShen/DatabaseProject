import registerService from '../services/user.service'

export default {
    register,
    changeShow,
    ChangePassword,
    logout
}

function register(email, account, phone, password, name){
    registerService.register(email, account, phone, password, name).then(data =>{
        localStorage.setItem("email",data.result.email);
        if(data.result.status == "註冊成功。"){
            this.$router.push({path: "/identify"});
        }
        if(data.result.status == "註冊失敗。"){
            this.$router.push({path: "/index"});
        }
            
    })
}

function changeShow(isShow){
    isShow = !isShow;
    console.log(isShow);
    return isShow;
}

function ChangePassword(oldpassword, password){
    registerService.ChangePassword(oldpassword, password).then(data =>{
        if((data.result.status=="會員資料更新成功。")){
            alert("會員資料更新成功。");
            this.$router.push({path: "/index"});
        }
        if((data.result.status =="登入失敗。")){
            localStorage.removeItem("token");
            localStorage.setItem("isLogin",0);
            alert("登入失敗");
            this.$router.push({path: "/identify"});
        }
    })
}
function logout(){
    if(confirm("確定登出?")){
        localStorage.removeItem("token");
        localStorage.setItem("isLogin", 0);
        this.$router.push({path: "/identify"});
    }
}

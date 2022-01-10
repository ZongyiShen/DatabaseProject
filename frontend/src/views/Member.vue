<template>
    <h1>會員啦幹你娘</h1>
    <button class="logoutButton" @click="logout()">
        <span>登出</span>
    </button>
</template>

<script>
    export default {
        name: 'memberInfo',
        components: {

        },
        methods: {
            logout(){
                if(confirm("確定登出?")){
                    localStorage.removeItem("token");
                    localStorage.setItem("isLogin", 0);
                    this.$router.push({path: "/identify"});
                }
            }
        },
    }
</script>
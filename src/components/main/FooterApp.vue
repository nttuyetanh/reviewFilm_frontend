<template>
    <footer class="ht-footer">
        <div class="container">
            <div class="flex-parent-ft">
                <div class="flex-child-ft item1">
                    <a href="index-2.html"><img class="logo" src="@/assets/images/logo1.png" alt=""></a>
                    <p>17T, Nguyễn Văn Linh, Hưng Lợi<br>
                        Ninh Kiều, Cần Thơ
                    </p>
                    <p>Liên Hệ: <a href="#">(+84) 939168575</a></p>
                </div>
                <div class="flex-child-ft item2">
                    <h4>Thông Tin</h4>
                    <ul>
                        <li><a @click="handlerClickAboutUs($event)">Về Chúng Tôi</a></li>
                        <li><a href="#">Liên Hệ Chúng Tôi</a></li>
                        <li><a href="#">Hỗ Trợ</a></li>
                    </ul>
                </div>
                <div class="flex-child-ft item5">
                    <h4>Bảng Tin</h4>
                    <p>Theo dõi chúng tôi để nhận thông tin mới nhất.</p>
                    <form action="#">
                        <input type="text" placeholder="Nhập email của bạn...">
                    </form>
                    <a href="#" class="btn">Theo dõi ngay<i class="ion-ios-arrow-forward"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapActions } from 'vuex';
import store from '@/store'
export default {
    name: "FooterApp",
    methods: {
        ...mapActions(['get_list_movie']),
        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        handlerClickLogout(){
            this.delete_cookie('token')
            store.commit('UPDATE_AUTH',false)
        },
        handlerClickHome(){
            this.$router.push({name: 'home'})
        },  
        handlerClickRegister(){
            this.$router.push({name:'register'})
        },
        handlertClickLogin(){
            this.$router.push({name: 'login'})
        },
        handlerPostMovie(){
            this.$router.push({name: 'postmovie'})
        },
        handlerClickTrailer(e){
            e.preventDefault()
            this.$router.push({name: 'trailer'})
        },
        handlerClickAboutUs(e){
            e.preventDefault()
            this.$router.push({name: 'aboutus'})
        },
    },
    computed: {
        isAuthentication(){
            return store.state.isAuthentication
        }
    },
    created(){
        this.get_list_movie()
        const token = this.getCookie('token')
        if(token){
            store.commit('UPDATE_AUTH',true)
        }   
    }
}
</script>

<style>

</style>
<template>
    <div class="">
        <div class="hero common-hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="hero-ct">
                            <h1>Về Chúng Tôi</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-single">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="flex-wrap-movielist mv-grid-fw">
                            <div class="col-md-6 col-sm-6 col-xs-6">
                                <img src="http://localhost:3000/images/poster3.jpg" width="350px" height="350px" style="margin-left: 100px;">
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6" style="margin-top:50px;">
                                <h1>BLOCK BUSTER</h1>
                                <p>Bạn muốn xem phim để giải tỏa căng thẳng? Nhưng việc lựa chọn phim để xem khiến bạn càng stress hơn?</p>
                                <p>Hãy đến với website Block Buster của chúng tôi, bạn có thể xem trailer, nội dung sơ lược về phim để chọn ra bộ phim muốn xem một cách dễ dàng nhất. Block Buster chắc chắn đem đến bạn những bộ phim mới nhất và có đánh giá cao nhất, bạn có thể lựa chọn những bộ phim tốt nhất, giúp bạn thư giãn sau giờ làm việc, học tập mệt mỏi.</p>
                                <br>
                                <p>Mọi thắc mắc có thể liên hệ với chúng tôi qua:</p>
                                <p>Email: blockbuster@gmail.com</p>
                                <p>Tel: (+84) 939168575</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import store from '@/store'
import { mapActions } from 'vuex'
import axios from 'axios'
export default{
    name: "HomePage",
    data(){
        return {
            list_category: [],
            search_category: "",
            search_query: ""
        }
    },
    computed: {
        list_movie(){
            return store.state.list_movie
        }
    },
    methods: {
        ...mapActions(['get_list_movie_by_category','get_list_movie','get_list_movie_search']),
        handlerSearchCategory(){
            this.get_list_movie_by_category(this.search_category)
            this.search_category = ""
        },
        handlerClickAllMovie(){
            this.get_list_movie()
        },
        handlerClickMovieDetail(id){
            this.$router.push({name: 'moviedetail',params: {id: id}})
        },
        handlerClickSearch(e){
            e.preventDefault()
           this.get_list_movie_search(this.search_query)
        }
    },
    created(){
        axios.get('http://localhost:3000/api/category')
            .then(response=>{
                this.list_category = response.data
            })
            .catch(()=>{
                console.log('Loi render category')
            })
    }
}
</script>

<style scoped>
h1{
    color: yellow;
    margin-bottom: 50px;
    margin-top: 20px;
}

h5 {
    font-family:Arial, Helvetica, sans-serif;
    color: white;
    line-height: 30px;
    margin-right: 100px;
    text-align:justify;
}

</style>
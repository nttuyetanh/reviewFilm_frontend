<template>
    <div class="">
        <div class="hero common-hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="hero-ct">
                            <h1>Trang Chủ</h1>
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

                            <div  v-for="(category) in list_category" :key="category._id" @click="handlerClickHomePageByCategory(category.category)" class="movie-item-style-2 movie-item-style-1" style="margin-left: 80px;">
                                <img :src="category.image" alt="">
                                <div class="mv-item-infor">
                                    <h6><a href="#">{{ category.category }}</a></h6>
                                </div>
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
            search_category: "",
            search_query: ""
        }
    },
    computed: {
        list_movie(){
            return store.state.list_movie
        },
        list_category(){
            return store.state.list_category
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
        },
        handlerClickHomePageByCategory(category){
            this.get_list_movie_by_category(category)
            this.$router.push({name:'trailer'})
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
.input_search{
    background-color: #020d18;
    color: white
}


.btn_search{
    border: none;
    background-color: #dd003f;
    padding: 10px;
    color: white;
    border-radius: 5%;
    margin-top: 10px;
}
</style>
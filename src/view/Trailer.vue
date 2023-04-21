<template>
    <div class="">
        <div class="hero common-hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="hero-ct">
                            <h1>Review Phim</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-single">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div style="margin-bottom: 12px;">
                            <form><input class="input_search" v-model="search_query" type="text" placeholder="Từ khóa"><button class="btn_search" @click="handlerClickSearch($event)">Tìm Kiếm</button></form>
                        </div>
                        <div class="row" style="padding-right: 0px;" >
                            <div class="col-10"></div>
                        </div>
                        <div class="topbar-filter fw">
                            <!-- <p>Found <span>1,608 movies</span> in total</p> -->

                            <span @click="handlerClickAllMovie()" style="color: white; cursor:pointer;">Tất Cả</span>
                            <!-- <label>Sắp Xếp Theo:</label> -->
                            <select @change="handlerSearchCategory()" v-model="search_category">
                                <option value="">Thể loại</option>
                                <option v-for="category in list_category" :key="category._id" :value="category.category">{{ category.category }}</option>
                            </select>
                        </div>
                        <div class="flex-wrap-movielist mv-grid-fw">
                            <div v-for="movie in list_movie" :key="movie._id" class="movie-item-style-2 movie-item-style-1">
                                <img :src="'http://localhost:3000/images/'+movie.image" alt="" style="width: 170px; height: 251px;">
                                <div class="hvr-inner">
                                    <a @click="handlerClickMovieDetail(movie._id)"> Đọc thêm <i class="ion-android-arrow-dropright"></i> </a>
                                </div>
                                <div class="mv-item-infor" style="">
                                    <h6><a href="#">{{ movie.title }}</a></h6>
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
<template>
    <div class="">  
        <div class="hero sr-single-hero sr-single">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    </div>
                </div>
            </div>
        </div>
        <div class="page-single movie-single movie_single">
            <div class="container">
                <div class="row ipad-width2">
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div class="movie-img sticky-sb">
                            <img v-if="movie.image" :src="'http://localhost:3000/images/'+movie.image" alt="">
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="movie-single-ct main-content">
                            <h1 style="color: yellow; margin-bottom: 30px; text-transform: uppercase; font-size: 40px; font-family: 'Dosis', sans-serif;">{{ movie.title }}</h1>
                            <div class="movie-rate">
                            </div>
                            <div class="movie-tabs">
                                <h3 style="color: white; margin-bottom: 30px; font-family: 'Nunito', sans-serif;">Thể Loại: {{ movie.category }}</h3>
                                <div class="tabs">
                                    <ul class="tab-links tabs-mv tabs-series">
                                        <li class="active"><a href="#overview">Tổng Quan</a></li>         
                                    </ul>
                                    <div class="tab-content">
                                        <div id="overview" class="tab active">
                                            <div class="row">
                                                <div class="col-md-10 col-sm-12 col-xs-12" style="text-align: justify;">
                                                    <p>{{ movie.description }}</p>
  
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12" style="width: 1100px; height: 1100px;">
                    <div class="hs-responsive-embed-youtube">
                        <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+movie.link_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "MovieDetail",
    data(){
        return {
            movie: {
                title: "",
                image: "",
                category: "",
                link_url: "",
                description:""
            }
        }
    },
    created(){
        const id = this.$route.params.id
        if(id){
            axios.get('http://localhost:3000/api/movie/'+id)
                .then(response=>{
                    this.movie = response.data
                    console.log(this.movie)
                })
                .catch(()=>{
                    console.log('Loi Render movie detail')
                })
        }
    }
}
</script>

<style scoped>
.hs-responsive-embed-youtube {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    padding-top: 25px;
    }
    .hs-responsive-embed-youtube iframe {
    position: absolute;
    width: 100%!important;
    height: 100%!important;
    }
</style>
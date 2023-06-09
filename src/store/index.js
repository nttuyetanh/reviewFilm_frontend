import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        list_movie: [],
        isAuthentication: false,
        list_category: [],
    }
  },
  mutations: {
    GET_LIST_MOVIE(state, data){
        state.list_movie = data
    },
    UPDATE_AUTH(state, isAuth){
      state.isAuthentication = isAuth
    },
    GET_LIST_CATEGORY(state,data){
      state.list_category = data
    }
  },
  actions: {
    async get_list_movie({commit}){
        try{
            const response = await axios.get('http://localhost:3000/api/movie')
            commit('GET_LIST_MOVIE',response.data)
        }catch(error){
            console.log("Loi action get_list_movie")
        }
    },
    async get_list_movie_by_category({commit},category){
      try{
          const response = await axios.get('http://localhost:3000/api/movie?category='+category)
          commit('GET_LIST_MOVIE',response.data)
      }catch(error){
          console.log("Loi action get_list_movie")
      }
    },
    async get_list_movie_search({commit},search){
      try{
        const response = await axios.get('http://localhost:3000/api/movie?search='+search)
        commit('GET_LIST_MOVIE',response.data)
      }catch(error){
        console.log("Loi action get_list_movie")
      }
    },
    async get_list_category({commit}){
      try{
        const response = await axios.get('http://localhost:3000/api/category')
        commit('GET_LIST_CATEGORY',response.data)
      }catch(error){
        console.log('Loi action get_list_category')
      }
    }
  }
})

export default store
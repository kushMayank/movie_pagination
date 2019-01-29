import xmlhttp from '../../apicaller'

export function callfetchPopularMovieList(page,cb){
    console.log("page ",page)
    xmlhttp(`https://api.themoviedb.org/3/discover/movie?api_key=8b6244b21db3f5c31e6cdd3b5bada209&sort_by=popularity.desc&page=${page}`,(response)=>{
        cb(response)
    })
}


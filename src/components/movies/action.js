import {callfetchPopularMovieList} from './service.js'
import {SET_LOADING} from './constant'

function setFetchPending(isLoading){
    return{
        type:'SET_LOADING',
        isLoading
    }
}

function setMoviesData(data){
    return{
        type:'SET_MOVIES_DATA',
        data
    }
}


export function fetchPopularMovieList(page){
    return dispatch =>{
            dispatch(setFetchPending(true));
            console.log("page in action",page)
            callfetchPopularMovieList(page,(response)=>{
                if(response){
                    dispatch(setFetchPending(false));
                    //console.log("response",page,response)
                    dispatch(setMoviesData(JSON.parse(response)))
                }
                else{
                    dispatch(setFetchPending(false))
                }
            })
    }
}
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


export function fetchPopularMovieList(){
    return dispatch =>{
            dispatch(setFetchPending(true));
            callfetchPopularMovieList((response)=>{
                if(response){
                    dispatch(setFetchPending(false));
                    console.log("response",response)
                    dispatch(setMoviesData(JSON.parse(response)))
                }
                else{
                    dispatch(setFetchPending(false))
                }
            })
    }
}
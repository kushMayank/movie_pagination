const initialState={    
    isLoading:false,
    movieList:[]
}
const movieReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_LOADING':
        return {
            ...state,
            isLoading:action.isLoading

        }
        
        case 'SET_MOVIES_DATA':
        return Object.assign({}, state,{
            movieList:action.data.results
        })
        
        
        default:
        return state
    }
}

export default movieReducer
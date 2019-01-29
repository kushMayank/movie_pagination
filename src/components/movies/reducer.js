const initialState={    
    isLoading:false,
    movieList:[],
    currentPage:"",
    totalResults:"",
    totalPages:""
}
const movieReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_LOADING':
        return {
            ...state,
            isLoading:action.isLoading

        }
        
        case 'SET_MOVIES_DATA':
        return {
            ...state,
            movieList: state.movieList.concat(action.data.results),
            currentPage:action.data.page,
            totalResults:action.data.total_results,
            totalPages:action.data.total_pages
        }
        
        default:
        return state
    }
}

// function movieReducer(state = initialState,action){
//     switch(action.type){
//         case 'SET_LOADING':
//         return {
//             ...state,
//             isLoading:action.isLoading

//         }
        
//         case 'SET_MOVIES_DATA':
//         return Object.assign({}, state,{
//             movieList:action.data.results
//         })
        
        
//         default:
//         return state
//     }
// }

export default movieReducer
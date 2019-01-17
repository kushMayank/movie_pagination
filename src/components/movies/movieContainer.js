import React from 'react';
import {connect} from 'react-redux'
import Movies from './movies.js'
import {fetchPopularMovieList} from './action'


class MovieContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:false
        }

    }
    componentDidMount(){
        this.props.fetchPopularMovieList();
    }
    render(){
        var movieList= this.props.movies ;
        console.log("mpovie list",movieList)
        return(
            <div>
                {movieList.map((props,i)=>   
                    <Movies key={i} {...props}/>)}
                    {/* <Movies/> */}
            </div>            
            
        )
    }
}

const mapStateToProps= (state)=>{
    return(
        {
            movies:state.movieReducer.movieList,
            isLoading:state.movieReducer.isLoading
        }
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchPopularMovieList: ()=>(dispatch(fetchPopularMovieList()))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);
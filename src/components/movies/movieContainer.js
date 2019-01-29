import React from 'react';
import {connect} from 'react-redux'
import Movies from './movies.js'
import {fetchPopularMovieList} from './action'
import './movies.css'


class MovieContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:false,
            page:1
        }

        // this.count=1

    }
    componentDidMount(){
        this.props.fetchPopularMovieList(this.state.page);
    }

    handleNext(){
        console.log("here in the handleNext",this.state.page)
        // const count= this.count+1
        // // count=count+1
        this.setState({
            page: this.state.page+1
        })
        this.props.fetchPopularMovieList(this.state.page);

        
    }

    render(){
        var movieList= this.props.movies ;
        console.log("mpovie list",movieList)
        return(
            <div className='movieContainer'>
             <button onClick={e=>this.handleNext(e)}>next</button>
             <div className="movieInlineFlex">
             {movieList.map((props,i)=>   
                    <Movies key={i} {...props}/>)}
                    {/* <Movies/> */}
             </div>
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
        fetchPopularMovieList: (page)=>(dispatch(fetchPopularMovieList(page)))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);
import React from 'react';
import { connect } from 'react-redux'

import Pagination from './pagination'

class PaginationContainer extends React.Component{
    constructor(){
        super()
    }
    handleClick(){
        console.log("handleClick");
    }
    render(){
        return(
            <div>
                <Pagination onclick= {this.handleClick}/>
            </div>
        )
    }
}

const mapStateToProps = ()=>{

}
const mapDispatchToProps = ()=>{

}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationContainer)

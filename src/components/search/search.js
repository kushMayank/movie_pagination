import React from 'react';
import { Button,Label, Input } from 'reactstrap';
import './search.css'

const Search = ()=>{
    return (
    <div className="search">       
          <Label>Search</Label>
          <Input type="search" name="search" id="search" placeholder="Enter the Movie Name" />
          <Button>Submit</Button>
    </div> 
    )
}

export default Search;
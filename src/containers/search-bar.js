import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor (props){
        super(props);
        

        this.state = {term: ''};

        //need to bind this
        this.onInputChange = this.onInputChange.bind(this);

    }


    onInputChange (event){
        this.setState({ term: event.target.vale});

    }

    onFormSubmit (event){
        event.preventDefault();
        //search data
    }

    render (){
        return(
        <form 
        onSubmit={this.onFormSubmit} 
        className="input-group">
            <input 
            placeholder="more pictures"
            className = "form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            
            <span className="input-group-btn">
            <button 
            type="submit" 
            className="btn btn-secondary">submit</button>
            </span>
        </form>
        );        
    }
}
import React, {Component} from 'react';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <form onSubmit={ this.props.userInput }>
                <label forhtml="search">Character Search:</label>
                <input name="search" type="search" id="search" placeholder="EX: Han Solo"/>
                <input name="search-submit" type="submit" value="GO!"/>
            </form>
        )
    }
}

export default Search;
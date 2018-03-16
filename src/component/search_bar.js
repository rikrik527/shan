var obj = require('../app/getall');
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    render() {
        return <div >
            <
            input onChange = {
                (e) => this.setState({ term: e.target.value })
            }
        / >
        value of the input: { this.state.term } <
            /div>

    }

    onInputChange(e) {
        console.log(e.target.value);
    }
}

export default SearchBar;
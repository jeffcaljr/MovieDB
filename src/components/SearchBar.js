import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchMovies} from "../actions/MovieList";

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            searchQuery: ""
        }

        this.searchSubmit = this.searchSubmit.bind(this)
        this.searchQueryChanged = this.searchQueryChanged.bind(this)
    }

    searchSubmit = e => {

        e.preventDefault()

        //trim extraneous spaces
        let query = this.state.searchQuery;
        query = query.trim();

        //separate query terms by comma to parse individually
        //be sure to, handle cases where query items seperated by comma AND space
        query = query.split(", ").join(",")
        let queryItems = query.split(",")

        //remove spaces from each individual query term
        let parsedTerms = queryItems.map((queryItem) => {
            queryItem.trim();
            return queryItem.replace(" ", "%20")
        })

        //join all parsed terms into new query string
        let parsedQuery = parsedTerms.join(",")

        this.props.search(parsedQuery)

    }

    searchQueryChanged = e => {
        this.setState({searchQuery: e.target.value})
    }


    render(){
        return (
            <div className="search-bar-container">
                <form
                    className="search-form"
                    onSubmit={(e) => this.searchSubmit(e)}>
                    <div className="input-group search-form">
                        <input
                            type="text"
                            className="searchbar form-control p-1 typeface-sans-serif"
                            placeholder="Separate terms with `,`"
                            value={this.state.searchQuery}
                            onChange={(e) => this.searchQueryChanged(e)}/>
                        <span className="input-group-btn">
                    <button
                        className={"btn btn-secondary borderless p-2" + " " + ( this.state.searchQuery == "" ? " disabled " : "")}
                        type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: queryString => {
            dispatch(searchMovies(queryString))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
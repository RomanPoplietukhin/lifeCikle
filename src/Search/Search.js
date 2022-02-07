import { Component } from "react";
import propTypes from 'prop-types';

export class Search extends Component {
    render() {
        const { onSubmit, onSearch, mainState: { searchField } } = this.props
        console.log(this.props);
        return(
            <div className="searching-field">
                <form onSubmit={ onSubmit }>
                    <input 
                        type="text" 
                        value={ searchField }
                        onChange={ onSearch }
                    />
                    <button type="submit"> Search </button>
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    onSearch: propTypes.func,
    onSubmit: propTypes.func,
    searchField: propTypes.string,
}
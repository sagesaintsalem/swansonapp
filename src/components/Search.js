import {useState} from 'react';
import './search.css';

const Search = () => {

    const [searchResults, setsearchResults] = useState([]);
    const [term, setTerm] = useState("");
    
    

    const getSearchResults = function(event){
        event.preventDefault();
        fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${term}`)
        .then(res => res.json())
        .then(quote => setsearchResults(quote))
        console.log(searchResults)
    }


    const handleSearch = function(event){
        // event.preventDefault();
        const term = event.target.value
        setTerm(term);
    }

    // const listResults = [];

    // const makeListResults = function({searchResults}){
    //     listResults = searchResults.map();
    //     return listResults
    // }

    const listSearchResults = searchResults.map(searchResult => <li>{searchResult}</li>);

    return (
        <div className='search-area'>
            <form onSubmit={getSearchResults}>
                <input type="text" placeholder="Search" onChange={handleSearch} value={term}/>
                <button type='submit'>Go!</button>
            </form>
            <ul className='search-results'>
                {listSearchResults}
            </ul>
        </div>
    )

}

export default Search;
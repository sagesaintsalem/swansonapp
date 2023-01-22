import React, {useState, useEffect} from 'react';
import Search from '../components/Search';
import './container.css';

const Container = () => {
    const [aQuote, setAQuote] = useState([]);
    
    useEffect(() => {
        getQuotes();
    }, [])

    const getQuotes = function(){
        fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/')
        .then(res => res.json())
        .then(quote => setAQuote(quote))
        
    }

    return (
        <div className='main-container'>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftgram.ru%2Fwiki%2Fstickers%2Fimg%2Fronswanson%2Fpng%2F6.png&f=1&nofb=1&ipt=900dd6cb5e5e27fef281d9819b86791df31a257281c615909da77f81d147e1e5&ipo=images'></img>
            <h2 className='wisdom'> "{aQuote}" </h2>
        <button onClick={getQuotes}>New Quote</button>

            <div className='search-component'>
                <Search />
            </div>
        </div>
    )



}

export default Container;
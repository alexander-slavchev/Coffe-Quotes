import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component{
    state = { advice: '' };

    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
             .then((responce) => {
                const{ advice } = responce.data.slip;
                this.setState({advice});
             })
             .catch((error) => {
                console.log(error);
             });
    }

    render(){
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button-54" onClick={this.fetchQuote}>
                        <span>Give me Quote</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;
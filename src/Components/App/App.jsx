import React from 'react'
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Header from '../Header/Header'
import SearchBox from '../Search box/SearchBox';
import './App.css'

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
       this.setState({
           headerExpanded: !inputText,
           suggestedNames: inputText ? name(inputText) : [], 
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App
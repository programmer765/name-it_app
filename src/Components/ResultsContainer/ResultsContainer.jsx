import React from 'react';
import NameCard from './../NameCard/NameCard';
import './ResultsContainer.css'
const ResultsContainer = ({suggestedNames}) => {
    const suggestedNamesList = suggestedNames.map(( eachName ) => {
        return <NameCard key={eachName} eachName={eachName} />
    });
    return (
        <div className="results-container">{suggestedNamesList}
        </div>
    );
};

export default ResultsContainer;
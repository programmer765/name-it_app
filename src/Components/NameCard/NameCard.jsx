import React from 'react'
import './NameCard.css'

const nameCheap = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B"

const NameCard = ({ eachName }) => {
    return (
        <a 
            target="_blank"
            referer="noreferer"
            className="card-link" 
            href={`${nameCheap}${eachName}`}
        >
            <div className="result-name-card">
                <p className="result-name">{eachName}</p>
            </div>
        </a>
    );
};

export default NameCard;
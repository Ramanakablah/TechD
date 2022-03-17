import React from 'react';
import "./Card.scss"

const card = ({ type ,status }) => {
    return <div>
        <h2 className="blockheading">{type}</h2>
        <div className="cardcontainer">
            <div className="card">
                <div className="top">
                    Event Name
                </div>
                <div className="date">
                    <h4>15</h4>
                    <h6>NOV</h6>
                </div>
                <div className="bottomtext">{status}</div>
            </div>
            <div className="card">
                <div className="top"> Event Name</div>
                <div className="date">
                    <h4>15</h4>
                    <h6>NOV</h6>
                </div>
                <div className="bottomtext">{status}</div>
            </div>
            <div className="card">
                <div className="top"> Event Name</div>
                <div className="date">
                    <h4>15</h4>
                    <h6>NOV</h6>
                </div>
                <div className="bottomtext">{status}</div>
            </div>
            <div className="card">
                <div className="top"> Event Name</div>
                <div className="date">
                    <h4>15</h4>
                    <h6>NOV</h6>
                </div>
                <div className="bottomtext">{status}</div>
            </div>
        </div>
    </div>;
};

export default card;

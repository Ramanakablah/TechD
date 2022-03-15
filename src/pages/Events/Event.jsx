import React from 'react';
import Card from "../../components/Card/Card";
import Footer from "../../components/footer/Footer"
import "./Event.scss"


const Events = () => {
    return <div>

        <div className="e-searchbar">
            <input type="text" placeholder=" Search..." />
            <button className='e-search'>Search</button>
        </div>

        <div className="e-navbar">
            <button>Featured</button>
            <button>Featured</button>
            <button>Featured</button>
            <button className="activebtn">Featured</button>
            <button>Featured</button>
            <button>Featured</button>
        </div>

        <div className="part1">
            <Card type={"Featured Event"} />
        </div>

        <div className="part2">
            <Card type={"Upcoming Event"} />
        </div>

        <div className="part3">
            <Card type={"Past Event"} />
        </div>
        <Footer />

    </div>;
};

export default Events;

// import React from 'react';
import "./Article.scss";
import Articlebox from "../../components/Articlebox/Articlebox";
import Footer from "../../components/footer/Footer"

const Article = () => {
    return <div>
        <center>
            <div className="e-searchbar">
                <input type="text" placeholder=" Search..." />
                <button className='e-search'>Search</button>
            </div>
        </center>
        <div className="First-box ">
            <div className="a-heading">
                <h1 id="trend">Trending</h1>
            </div>
            <Articlebox />
        </div>
        <div className="First-box ">
            <div className="a-heading">
                <h1>Most Popular</h1>
            </div>
            <Articlebox />
        </div>

        <div className="load-btn">
            <button> Load More </button>
        </div>
        <Footer />
    </div>;

};

export default Article;

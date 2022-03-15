import "./works.scss";

export default function Works() {
    return (
        <div className="works">
            <h1>How It Works ?</h1>
            <div className="w-container">
                <div className="work-left">
                    <div className="w-items">
                        <div className="w-serial">1</div>
                        <div className="image-holder"><img src="assets/login.png" alt="" /></div>
                        <div className="desc1">Login</div>
                    </div>
                    <div className="w-items">
                        <div className="w-serial">2</div>
                        <div className="image-holder"><img src="assets/jobUpdates.jpeg" alt="" /></div>
                        <div className="desc1">Get information about job and updates</div>
                    </div>
                    <div className="w-items">
                        <div className="w-serial">3</div>
                        <div className="image-holder"><img src="assets/apply.jpeg" alt="" /></div>
                        <div className="desc1">Apply</div>
                    </div>
                    <div className="w-items">
                        <div className="w-serial">4</div>
                        <div className="image-holder"><img src="assets/bestShot.jpeg" alt="" /></div>
                        <div className="desc1">Give your best shot</div>
                    </div>
                </div>
                <div className="work-right">
                   
                    <div className="w-top">
                    <button className="w-button"> Join the community</button>
                    <button className="w-button">Discuss and Learn</button>
                    <button className="w-button">Upgrade youself through resources</button>
                    <button className="w-button">Attend Events</button>
                    </div>
                    <div className="w-bottom">
                        <img src="assets/community.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

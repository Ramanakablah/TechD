import Footer from "../../components/footer/Footer";
import "./ambassdor.scss";

export default function Ambassdor() {
    return (
        <div className="ambassdor">
           
            <div className="sections">
                <div className="front">
                    <div className="left">
                      <span>Join Us Today!</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod explicabo mollitia sequi,
                           optio eligendi nostrum rerum saepe debitis cumque sit reiciendis quasi suscipit corrupti 
                           reprehenderit voluptate labore cum voluptates!
                      </p>
                      <button>Join Us</button>
                    </div>
                    <div className="right">
                        <img src="assets/Join us today img.png" alt="" />
                    </div>
                </div>
                <div className="amb-container">
                    <div className="left">
                        <img src="assets/image.png" alt="" />
                    </div>
                    <div className="right">
                        <div className="wrapper">
                        <h3>6-month curated internship program that will prepare you for your successful corporate journey ahead.</h3>
                        <ul>
                            <li>#1 Campus Programme by Analytics India Magazine</li>
                            <li>4000+ ninja Enterpreneurs community </li>
                            <li>Presence in 1000+ campuses.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="container2">
                <div className="wrapper">
                <h1>Perks of a Campus Captain</h1>
                <span>Some of the benefits that you will enjoy exclusively as Campus Captain</span>
                </div>
                <div className="cardContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
        <div className="container3">
                <div className="wrapper">
                <h1>Application Procedure</h1>
                <span>Some of the benefits that you will enjoy exclusively as Campus Captain</span>
                </div>
                <div className="cardContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
        <div className="container4">
            <div className="wrapper">
                <span>What We Expect From You</span>
                <ul>
                    <li>Participate in cool tasks each week, win amazing rewards and have fun while doing so.</li>
                    <li>Be the brand ambassdor for Coding Nonjas in your campus and the single POC between us and your college.</li>
                    <li>Dole out exclusive discounts and get cool incentives on CN code purchases through referrals.</li>
                    <li>Introduce out online learning platform CodeStudio to students to help them prepare for and ace interviews like a pro.</li>
                    <li>Host Webinars/Hackathons, organise fresh,en inductions and get sponsorship for competitions in your college and get rewarded by us for the same.</li>
                    <li>Help us reach out to communities/ clubs/ faculties in your college and aid in community learning.</li>
                </ul>
            </div>
        </div>
        <div className="container5">
            <div className="wrapper">
                <span>Many of our students are placed in companies across India</span>
                <div className="logoContainer">
                    <img src="assets/walmart.png" alt="" />
                    <img src="assets/walmart.png" alt="" />
                    <img src="assets/walmart.png" alt="" />
                    <img src="assets/walmart.png" alt="" />
                    <img src="assets/walmart.png" alt="" />
                    <img src="assets/walmart.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container6">
            <span>Meet Our Ambassadors</span>
            <div className="amb-cardContainer">
                <div className="card">
                    <div className="top">
                        <img src="assets/person.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <h1>Full Name</h1>
                        <h4>College Name</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/person.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <h1>Full Name</h1>
                        <h4>College Name</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/person.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <h1>Full Name</h1>
                        <h4>College Name</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/person.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <h1>Full Name</h1>
                        <h4>College Name</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/person.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <h1>Full Name</h1>
                        <h4>College Name</h4>
                    </div>
                </div>
                </div>
                <h3>Get Featured here by becoming a Ninja Enterpreneurand excel in your tasks</h3>
                <button>Join Us</button>
        </div>
            </div>
            <Footer/>
        </div>
    )
}

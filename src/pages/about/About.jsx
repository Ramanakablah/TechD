import Footer from "../../components/footer/Footer";
import { LinkedIn } from "@material-ui/icons";
import "./about.scss";

export default function About() {
    return (
        <div className="a-about">

            <div className="a-sections">
                <span>About Us</span>
                <img src="assets/About us img.jpg" alt="" />
                <div className="a-container">
                    <div className="a-box">
                        <span>Who we are</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta inventore voluptates nesciunt numquam recusandae itaque? Officia debitis aliquid aut minus dolore dicta impedit quas, rerum vero beatae asperiores nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus facilis esse quos qui molestias numquam, rerum sequi impedit illum saepe, exercitationem perspiciatis animi incidunt quaerat dolores sed maxime officia.</p>
                    </div>
                </div>
                <div className="a-achieve-wrapper">
                    <div className="a-contentWrapper">
                        <span className="a-header">What do we want to achieve ?</span>
                        <p className="a-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt bello, dolorum saepe quod distinctio rerum magnam provident deleniti natus? Quidem in sed perspiciatis voluptatem dolores deserunt ratione reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque laboriosam eius tempora cumque quisquam nemo, porro excepturi autem! Soluta atque velit optio recusandae enim doloribus ratione porro placeat natus!</p>
                    </div>
                    {/* <div className="a-belt"></div> */}
                    <div className="a-cardContainer">
                        <div className="a-achieve-card">
                            <span>2021</span>
                            <p>Founding Year</p>
                        </div>
                        <div className="a-achieve-card">
                            <span>10000+</span>
                            <p>Happy Users</p>
                        </div>
                    </div>
                </div>
                <div className="a-values">
                    <span>Our Values</span>
                    <div className="a-cards">
                        <div className="a-cardWrapper">
                            <div className="a-wrapper">
                                <img src="assets/clock.png" alt="" />
                            </div>
                            <div className="a-value-card">
                                <span>Do it yesterday</span>
                                <p>
                                    Odio eos, nemo ea laboriosam facere culpa voluptates quisquam labore, totam soluta ducimus
                                    veritatis neque accusantium voluptate dignissimos at adipisci rem inventore.</p>
                            </div>
                        </div>
                        <div className="a-cardWrapper">
                            <div className="a-wrapper">
                                <img src="assets/star.png" alt="" />
                            </div>
                            <div className="a-value-card">
                                <span>Excellent</span>
                                <p>
                                    Odio eos, nemo ea laboriosam facere culpa voluptates quisquam labore, totam soluta ducimus
                                    veritatis neque accusantium voluptate dignissimos at adipisci rem inventore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="a-cards">
                        <div className="a-cardWrapper">
                            <div className="a-wrapper">
                                <img src="assets/heart.png" alt="" />
                            </div>
                            <div className="a-value-card">
                                <span>Passionate</span>
                                <p>
                                    Odio eos, nemo ea laboriosam facere culpa voluptates quisquam labore, totam soluta ducimus
                                    veritatis neque accusantium voluptate dignissimos at adipisci rem inventore.</p>
                            </div>
                        </div>
                        <div className="a-cardWrapper">
                            <div className="a-wrapper">
                                <img src="assets/open-book.png" alt="" />
                            </div>
                            <div className="a-value-card">
                                <span>Integrity</span>
                                <p>
                                    Odio eos, nemo ea laboriosam facere culpa voluptates quisquam labore, totam soluta ducimus
                                    veritatis neque accusantium voluptate dignissimos at adipisci rem inventore.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a-different">
                    <span>How are we different ?</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed cumque quam assumenda porro quis
                        quasi incidunt similique dolore, numquam odit ipsam officia itaque illum iure repudiandae facilis velit unde?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed cumque quam assumenda porro quis
                        quasi incidunt similique dolore, numquam odit ipsam officia itaque illum iure repudiandae facilis velit unde?   </p>
                </div>
                <div className="a-team">
                    <span>Our Core Team</span>
                    <div className="a-team-cards">
                        <div className="a-team-card">
                            <img src="assets/Team 1.png" alt="" />
                            <h2>Mohit Varu</h2>
                            <h3>Founder</h3>
                            <LinkedIn className="a-icon" />
                        </div>
                        <div className="a-team-card">
                            <img src="assets/Team 1.png" alt="" />
                            <h2>Yashvi Dhruv</h2>
                            <h3>Engineering</h3>
                            <LinkedIn className="a-icon" />
                        </div>
                        <div className="a-team-card">
                            <img src="assets/Team 1.png" alt="" />
                            <h2>Vinit Sarode</h2>
                            <h3>Events</h3>
                            <LinkedIn className="a-icon" />
                        </div>
                    </div>
                </div>
                <div className="a-imgConatiner">
                    <img src="assets/join to learn img.png" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
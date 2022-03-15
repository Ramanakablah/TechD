import "./footer.scss";
import { Link } from "react-router-dom";

import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

export default function footer() {
    return (
        <div className="f-footer">
            <div className="f-top">
                <div className="f-left">
                    <div className="f-leftTop">
                        <img src="assets/Logo.png" alt="" />
                        <div className="Sponsor-holder">
                            <div className="f-sponsors">
                                <ul>
                                    <a href="/sponsors"><li className="f-heading">Sponsors</li></a>
                                    <li>Help & Support</li>
                                    <li><a href="/contact-us">Contact Us</a> </li>
                                    <li><a href="techdirectiveinformative@gmail.com">techdirectiveinformation@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="f-quick">
                                <ul>
                                    <li className="f-heading">Quick Link</li>
                                    <Link to="/"><li>Home</li></Link>
                                    <Link to="/about"> <li>About Us</li></Link>
                                    <Link to="/resources"> <li>Resources</li></Link>
                                    <Link to="/updates"> <li>Updates</li> </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="f-leftBottom">
                        <a href="https://twitter.com/chandravanshi_1"><Twitter className="f-icon" /></a>
                        <a href="https://www.instagram.com/techdirective/"> <Instagram className="f-icon" /> </a>
                        <a href="https://www.facebook.com/techdirective/"><Facebook className="f-icon" /></a>
                        <a href="https://www.linkedin.com/company/techdirective/?originalSubdomain=in"> <LinkedIn className="f-icon" /> </a>
                    </div>
                </div>
                {/* <div className="f-circle"></div> */}
                <div className="f-right">
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <input className="f-input" type="text" placeholder="Name" />
                    <input className="f-input" type="email" placeholder="E-mail" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="f-bottom">
                <div className="f-left"> ©2021 TechDirectie, All rights reserved</div>
                <div className="f-right">
                    <Link to="/terms">Terms and conditions </Link> |
                    <Link to="/community"> Community Guidelines  </Link>|
                    <Link to="/privacy"> Privacy Policy </Link>
                </div>
            </div>
        </div>
    )
}

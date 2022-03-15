import "./join.scss";
import Footer from "../../components/footer/Footer";
import { Twitter, LinkedIn, Facebook, Instagram } from "@material-ui/icons";

export default function Join() {
    return (
        <div className="join">

            <div className="sections">
                <img src="assets/Join community img.png" alt="" />
                <div className="jc-card">
                    <ul>
                        <div className="jc-container">
                            <img src="assets/check.png" alt="" />
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                        </div>
                        <div className="jc-container">
                            <img src="assets/check.png" alt="" />
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                        </div>
                        <div className="jc-container">
                            <img src="assets/check.png" alt="" />
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                        </div>
                        <div className="jc-container">
                            <img src="assets/check.png" alt="" /><li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                        </div>
                    </ul>
                </div>
                <div className="jc-wrapper">
                    <div className="items">
                        <span><b>Join</b> us now!</span>
                        <div className="icons">
                            <Twitter className="icon" />
                            <LinkedIn className="icon" />
                            <Facebook className="icon" />
                            <Instagram className="icon" />
                            <Twitter className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

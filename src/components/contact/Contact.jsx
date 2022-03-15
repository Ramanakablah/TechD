import "./contact.scss";
import {Facebook,Instagram,LinkedIn,Twitter} from "@material-ui/icons";

export default function Contact() {
    return (
        <div className="contact">
            <span className="head">CONTACT US</span>
            <div className="card">
            <form >
                      <div className="name">
                          <input type="text" className="firstName" placeholder="First Name"/>
                          <input type="text" className="lastName" placeholder="Last Name"/>
                      </div>
                      <div className="fields">
                          <input type="text" className="subject"  placeholder="Subject"/>
                          <input type="text" className="email" placeholder="Email"/>
                          <textarea type="text" className="message" placeholder="Write your message here." />
                          <button className="submit">Send Message</button>
                      </div>
                      
                  </form>
            </div>
            <span>CONNECT WITH US</span>
            <div className="icons">
            <Twitter className="icon"/>
                   <Instagram className="icon"/>
                   <Facebook className="icon"/>
                   <LinkedIn className="icon"/>
            </div>
        </div>
    )
}

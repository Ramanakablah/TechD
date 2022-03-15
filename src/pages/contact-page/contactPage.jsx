import "./contact.scss";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

export default function contactPage() {
    return (
        <div className="contact">
            
            <div className="sections">
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

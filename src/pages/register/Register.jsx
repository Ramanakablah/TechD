import { Link } from "react-router-dom"
import Topbar from "../../components/Navbar/Navbar";
import Footer from '../../components/footer/Footer';
import './register.css'
export default function Login() {
    return (
        <div className="register">
            <div className="cont">
                <div className="leftcont">
                    <img className="img" src="assets/logo(sign in).png" alt="logo" />
                    <h2 className="sideheading">Welcome Back!</h2>
                    <p className="textt">Stay connected with us, for more updates.</p>
                    <Link to="/login">
                        <button className="signinbtn">Sign In</button>
                    </Link>
                </div>

                <div className="rightcont">
                    <h2 className="heading">Create Account</h2>
                    <input className="name fs" type="text" placeholder="&#xf007;  Name" /><br />
                    <input className="email fs" type="email" placeholder="&#xf0e0;  Email" /><br />
                    <input className="password fs" type="password" placeholder="&#xf084;  Password" /><br />

                    <button className="signupbtn">Sign Up</button><br />
                    <p className="or">or</p>
                    <a href="/">
                        <img className="img1 img11" src="assets/google.jpg" />
                    </a>
                    <a href="https://www.facebook.com/techdirective/">
                        <img className="img1" src="assets/facebook.png" />
                    </a>
                    <a href="https://twitter.com/chandravanshi_1">
                        <img className="img1" src="assets/twitter.png" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

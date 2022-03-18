import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import './Login.css';

export default function SignIn() {
    return (
        <>

            <div className='container'>
                <div className='box_1'>
                    <img className="img" src="assets/logo(log in).png" alt="logo" />
                    <div className='box_11'>
                        <h2 className="heading1">Welcome to TechDirective </h2>
                        <input className="emailcss" type="email" placeholder="&#xf0e0;  Email" /><br />
                        <input className="passwordcss" type="password" placeholder="&#xf084;  Password" /><br />
                        <span>Forget Password?</span>

                        <div className='box_12'>
                            <button className="btnsignup">Sign In</button><br />
                            <p className="or">or</p>
                            <a href="/">
                                <img className="img2 img11" src="assets/google.jpg" alt="google" />
                            </a>
                            <a href="https://www.facebook.com/techdirective/">
                                <img className="img2" src="assets/facebook.png" alt="facebook" />
                            </a>
                            <a href="https://twitter.com/chandravanshi_1">
                                <img className="img2" src="assets/twitter.png" alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='box_2'>
                    <div className='box_21'>
                        <h2 className="rheading">Hello!</h2>
                        <p className="textr">Create your account and start your journey with us.</p>
                        <Link to="sign-up">
                            <button className="btnsignup">Sign Up</button>
                        </Link>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    )
}

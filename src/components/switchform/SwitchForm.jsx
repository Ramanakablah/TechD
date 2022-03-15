import './switchform.css';


export default function SwitchForm(){
  return (
    <div className="cont">


    <div className = "leftcont">
       <img className="img" src = "assets/logo.png" alt="logo" />
       <h2 className="sideheading">Welcome Back!</h2>
       <p className="textt">Stay connected with us, for more updates.</p>
       <button className="signinbtn">Sign In</button>
    </div>


    <div className = "rightcont">
      <h2 className="heading">Create Account</h2>

      <input className = "name fs" type="text" placeholder = "&#xf007;  Name" /><br />
      <input className = "email fs" type = "email" placeholder = "&#xf0e0;  Email"/><br />
      <input className = "password fs" type = "password" placeholder = "&#xf084;  Password"/><br />

      <button className="signupbtn">Sign Up</button><br />
      <p className="or">or</p>
      <img className="img1 img11" src="assets/google.jpg" />
      <img className="img1" src="assets/facebook.png" />
      <img className="img1" src="assets/twitter.png" />
    </div>

    </div>

  );
}

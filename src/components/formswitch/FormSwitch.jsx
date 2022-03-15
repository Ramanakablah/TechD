import './formswitch.scss';

export default function FormSwitch() {
  return (
    <div className="complete">


      <div className="left">
        <img className="img" src="assets/logo.png" alt="logo" />
        <h2 className="heading">Welcome to Tech Directive! </h2>

        <input className="email fs" type="&#xf0e0;  email" placeholder="Email" /><br />
        <input className="password fs" type="password" placeholder="&#xf084;  Password" /><br />

        <button className="signin">Sign In</button><br />
        <p className="or">or</p>
        <img className="img1 img11" src="assets/google.jpg" />
        <img className="img1" src="assets/facebook.png" />
        <img className="img1" src="assets/twitter.png" />
      </div>


      <div className="right">
        <h2 className="sideheading">Hello!</h2>
        <p className="text">Create your account and start your journey with us.</p>
        <button className="signup">Sign Up</button>
      </div>

    </div>
  );
}

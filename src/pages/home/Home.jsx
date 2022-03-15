// import "./home.scss";
import About from '../../components/about/About';
import Front from '../../components/front/Front';
import Why from '../../components/why/Why';
import Vision from '../../components/vision/Vision';
import Works from '../../components/works/Works';
import Stats from '../../components/stats/Stats';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';

export default function Home() {
    return (
        <div className="Home">
      <div className="section">
      <Front/>
      <About/>
      <Why/>
      <Vision/>
      <Works/>
      <Stats/>
      <Testimonial/>
      <Footer/>
      </div>
        </div>
    );
}

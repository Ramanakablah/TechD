import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./Referal.css";
import Footer from "../../components/footer/Footer";

export default function Referal() {
    return (
        <>

            <div className="container1">
                <div className="box1">
                    <div className="ref-text1">Friends that<br />
                        stick together,<br />
                        save together<br />
                    </div>
                    <div >Know someone who could use a happier mobile
                        experience? Well good news, for a limited time when you
                        refer your friend to Koodo, you can both take $50 off your
                        bill. Got a lot of friends? You can save up to $300 each year.</div>


                    <div className="btndiv">
                        <span><a href='/ReferToFriend'><button className="btn1">Refer a friend</button></a></span>
                        <span><a href='/GetReferal'><button className="btn2">Get Referral</button></a></span>
                    </div>
                </div>
                <div className="box2">
                    <img src="assets/vision.png" width="100%" alt='image has to be there' />
                </div>


            </div>
            <div className="ref-container2">
                <div className="text2">
                    Steps to refer
                </div>
                <div className="stepsbox">

                    <div className="steps">
                        <div className="cardi">

                        </div>
                        <div className="cardt">
                            Step1
                        </div>
                    </div>

                    <div className="steps">
                        <div className="cardi">

                        </div>
                        <div className="cardt">
                            Step2
                        </div>
                    </div>

                    <div className="steps">
                        <div className="cardi">

                        </div>
                        <div className="cardt">
                            Step3
                        </div>
                    </div>



                </div>

            </div>

            <div className="container3">
                <button className="btn3">Previous Referral Program <span className="arrow"><ArrowForwardIosIcon /></span></button>
            </div>
            <Footer />
        </>
    )

}
import "./ReferToFriend.css";
import Footer from "../../components/footer/Footer";
export default function ReferToFriend() {
    return (
        <>
            <div>
                <div className="text1">Refer To Friend </div>


                <div className="box2">
                    <img src="assets/vision.png" className="box2" alt='image has to be there' />
                </div>



                <div className="container2">
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
                <Footer />
            </div>
        </>
    )

}
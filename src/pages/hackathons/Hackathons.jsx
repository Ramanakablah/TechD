import "./hackathons.scss";
import Footer from "../../components/footer/Footer";

export default function Hackathons() {
    return (
        <div className="hackathons">
            
            <div className="sections">
            <img src="assets/Hackathon img.jpg" alt="" />
            <div className="h-card">
                <span>Importance of Hackathon</span>
                <ul>
                    <div className="h-container">
                        <img src="assets/check.png" alt="" />
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                    </div>
                    <div className="h-container">
                        <img src="assets/check.png" alt="" />
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                    </div>
                    <div className="h-container">
                        <img src="assets/check.png" alt="" /><li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id, explicabo eligendi alias iste nisi, voluptas enim officiis numquam cumque totam laboriosam. Facilis ipsam voluptate recusandae esse culpa porro earum?</li>
                    </div>
                    </ul>
            </div>
                <div className="upcoming">
                    <div className="head">
                        <img src="assets/speaker.png" alt="" />
                        <span>Upcoming Hackathons</span>
                    </div>
                    <div className="body">
                        <div className="cardContainer">
                            <div className="h-card">
                               <div className="top">
                               <img src="assets/open-book.png" alt="" />
                               </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus porro unde minima distinctio ea soluta veritatis, recusandae omnis? Nemo cumque.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                            <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                                <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                                  <span>MakeMIT</span>
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                        </div>
                        <button>Load More</button>
                    </div>
                </div>
                <div className="past">
                    <div className="head">
                        <img src="assets/speaker.png" alt="" />
                        <span>Past Hackathons</span>
                    </div>
                    <div className="body">
                        <div className="cardContainer">
                            <div className="h-card">
                               <div className="top">
                               <img src="assets/open-book.png" alt="" />
                               </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus porro unde minima distinctio ea soluta veritatis, recusandae omnis? Nemo cumque.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                            <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                                <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                                  <span>MakeMIT</span>
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="down">
                    <div className="body">
                        <div className="cardContainer">
                            <div className="h-card">
                               <div className="top">
                               <img src="assets/open-book.png" alt="" />
                               </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus porro unde minima distinctio ea soluta veritatis, recusandae omnis? Nemo cumque.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                            <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                               <span>MakeMIT</span>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                            <div className="h-card">
                            <div className="top">
                                <img src="assets/open-book.png" alt="" />
                            </div>
                               <div className="bottom">
                                  <span>MakeMIT</span>
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis voluptates laudantium explicabo optio blanditiis possimus similique veniam.</p>
                               </div>
                            </div>
                        </div>
                        <button>Load More</button>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

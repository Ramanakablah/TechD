import "./stats.scss";

export default function Stats() {
    return (
        <div className="stats">
            <h1>Brief Statistics</h1>
            <div className="itemContainer">
                <div className="items">
                    <img src="assets/minutes.png" alt="" />
                    <div className="statistics">11.3M+</div>
                    <div className="desc">Learning Minutes</div>
                </div>
                <div className="items">
                    <img src="assets/program.png" alt="" />
                    <div className="statistics">10+</div>
                    <div className="desc">Programs</div>
                </div>
                <div className="items">
                    <img src="assets/doubt.png" alt="" />
                    <div className="statistics">150K+</div>
                    <div className="desc">Doubts Solved</div>
                </div>
                <div className="items">
                    <img src="assets/learner.png" alt="" />
                    <div className="statistics">400K+</div>
                    <div className="desc">Learners</div>
                </div>
            </div>
        </div>
    )
}

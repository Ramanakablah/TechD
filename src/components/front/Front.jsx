import "./front.scss";

export default function Front() {
    return (
        <div className="f-home">
            <div className="fr-left">
                <p>Let's Learn and</p>
                <p>Help each other!</p>
                <button className="button" link to="/about">Know More</button>
            </div>
            <div className="fr-right">
                <img src="assets/learning.gif" alt="" />
            </div>
        </div>
    )
}

import "./Link.css";

function Link(props) {
    return (
        <div className="link-container">
            <a className="link" href={props.url} target="_blank" rel="noreferrer">
                <img className="link-icon" src={props.icon} alt={props.name + " Logo"} /> {props.name}
            </a>
        </div>
    );
}

export default Link;
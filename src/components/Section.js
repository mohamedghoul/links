import Link from "./Link";
import "./Section.css";

function Section(props) {
    return (
        <div className="section">
            {props.title ? <h3 className="section-title">{props.title}</h3> : null}
            <div className="section-contents">{props.links.map((link, index) => <Link key={index} name={link.name} url={link.url} icon={link.icon}></Link>)}</div>
        </div>
    );
}

export default Section;
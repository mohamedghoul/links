import "./Information.css"
import ProfilePicture from "./components/ProfilePicture";
import Name from "./components/Name";
import Description from "./components/Description";

function Information(props) {
    return (
        <>
            {/* <ProfilePicture url="https://avatars.githubusercontent.com/u/84982938?v=4" /> */}
            <ProfilePicture url={props.img} alt={props.name} />
            <Name name={props.name} />
            <Description description={props.description} />
        </>
    )
}

export default Information;
import "./ProfilePicture.css"

function ProfilePicture(props) {
  return (
    <div className="profile-picture-container">
        <img className="profile-picture" src={props.url} alt={props.alt} />
    </div>
  );
}

export default ProfilePicture;
import "./Description.css"

function Description(props) {
  return (
    <div className="description-container">
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Description;
import Badge from "react-bootstrap/Badge";

const Tags = (props) => {
    return (
    <div>
    <Badge className="btn" bg={props.bg}>{props.buttonText}</Badge>
  </div>
    )
};

export default Tags;


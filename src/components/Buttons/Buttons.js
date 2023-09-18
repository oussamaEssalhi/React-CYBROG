import "./Buttons.css";
 import { Link } from "react-router-dom"

const PrimaryButton = (props) => {
  return (
    <div className="main-button">
      <a href="/#">{props.children}</a>
    </div>
  )
}

const SeconderyButton = (props) => {
  return (
    <div className="btn-download">
      <a href="/#">{props.children}</a>
    </div>
  )
}
const LinkButton = (props) => {
  return (
    <div className="Link-Button">

      <Link to={props.path}>{props.children}</Link>
    </div>
  )
}

export default PrimaryButton
export { SeconderyButton, LinkButton }
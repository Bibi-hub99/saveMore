import {Link} from "react-router-dom"

function ButtonLink(props){


    //component for links routing and is styled based on props received under linkStyle

    const btnLinkStyle = {
        boxShadow:props.btnStyleShadow
    }

    return (
        <Link className={`${props.linkStyle}`} to={props.linkURL} style={btnLinkStyle}>{props.linkTitle}</Link>
    )

}

export default ButtonLink
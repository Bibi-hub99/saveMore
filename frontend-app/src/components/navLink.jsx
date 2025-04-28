import {NavLink} from "react-router-dom"

function NavLinker(props){

    return (
        <NavLink to={props.url} className={({isActive}) => isActive ? props.activeLink:props.inActiveLink}>{props.title} {props.icon}</NavLink>
    )

}

export default NavLinker
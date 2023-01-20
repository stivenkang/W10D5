import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

const ArtIndexItem = props => {
    return <NavLink to={`/galleries/${props.art.id}`} className="art-item">{props.art.name}</NavLink>
}

export default ArtIndexItem
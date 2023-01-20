import { NavLink } from "react-router-dom"
import ArtIndexItem from "./ArtIndexItem"
import "./GalleryNavigation.css"

function GalleryNavigation (props) {
    
    let arts = Object.values(props)

    const artList = arts[0].map(art => {
        return <ArtIndexItem key={art.id} art={art} />
    })

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to={`/`}>Home</NavLink>
            {artList}
        </nav>
    )
}

export default GalleryNavigation
import { useParams } from "react-router-dom"

function GalleryView(props) {
    let arr = Object.values(props)
    const { galleryId } = useParams()
    console.log(galleryId)
    let gallery = arr.find(galleryId);

    // for (let i = 0; i < arr[0].length; i++) {
    //     console.log(arr[0][i].id)
    //     // if (arr[0][i].galleryid === galleryId) {
    //     //     gallery = arr[0][i]
    //     // }
    // }
    console.log(gallery)
    // return(
    //     <div className="gallery-show">
    //         <h2>{gallery.name}</h2>
    //     </div>
    // ) 
}

export default GalleryView
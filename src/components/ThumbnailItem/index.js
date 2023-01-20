// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageObject, activeImgId, selectImage} = props
  const {id, thumbnailAltText, thumbnailUrl} = imageObject

  const opacityClass = id === activeImgId ? '' : 'opacity'

  const onClickImage = () => {
    selectImage(imageObject)
  }

  return (
    <li>
      <button onClick={onClickImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={opacityClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

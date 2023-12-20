import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, updateThumbnailImages, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails

  const activeImageClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    updateThumbnailImages(id)
  }
  return (
    <li className="thumbnails-list">
      <button type="button" className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnail}
          className={activeImageClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

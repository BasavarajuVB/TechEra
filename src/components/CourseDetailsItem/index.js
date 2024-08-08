import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="course-details-container">
        <img className="course-details-image" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="course-details-title">{name}</h1>
          <p className="course-details-info">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem

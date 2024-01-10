import "./projectCard.css";

export const ProjectCard = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img alt={title} src={imageUrl} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h6> {title}</h6>
        </div>
        <div className="card-body">
          <p> {body}</p>
        </div>
        <div className="btn">
          <button>
            <a href="">Ver mas</a>
          </button>
        </div>
      </div>
    </div>
  );
};

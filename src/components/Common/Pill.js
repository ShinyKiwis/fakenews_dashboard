import "./Pill.css"

const Pill = ({ type, color, mid }) => {
  return (
    <div className="pill_container"
      style={{
        backgroundColor: `${color}`,
        marginTop: `${mid ? 5: 0}em`
      }}>
      <img src={`icons/${type !== "Not News" ? type.toLowerCase() : "notnews"}.svg`} />
      <span>{type}</span>
    </div>
  )
};

export default Pill;

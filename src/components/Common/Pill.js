import "./Pill.css";

const Pill = ({ type, mid }) => {
  const colorDict = {
    medical: "#366BD5",
    nonmed: "#3CD5EB",
    true: "#20DD59",
    false: "#F74242",
    news: "#9E3EE0",
    notnews: "#FFCF32",
    skip: "#414755",
    unverified: "#414755",
  };

  function parseType(type) {
    type = type.toLowerCase();
    return (type === "not news" || type === "notnews") ? "notnews" : type;
  }

  return (
    <div
      className="pill_container"
      style={{
        backgroundColor: `${colorDict[parseType(type)]}`,
        marginTop: `${mid ? 5 : 0}em`,
      }}
    >
      <img src={`icons/${parseType(type)}.svg`} />
      <span>{type}</span>
    </div>
  );
};

export default Pill;

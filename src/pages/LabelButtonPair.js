import "./LabelButtonPair.css";

function LabelButtonPair({ left, right, leftOrRight, setLeftOrRight , AILabel}) {
  function SelectLeft() {
    if (leftOrRight == "left") setLeftOrRight("none");
    else setLeftOrRight("left");
  }

  function SelectRight() {
    if (leftOrRight == "right") setLeftOrRight("none");
    else setLeftOrRight("right");
  }

  function GetSVG(label)
  {
    if (AILabel === label) return "icons/New/AI " + label + ".svg";
    else return "icons/New/" + label + ".svg";
  }

  return (
    <div className="label-holder">
      <button
        className={`${left.toLowerCase()} ${
          leftOrRight == "left"
            ? "active-label-button"
            : "inactive-label-button"
        }`}
        onClick={SelectLeft}
      >
        <span>{left}</span>
        <img src={GetSVG(left)} />
      </button>
      <button
        className={`${right.toLowerCase()} ${
          leftOrRight == "right"
            ? "active-label-button"
            : "inactive-label-button"
        }`}
        onClick={SelectRight}
      >
        <span>{right}</span>
        <img src={GetSVG(right)} />
      </button>
    </div>
  );
}

export default LabelButtonPair;

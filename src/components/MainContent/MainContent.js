import "./MainContent.css";
import DashBoardChart from "./DashBoardChart/DashBoardChart";

const firstChartData = [
  { title: "Medical", value: 1978, color: "#1f5fe0" },
  { title: "Nonmed", value: 3568, color: "#5acedf" },
  { title: "Unverified", value: 13142, color: "#414755" },
];

const secondChartData = [
  { title: "News", value: 3214, color: "#9825e6" },
  { title: "Not News", value: 1924, color: "#ffc300" },
  { title: "Unverified", value: 14786, color: "#414755" },
];

const thirdChartData = [
  { title: "True", value: 2876, color: "#2beb65" },
  { title: "False", value: 1534, color: "#f74242" },
  { title: "Unverified", value: 15566, color: "#414755" },
];

const MainContent = () => {
  return (
    <div className="container">
      <br />
      <div class="row">
        <div class="column">
          <DashBoardChart data={firstChartData} />
        </div>
        <div class="column">
          <DashBoardChart data={secondChartData} />
        </div>
        <div class="column">
          <DashBoardChart data={thirdChartData} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

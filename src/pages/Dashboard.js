import DashBoardChart from "../components/DashBoardChart/DashBoardChart";
import DashboardStyle from "./Dashboard.module.css"

const DashBoardItem = ({index, group}) => {
  return (
    <tr>
      <td>{index}</td> 
      <td>{group.id}</td>
      <td>{group.med_size}</td>
      <td>{group.true_size}</td>
      <td>{group.fake_size}</td>
      <td>{group.verified}</td>
    </tr>
  )
}

const Dashboard = () => {
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

  const groupData = [
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "VietnamProjectsConstructionGROUP",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "12312312333333333333123123123131233",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "VietnamProjectsConstructionGROUP",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "12312312333333333333123123123131233",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "VietnamProjectsConstructionGROUP",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "12312312333333333333123123123131233",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "VietnamProjectsConstructionGROUP",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "12312312333333333333123123123131233",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },
    {
      id: "123123",
      med_size: 45,
      true_size: 23,
      fake_size: 22,
      verified: "0 (0.00%)" 
    },




  ]

  return (
   <div className={DashboardStyle.container}>
      <div className={DashboardStyle.row}>
        <div>
          <DashBoardChart data={firstChartData} />
        </div>
        <div>
          <DashBoardChart data={secondChartData} />
        </div>
        <div>
          <DashBoardChart data={thirdChartData} />
        </div>
      </div>
      <h2 className={DashboardStyle.title}>Group Summary Data</h2>
      <table className={DashboardStyle.table}>
        <tr>
          <th>No</th>
          <th>Group ID</th>
          <th>Medical</th>
          <th>True</th>
          <th>False</th>
          <th>Verified</th>
        </tr>
        {groupData.map((group, index) => (
          <DashBoardItem index={index+1} group={group} />  
        ))}
      </table>
  </div>
  )
}

export default Dashboard;

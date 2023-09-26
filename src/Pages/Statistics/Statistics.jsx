import { PieChart } from "react-minimal-pie-chart";
const Statistics = () => {
  return (
    <div className="h-screen-50px items-center flex justify-center ">
      <div className="w-2/4 ">
        <PieChart
          data={[
            { title: "One", value: 10, color: "#FF444A" },
            { title: "Two", value: 15, color: "#00C49F" },
          ]}
        />
      </div>
    </div>
  );
};

export default Statistics;

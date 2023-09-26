import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [shoChat, setShowChat] = useState(0);

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donation"));
    const chatData = donation.reduce(
      (preValue, currentValue) => preValue + currentValue.id,
      0
    );
    setShowChat(chatData);
  }, []);
  const data = shoChat ? (
    <PieChart
      data={[
        {
          title: "One",
          value: 10,
          color: "#FF444A",
        },
        {
          title: "Two",
          value: shoChat,
          color: "#00C49F",
        },
      ]}
    />
  ) : (
    <p>kjsfdagjfasd</p>
  );

  return (
    <div className="h-screen-50px items-center  justify-center ">
      <div className="w-2/4 ">{data}</div>
      <div>
        <h1 className="border-x-4 to-blue-gray-800">Your Donation</h1>
      </div>
    </div>
  );
};

export default Statistics;
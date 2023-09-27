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
    <p>you have not donate anything</p>
  );

  return (
    <div className="h-screen-50px flex items-center  justify-center">
      <div className="w-1/3 ">
        {data}

        <div className="flex gap-5 md:text-2xl md:mt-10">
          <h1 className=" border-b-4 border-[#FF444A]">Total Donation</h1>
          <h1 className=" border-b-4 border-[#00C49F]"> Your Donation</h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

import { useEffect } from "react";
import { useState } from "react";
import ShowDonation from "./ShowDonation";

const Donation = () => {
  const [donationItem, setDonationItem] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donation"));
    if (donation) {
      setDonationItem(donation);
     
    } else {
      setNoFound("no data found");
    }
  }, []);
  // console.log(donationItem);
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] text-6xl flex justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div className=" md:max-w-[1200px]  mx-auto grid  md:grid-cols-2 gap-10">
          {isShow
            ? donationItem.map((item) => (
                <ShowDonation key={item.id} item={item}></ShowDonation>
              ))
            : donationItem
                .slice(0, 4)
                .map((item) => (
                  <ShowDonation key={item.id} item={item}></ShowDonation>
                ))}
        </div>
      )}
      {donationItem.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn text-white block  items-center mx-auto bg-green-600  hover:bg-green-600 ">
          {isShow ? "See Less" : "See All"}
        </button>
      )}
      
    </div>
  );
};

export default Donation;

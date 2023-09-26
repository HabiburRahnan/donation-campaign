import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import DonationSingle from "./DonationSingle";

const HandleClick = () => {
  const [singleCard, setSingleCard] = useState({});
  const { id } = useParams();
  const donations = useLoaderData();
  console.log(id);

  useEffect(() => {
    const finDonation = donations?.find((donation) => donation.id == id);

    setSingleCard(finDonation);
  }, [id, donations]);
  // console.log(finPhone);
  console.log(singleCard);
  return (
    <div>
      <DonationSingle singleCard={singleCard}></DonationSingle>
    </div>
  );
};

export default HandleClick;

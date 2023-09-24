/* eslint-disable react/prop-types */

import DonationCard from "../DonationCard/DonationCard";

const CardItem = ({ donationItem }) => {
  //   const { Picture, Title, Category } = donationItem;
  return (
    <div>
      <h1>donation item : {donationItem.length}</h1>

      {donationItem.map((donation) => (
        <DonationCard key={donation.id} donation={donation}></DonationCard>
      ))}
    </div>
  );
};

export default CardItem;

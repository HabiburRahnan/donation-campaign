/* eslint-disable react/prop-types */

import DonationCard from "../DonationCard/DonationCard";

const CardItem = ({ donationItem }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10">
        {donationItem.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default CardItem;

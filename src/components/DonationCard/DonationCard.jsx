/* eslint-disable react/prop-types */

import HandleClick from "../HandleClick/HandleClick";
// import { Card, CardHeader, Typography } from "@material-tailwind/react";
const DonationCard = ({ donation }) => {
  const { Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } =
    donation;

  const handleClick = (donation) => {
    <HandleClick key={donation.id} donation={donation}></HandleClick>;
  };
  return (
    <div onClick={() => handleClick(donation)} style={{ background: Card_bg }}>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img src={Picture} alt={Category} />
        </figure>
        <div
          style={{ background: Text_button_bg, color: Category_bg }}
          className="card-body ">
          <h1
            className="w-20 text-center"
            style={{ background: Text_button_bg }}>
            {Category}
          </h1>
          <p>{Title}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

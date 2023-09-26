/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
// import HandleClick from "../HandleClick/HandleClick";
// import { Card, CardHeader, Typography } from "@material-tailwind/react";
const DonationCard = ({ donation }) => {
  const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } =
    donation || {};

  return (
    <Link to={`/handleclick/${id}`}>
      <div style={{ background: Card_bg }}>
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
    </Link>
  );
};

export default DonationCard;

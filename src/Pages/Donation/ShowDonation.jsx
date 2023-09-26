/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShowDonation = ({ item }) => {
  const {
    Card_bg,
    Picture,
    Text_button_bg,
    Category_bg,
    Category,
    id,
    Title,
    Price,
  } = item || {};
  return (
    <div>
      <div
        style={{ background: Card_bg }}
        className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={Picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h1
            className=" card-title w-28 text-center"
            style={{
              background: Text_button_bg,
              color: Category_bg,
            }}>
            {Category}
          </h1>
          <p className="text-3xl font-medium">{Title}</p>
          <p className="font-semibold" style={{ color: Category_bg }}>
            ${Price}
          </p>
          <Link to={`/handleclick/${id}`}>
            <div className="card-actions justify-end">
              <button
                style={{ background: Category_bg }}
                className="btn btn-primary text-white">
                View Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDonation;

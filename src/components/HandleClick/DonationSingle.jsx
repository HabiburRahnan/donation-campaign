/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const DonationSingle = ({ singleCard }) => {
  const { id, Picture, Title, Price, Description, Category_bg } = singleCard;

  const donationAddMsg = () => toast("Your Donation successfull");

  const handleAddDonation = () => {
    const donationArray = [];

    const donation = JSON.parse(localStorage.getItem("donation"));

    if (!donation) {
      donationArray.push(singleCard);
      localStorage.setItem("donation", JSON.stringify(donationArray));
    } else {
      const isExits = donation.find((singleCard) => singleCard.id === id);
      if (!isExits) {
        donationArray.push(...donation, singleCard);
        localStorage.setItem("donation", JSON.stringify(donationArray));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You already Donate",
        });
      }
    }
  };

  return (
    <div className="max-w-auto md:max-w-[1150px]  mx-auto">
      <Card className="mt-6 rounded">
        <CardHeader color="blue-gray" className="relative   md:w-full">
          <img className=" md:h-[45vh] w-full" src={Picture} alt="card-image" />
          <div>
            <div
              onClick={donationAddMsg}
              style={{ backgroundColor: "rgba(11, 11, 11, 0.5)" }}
              className="relative bottom-0 left-0">
              <button
                onClick={handleAddDonation}
                style={{ background: Category_bg }}
                className="btn  text-white w-40 ">
                Donate {Price}
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-4xl font-semibold">
            {Title}
          </Typography>
          <Typography>{Description}</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationSingle;

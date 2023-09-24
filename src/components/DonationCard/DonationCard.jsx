import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
const DonationCard = () => {
  return (
    <div>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={Picture} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {Title}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {Category}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;

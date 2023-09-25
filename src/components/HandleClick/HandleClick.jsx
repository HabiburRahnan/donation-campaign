import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const HandleClick = (donation) => {
  const { Picture, Description, Price, Title } = donation;

  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={Picture} alt="card-image" />
          <button>Donate {Price}</button>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {Title}
          </Typography>
          <Typography>{Description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HandleClick;

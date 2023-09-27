import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import CardItem from "../../components/CardItem/CardItem";

const Home = () => {
  const donationItem = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <CardItem donationItem={donationItem}></CardItem>
    </div>
  );
};

export default Home;

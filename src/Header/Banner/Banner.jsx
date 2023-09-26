import { Button, Input } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className=" max-w-[1200px]  mx-auto">
      <div className=" py-32 md:py-40 h-0 md:h-3/5 md:ml-0 bg-opacity-100  bg-[url('https://i.ibb.co/rwZ7rNx/cover.jpg')] ">
        <h1 className="text-2xl font-bold px-5 md:px-0  mb-5 md:text-5xl md:font-extrabold md:text-center ">
          I Grow By Helping People In Need
        </h1>
        <div className="items-center flex justify-center md:mt-16">
          <div className="relative  flex  w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

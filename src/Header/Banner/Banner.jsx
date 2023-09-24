import { Button, Input } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="py-40 h-3/5 bg-blue-gray-200">
      {/* bg-[url('/img/hero-pattern.svg')] */}
      <h1 className="text-xl font-normal md:text-5xl md:font-extrabold md:text-center">
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
  );
};

export default Banner;

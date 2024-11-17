import { InformationBoxes } from "../../constants";
import Card from "../Card/Card";

const Legend = () => {
  return (
    <div className="container-1147 mx-auto z-[1] block md:mt-[210px] mt-36 lg:mb-[100px] mb-16">
      <div className="flex flex-col gap-[56px] ">
        <div className="flex flex-col gap-5">
          <div className="w-full text-large text-center">
            <p className="text-primary">Win your dream job</p>
            <p className="text-white">with PostJob</p>
          </div>
          <p className="sm:w-[474px] mx-auto text-center leading-6">
            Submit better job app — 10x faster. AI cover letter generator,
            resume keyword checker, outreach message writer, and more. Powered
            by GPT
          </p>
          <div className="relative sm:w-[519px] w-[80%] flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-center mx-auto pl-4 pr-2 py-2 rounded-2xl sm:border md:border-grey">
            <input
              type="email"
              className="w-full h-11 outline-none pl-6 bg-transparent placeholder:text-lg placeholder:text-grey z-[1] sm:border-transparent border border-grey rounded-lg"
              placeholder="Your Email"
            />
            <button className="text-nowrap btn-primary">Start For Free</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:w-full w-[90%] mx-auto gap-8">
          {InformationBoxes.map((box) => (
            <Card box={box} key={box.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Legend;

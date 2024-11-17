import useIntersection from "../Hooks/useIntersection";

const BetterJob = () => {
  useIntersection("#better_job","scale");
  return (
    <section id="better_job" className="container-1416 h-fit rounded-xl text-black lg:mb-20 mb-10">
        <div className="flex flex-col items-center justify-center md:pt-14 pt-8 bg-primary rounded-xl">
          <h2 className="md:w-[420px] heading2 text-center">
            Submit Better job applications
          </h2>
          <h1 className="text-center text-extra-large">
            10x faster
          </h1>
          <p className="md:w-[474px] text-center leading-6 -mt-1">
            AI cover letter generator, resume keyword checker, outreach message
            writer, and more. Powered by GPT
          </p>
          <div className="w-full md:px-[57px] px-8 mt-3">
            <img
              src="/images/img-1.png"
              alt=""
              className="w-full h-fit object-contain z-[1]"
            />
          </div>
        </div>
    </section>
  );
};
export default BetterJob;

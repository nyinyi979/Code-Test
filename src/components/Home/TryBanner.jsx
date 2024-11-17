import useIntersection from "../Hooks/useIntersection";

const TryBanner = () => {
  useIntersection("#try_banner","fade")
  return (
    <section id="try_banner" className="container-1036 bg-primary ">
      <div className="flex flex-col items-center lg:px-0 px-5 py-10">
        <div className="grid lg:grid-cols-1.1 lg:gap-20 gap-10 pt-10 text-black">
          <div className="flex flex-col md:gap-6 gap-3 justify-center">
            <h2 className="heading2 font-semibold lg:text-left text-center">
              Free AI cover letter generator powered by GPT
            </h2>
            <img
              className="lg:hidden block w-[90%] h-[300px] object-contain"
              src="/images/illustration-1.png"
            />
            <p className="lg:text-left text-center">
              A free AI cover letter generator powered by GPT is a tool that
              uses artificial intelligence and natural language processing to
              help job seekers create customized and effective cover letters.
            </p>
            <button className="btn-ghost-black lg:mx-0 mx-auto">Try For Free Now</button>
          </div>
          <img
            className="lg:block hidden aspect-[500/500]"
            src="/images/illustration-1.png"
          />
        </div>
        <div className="grid lg:grid-cols-1.1 lg:gap-20 gap-10 pt-10 text-black">
          <img
            className="aspect-[500/500] lg:block hidden"
            src="/images/illustration-2.png"
          />
          <div className="flex flex-col md:gap-6 gap-3 justify-center">
            <h2 className="heading2 font-semibold lg:text-left text-center">
              Optimize the keywords in your resume
            </h2>
            <img
              className="lg:hidden block w-[90%] h-[300px] object-contain"
              src="/images/illustration-2.png"
            />
            <p className="lg:text-left text-center">
              By optimizing keywords in your resume, you can increase your
              chances of getting noticed by recruiters and landing interviews
              for the jobs you want.
            </p>
            <button className="btn-ghost-black lg:mx-0 mx-auto">Optimize Your Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TryBanner;

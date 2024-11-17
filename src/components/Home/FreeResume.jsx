import useIntersection from "../Hooks/useIntersection";

const FreeResume = () => {
  useIntersection("#free_resume","slide_right")
  return (
    <section id="free_resume" className="container-1088 my-10">
      <div className="grid md:grid-cols-2 py-10 items-center gap-8 md:px-0 px-5">
        <div className="sm:w-[479px]  flex flex-col gap-6 md:text-left text-center">
          <h2 className="heading2 font-semibold text-white ">Free resume design templates</h2>
          <p className="sm:w-[456px] ">
            By following these design tips, you can create a professional and
            effective resume that will help you stand out to recruiters and
            hiring managers.
          </p>
          <button className="btn-ghost md:mx-0 mx-auto">Create an account.</button>
        </div>
        <img
          src="/images/illustration-3.png"
          alt="illustration-3"
          className="w-fit md:mx-0 mx-auto"
        />
      </div>
    </section>
  );
};
export default FreeResume;

import { LessTimeBoxes } from "../../constants";
import Card from "../Card/Card";
import useIntersection from "../Hooks/useIntersection";

const LastTime = () => {
  useIntersection("#less_time","slide_left")
  return (
    <section id="less_time" className="container-1147 lg:mb-20 mb-10">
      <div className="flex flex-col items-center gap-8">
        <div className="md:w-[420px] flex flex-col gap-4">
          <h2 className="heading2 text-center font-semibold text-white">
            Spend less time looking for work
          </h2>
          <p className="md:w-[356px] mx-auto text-center">
            We'll help you through the hardest part of your job search.
          </p>
          <button className="btn-ghost mx-auto">Create An Account</button>
        </div>

        <div className="grid md:w-full w-[95%] lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {LessTimeBoxes.map((box) => (
            <Card key={box.id} box={box} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LastTime;

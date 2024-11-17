import FreeResume from "../components/Home/FreeResume";
import Legend from "../components/Home/Legend";
import BetterJob from "../components/Home/BetterJob";
import LastTime from "../components/Home/LessTime";
import TryBanner from "../components/Home/TryBanner";

export default function Home() {
  return (
    <>
      <Legend />
      <BetterJob />
      <LastTime />
      <TryBanner />
      <FreeResume />
    </>
  );
}

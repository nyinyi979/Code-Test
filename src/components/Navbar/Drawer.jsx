import { NavLinks } from "../../constants";
import { useUserStore } from "../../state/user";

const Drawer = ({ open, closeDrawer, openDialog }) => {
  const { username, setUsername } = useUserStore();
  return (
    <div
      onClick={closeDrawer}
      className={`fixed w-full h-full bg-black/40 top-0 left-0 z-[1000] duration-300 ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(ev) => ev.stopPropagation()}
        className={`lg:hidden w-[300px] h-full fixed duration-300 flex flex-col gap-8 px-6 pt-8 ${
          open ? "right-0" : "-right-[300px]"
        } bg-card z-[101]`}
      >
        <button onClick={closeDrawer} className="size-3">
          <img src="/images/icon/cross.svg" />
        </button>
        <div className="flex flex-col gap-5">
          {NavLinks.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              className="hover:text-white duration-300"
            >
              {link.label}
            </a>
          ))}
          {username ? (
            <button onClick={()=>setUsername(null)} className="btn-ghost">
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-4">
              <button onClick={()=>{closeDrawer();openDialog()}} className="btn-ghost w-[180px] py-2">
                Sign in
              </button>
              <button className="btn-primary w-[180px] py-2">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Drawer;

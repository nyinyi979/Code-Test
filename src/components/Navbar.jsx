import { useEffect, useState } from "react";
import { NavLinks } from "../constants";
import Dialog from "./Dialog/Dialog";
import { showSuccessAlert } from "./Alert/Alert";
import SignUpDialogContet from "./Navbar/SignUpDialog";
import Drawer from "./Navbar/Drawer";
import { useUserStore } from "../state/user";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState({
    bg: false,
    drawer: false,
  });
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = useState({
    bg: false,
    dialog: false,
  });
  const openDialog = () => {
    setDialogOpen({ bg: true, dialog: false });
    document.body.style.position = "fixed";
    const timer = setTimeout(() => {
      setDialogOpen({
        bg: true,
        dialog: true,
      });
    }, 100);
    () => clearTimeout(timer);
  };
  const closeDialog = () => {
    setDialogOpen({ bg: true, dialog: false });
    document.body.style.position = "relative";
    const timer = setTimeout(() => {
      setDialogOpen({
        bg: false,
        dialog: false,
      });
    }, 100);
    () => clearTimeout(timer);
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const openDrawer = () => {
    setDrawerOpen({ bg: true, drawer: false });
    const timer = setTimeout(() => {
      setDrawerOpen({
        bg: true,
        drawer: true,
      });
    }, 100);
    () => clearTimeout(timer);
  };
  const closeDrawer = () => {
    setDrawerOpen({ drawer: false, bg: true });
    const timer = setTimeout(() => {
      setDrawerOpen({
        bg: false,
        drawer: false,
      });
    }, 100);
    () => clearTimeout(timer);
  };
  const { username, setUsername } = useUserStore();
  const submitForm = ({username}) => {
    setUsername(username);
    showSuccessAlert("Successful login");
    closeDialog();
  };
  useEffect(() => {
    const listener = window.addEventListener("scroll", function () {
      // or window.addEventListener("scroll"....
      var st = document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        setNavbarOpen(false);
      } else if (st < lastScrollTop) {
        setNavbarOpen(true);
        // upscroll code
      } // else was horizontal scroll
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    });
    return () => window.removeEventListener("scroll", listener);
  }, [lastScrollTop]);
  return (
    <header
      className={`container-1304 w-full fixed left-0 bg-background z-[1000] ${
        navbarOpen ? "top-0" : "-top-32"
      } ease-linear duration-300`}
    >
      <div className="flex gap-10 lg:pt-16 pt-10 pb-4 items-center lg:justify-center justify-between sm:px-0 px-6">
        <a href="/" className="flex gap-1 p-3 font-medium text-white">
          <img src="/images/icon/logo.svg" />
          PostJob
        </a>
        <div className="lg:flex hidden xl:gap-6 gap-2 font-semibold">
          {NavLinks.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              className="hover:text-white duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="lg:flex hidden gap-4 ml-auto">
          {username ? (
            <button className="hover:text-white duration-300" onClick={()=>setUsername(null)}>{username}</button>
          ) : (
            <>
              <button onClick={openDialog} className="btn-ghost">
                Sign in
              </button>
              <button className="btn-primary">Get Started</button>
            </>
          )}
        </div>
        <div className="lg:hidden size-4 block mr-5" onClick={openDrawer}>
          <img src="/images/icon/menu.svg" />
        </div>
      </div>
      {drawerOpen.bg && (
        <Drawer
          closeDrawer={closeDrawer}
          open={drawerOpen.drawer}
          openDialog={openDialog}
        />
      )}
      {dialogOpen.bg && (
        <Dialog
          closeDialog={closeDialog}
          open={dialogOpen.dialog}
          children={
            <SignUpDialogContet closeDialog={closeDialog} submit={submitForm} />
          }
        />
      )}
    </header>
  );
};
// 4da73b
export default NavBar;

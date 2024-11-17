import { CopyrightTexts, FooterLinks } from "../constants";

const Footer = () => {
  
  return (
    <footer className="container-1126 w-full flex flex-col sm:gap-10 gap-8 items-center justify-center bg-primary">
      <div className="sm:w-[456px] flex flex-col gap-2 pt-12  text-background sm:px-0 px-5">
        <h1 className="heading1 font-semibold text-center">What's next</h1>
        <p className="text-black">
          Submit better job app — 10x faster. AI cover letter generator, resume
          keyword checker, outreach message writer, and more. Powered by GPT
        </p>
        <button className="btn-ghost-black mx-auto mt-6">Try For Free</button>
      </div>
      <div className="w-full mx-auto lg:flex lg:justify-around grid grid-cols-2 lg:gap-0 gap-5 md:px-0 px-5">
        {FooterLinks.map((link,index) => (
          <div key={link.heading+index} className="sm:max-w-[294px] max-w-[150px] flex flex-col gap-4 text-black">
            <p className="text-body-1 font-medium md:mt-0 mt-10">{link.heading}</p>
            {link.links && (
              <div className="flex flex-col gap-3">
                {link.links.map((li) => (
                  <a className="hover:text-[#363636] duration-300" key={li.url+li.label} href={li.url}>{li.label}</a>
                ))}
              </div>
            )}
            {link.icons && (
              <div className="flex gap-6 flex-wrap mt-2">
                {link.icons.map((icon) => (
                  <a key={link.heading+icon.icon} href={icon.url} className="size-6">
                    <img className="size-full" src={icon.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-[1px] xl:w-[1192px] w-full bg-background" />
      <div className="flex items-center justify-center sm:px-0 px-5 flex-wrap gap-2 text-[#1F392C] sm:pb-[72px] pb-10">
        {CopyrightTexts.map((ct,index)=>
            <p key={ct+index}>{ct}</p>
        )}
      </div>
    </footer>
  );
};
export default Footer;

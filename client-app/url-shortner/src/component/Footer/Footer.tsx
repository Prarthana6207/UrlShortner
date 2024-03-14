import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-blue-600 text-white text-base text-center py-5 fixed bottom-0 w-full">
      Copyright &#169; URLShortner | Prarthana Jha
    </div>
  );
};

export default Footer;

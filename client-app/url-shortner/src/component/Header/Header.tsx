import * as React from "react";
import Container from "../Container/container";
import Register from "../Auth/singup";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const [toggleState, setToggleState] = React.useState<string>("toggle_1");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setToggleState((prevState) =>
      prevState === "toggle_1" ? "toggle_2" : "toggle_1"
    );
  };
  const handleSignoutClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-blue-600">
        <div className="container p-1 mx-auto">
          <nav className="flex justify-between items-center py-3">
            <div className="text-lg text-white">URLShortner</div>
            <div className="flex space-x-4">
              <button
                id={toggleState}
                className="text-lg text-white bg-transparent border border-white py-1 px-3 rounded hover:bg-white hover:text-black transition duration-300"
                onClick={handleButtonClick}
              >
                {toggleState === "toggle_1" ? "Your Urls" : "Dashboard"}
              </button>
              <button
                id={toggleState}
                className="text-lg text-white bg-transparent border border-white py-1 px-3 rounded hover:bg-white hover:text-black transition duration-300"
                onClick={handleSignoutClick}
              >
                Sign Out
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Container contentType={toggleState} />
    </>
  );
};

export default Header;

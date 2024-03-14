import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../Enviroment/enviroment";

interface IFormProps {
  updateReloadState: () => void;
}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 ">
          <h2 className="text-red-600 font-serif font-bold text-4xl text-left pb-4">
            URL Shortner
          </h2>
          <p className="text-black text-left font-serif pb-2 text-xl font-extralight">
            Paste your full Url to shorten it
          </p>

          {/* <p className="text-gray-500 text-left font-serif pb-4 text-sm font-thin ">
            Use our URL shortener, QR Codes, and Link-in-bio pages to engage
            your audience and connect them to the right information. Build,
            edit, and track everything inside the Bitly Connections Platform.
          </p> */}

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  url shortner.link /
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-2/5 p-4 ps-32 text-sm text-gray-900 border border-gray-700 rounded-lg bg-white"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-20 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-lg border border-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

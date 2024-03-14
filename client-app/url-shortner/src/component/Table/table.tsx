import * as React from "react";
import { Urldata } from "../../Interface/data";
import { Link } from "react-router-dom";
import { serverUrl } from "../../Enviroment/enviroment";
import axios from "axios";

interface ITableProps {
  data: Urldata[];
  updateReloadState: () => void;
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
  const { data, updateReloadState } = props;
  console.log("Data in DataTable is ", data);
  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
        >
          <td className="px-6 py-3 break-words">
            <Link to={item.fullUrl} target="_blank" rel="noreferrer noopener">
              {item.fullUrl}
            </Link>
          </td>

          <td className="px-6 py-3">
            <Link
              to={`${serverUrl}/shortUrl/${item.shortUrl}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-3">{item.clicks}</td>
          <td className="px-6 py-3">
            <div
              className="cursor-pointer px-2"
              onClick={() => deleteUrl(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </td>
        </tr>
      );
    });
  };
  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
    console.log(response);
    updateReloadState();
  };
  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md uppercase text-gray-50 bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">
                FullUrl
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                ShortUrl
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

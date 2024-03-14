import * as React from "react";
import Form from "../Form/form";
import { Urldata } from "../../Interface/data";
import axios from "axios";
import { serverUrl } from "../../Enviroment/enviroment";
import Table from "../Table/table";

interface IContainerProps {
  contentType: string; // Add a prop to specify the content type
}

const Container: React.FunctionComponent<IContainerProps> = ({
  contentType,
}) => {
  const [data, setData] = React.useState<Urldata[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is : ", response);
    setData(response.data);
    console.log(data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <>
      {contentType === "toggle_1" && (
        <Form updateReloadState={updateReloadState} />
      )}
      {contentType === "toggle_2" && (
        <Table updateReloadState={updateReloadState} data={data} />
      )}
    </>
  );
};

export default Container;

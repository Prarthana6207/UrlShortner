import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/container";
// import Form from './component/Form/form';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container contentType={""} />
      <Footer />
    </>
  );
};

export default App;

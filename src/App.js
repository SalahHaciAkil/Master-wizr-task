import { useState } from "react";
import { useEffect } from "react";
import apiMethods from "./api";
import "./App.scss";
import Container from "./components/Container";
import PageTitle from "./components/PageTitle";
import Slider from "./components/Slider";
import ThumbnaiIcons from "./components/ThumbnaiIcons";

const App = () => {
  const [data, setData] = useState([]);
  const [activeItemId, setActiveItemId] = useState("");

  useEffect(() => {
    apiMethods
      .getData()
      .then((data) => {
        setActiveItemId(data[0].id);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (data.length === 0) return null; // we can add a spinner
  return (
    <>
      <Container>
        <PageTitle title="MASTER WIZR Modules" />
        <ThumbnaiIcons
          activeItemId={activeItemId}
          setActiveItemId={setActiveItemId}
          data={data}
        />
        <Slider
          setActiveItemId={setActiveItemId}
          activeItemId={activeItemId}
          data={data}
        />
      </Container>
    </>
  );
};

export default App;

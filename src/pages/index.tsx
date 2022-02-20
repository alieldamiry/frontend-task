import { Button } from "@mui/material";
import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import Features from "src/Components/Home/features";
import Hero from "src/Components/Home/Hero";
import Intro from "src/Components/Home/Intro";
import Appbar from "src/Components/Layout/Appbar";

const Home: NextPage = ({ weatherData }: any) => {

  return (
    <div>
      <Appbar weatherData={weatherData} />
      <Hero />
      <Intro />
      <Features />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=47dabdb70f29b8d91fab924df38b3def"
  );

  return {
    props: { weatherData: response.data }, // will be passed to the page component as props
  };
}
export default Home;

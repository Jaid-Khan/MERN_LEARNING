import React from "react";
import Card from "../components/Card";
import CounterApp from "../components/CounterApp";
import Livetyping from "../components/Livetyping";
import ValueShowerUsingContext from "../components/ValueShowerUsingContext";

const Home = () => {
  return (
    <div>
      <Card
        name={"Parcel"}
        img={
          "https://plus.unsplash.com/premium_photo-1681488229881-d733064c22cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmNlbHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <CounterApp />
    <Livetyping/>
    <ValueShowerUsingContext/>
    </div>
  );
};

export default Home;

import React from "react";
import UserContext from "../Context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./liked.css";
import axios from "axios";
import Header from "../components/Header";

function Liked() {
  const { id, setId } = useContext(UserContext);
  const navigate = useNavigate();
  const [likedMovies, setLikedMovies] = useState([]);
  useEffect(() => {
    if (id == "") {
      navigate("/login");
    }
  });

  useEffect(() => {
    if (id != "") {
      axios.get(`http://localhost:9000/liked?id=${id}`).then((res) => {
        console.log(res.data);
        setLikedMovies(res.data);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="all-movies">
        {likedMovies.map((movie, index) => {
          return (
            <div key={index} className="indi_movies">
              {movie}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Liked;

import UserContext from "../Context/UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css";
import Header from "../components/Header";

function Home() {
  const { id, setId } = useContext(UserContext);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (id == "") {
      navigate("/login");
    }
  });

  useEffect(() => {
    axios.get("http://localhost:9000/movies").then((res) => {
      // console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const like = (movie)=>{
    axios.get(`http://localhost:9000/liked_movies?id=${id}&movie=${movie}`).then((res)=>{
      // console.log("Liked", movie);
    })
  }

  return (
    <>
    <Header/>
      <div className="all-movies">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="indi_movies">
              {movie}
              <div className="heart-icon" onClick={()=>{like(movie)}}>
                <svg
                  viewBox="0 0 16 16"
                  height={20}
                  width={20}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

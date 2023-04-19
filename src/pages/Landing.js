import React from "react";
import { Logo } from "../components";
import career from "../assets/images/career.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Looking for a job can be a challenging and time-consuming process,
            particularly if you're applying to multiple positions
            simultaneously. Fortunately, Job GPS can help make the process
            easier and more organized.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={career} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

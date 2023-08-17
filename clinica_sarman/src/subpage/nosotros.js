import React from "react";
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";

//Home page content
function About_us() {
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <Footer/>
      </React.Fragment>
    );
  }

export {About_us};
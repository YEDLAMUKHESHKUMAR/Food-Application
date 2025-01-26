import User from "../components/User";
import React from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>Welcome to About us page</h1>
//       <User name={"Mukhesh"} location={"Vizag"} contact={"1111111111"} />
//     </div>
//   );
// };

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to About us page</h1>
        <User name={"Mukhesh"} location={"Vizag"} contact={"1111111111"} />
      </div>
    );
  }
}

export default About;

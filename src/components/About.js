import Profile from "./ProfileClass";
import React from "react"

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor")
  }

  componentDidMount() {
    console.log("Parent - CompopnentDidMount");
  }

  render() {
    console.log("Parent - render")
    return (
      <div className = "not-found">
        This is about component.
        <Profile name = {"First Child"}/>
      </div>
    )
  }
}

export default About;

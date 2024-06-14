import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name : "Dummy Name",
        location : "Dummy location"
      }
    }
    console.log(this.props.name, " - Constructor")
  }

  async componentDidMount() {
    console.log("started for ", this.props.name);
    const data = await fetch("https://api.github.com/users/PrashamModi");
    const json = await data.json();
    this.setState({
      userInfo : json,
    })
    console.log(json);
    console.log(this.props.name, " - CompopnentDidMount");
  }

  componentDidUpdate(){
    console.log("Component Did Update")
  }

  render() {
    console.log(this.props.name, " - Render")
    return (
      <div className = "not-found">
        This is Profile component name {this.props.name}.
      </div>
    )
  }
}
 export default Profile;

//sequence of calling
//Constructor => render => componentDidMount
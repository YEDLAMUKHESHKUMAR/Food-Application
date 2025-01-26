import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        avatar_url:"https://dummy",
      },
    };
  }
  async componentDidMount() {  // 11
    const data = await fetch("https://api.github.com/users/YEDLAMUKHESHKUMAR");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const {avatar_url, login, followers, following } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{login}</h2>
        <h2>followers : {followers}</h2>
        <h2>following : {following}</h2>
      </div>
    );
  }
}

export default User;

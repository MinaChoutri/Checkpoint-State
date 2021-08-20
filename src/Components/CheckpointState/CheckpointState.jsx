import React, { Component } from "react";

export default class CheckpointState extends Component {
  state = {
    fullName: "Amina Choutri",
    bio: "Passionate about the digital world and thanks to my experience in the field, notably as Digital Marketing Manager at Glinted Group, I have acquired solid knowledge in content management, inbound marketing, the implementation of digital strategies on different channels, and the handling of digital tools. Ambitious and always in search of new knowledge, I continuously reinforce my skills through self-training.    I prefer teamwork, which allows me to bring out all my creative potential and encourage all initiatives.",
    imgSrc: "./pp.png",
    profession: "Future Fullstack developer",
    shows: true,
    counter: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div> {this.state.counter} </div>
        <h2>Full name : {this.state.fullName} </h2>

        <p> Personal profile : {this.state.bio} </p>

        <p> Profession : {this.state.profession} </p>

        {this.state.shows && <img src={this.state.imgSrc} alt="" />}

        <div>
          <button
            onClick={() => {
              this.setState({
                shows: !this.state.shows,
              });
            }}
          >
            Toggle
          </button>
        </div>
      </div>
    );
  }
}

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: 'Press button' };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyCode = this.handleKeyCode.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyCode);
  }

  componentWillMount() {
    document.removeEventListener('keydown', this.handleKeyCode);
  }

  handleClick(event) {
    document.getElementById(event.target.value).play();
    this.setState({
      drum: event.target.id });

  }

  handleKeyCode(event) {
    document.getElementById(String.fromCharCode(event.keyCode)).play();
    this.setState({
      drum: document.getElementById(String.fromCharCode(event.keyCode)).parentElement.id });

  }

  render() {
    return (
      React.createElement("div", { id: "container" },
      React.createElement("div", { id: "display" }, this.state.drum),
      React.createElement("div", { id: "drum-machine" },
      React.createElement("button", { className: "drum-pad", id: "Heater-1", value: "Q", onClick: this.handleClick }, "Q",
      React.createElement("audio", { className: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-2", value: "W", onClick: this.handleClick }, "W",
      React.createElement("audio", { className: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-3", value: "E", onClick: this.handleClick }, "E",
      React.createElement("audio", { className: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-4", value: "A", onClick: this.handleClick }, "A",
      React.createElement("audio", { className: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-5", value: "S", onClick: this.handleClick }, "S",
      React.createElement("audio", { className: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-6", value: "D", onClick: this.handleClick }, "D",
      React.createElement("audio", { className: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-7", value: "Z", onClick: this.handleClick }, "Z",
      React.createElement("audio", { className: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-8", value: "X", onClick: this.handleClick }, "X",
      React.createElement("audio", { className: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })),

      React.createElement("button", { className: "drum-pad", id: "Heater-9", value: "C", onClick: this.handleClick }, "C",
      React.createElement("audio", { className: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" })))));




  }}
;

ReactDOM.render(React.createElement(Drum, null), document.getElementById('root'));
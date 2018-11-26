import React from "react";

export default class Skin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, focused: false };
    this._controller = new window.AbortController();
    this._handleLoad = this._handleLoad.bind(this);
    this._ref = null;
  }

  _getPriority() {
    return this.props.isOverscan ? 1 : 0;
  }

  _handleLoad() {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    if (!this.state.loaded) {
      this._controller.abort();
    }
  }

  render() {
    return (
      <div
        className={"skin"}
        ref={node => (this._ref = node)}
        style={{
          position: "absolute",
          // Ideally the final backgroundColor would be black
          // But that makes our opacitly transition kinda funky
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height,
          top: this.props.top,
          left: this.props.left,
          cursor: "pointer"
        }}
      >
        <img
          src={this.props.src}
          className={`screenshot ${this.state.loaded ? "loaded" : ""}`}
          onLoad={this._handleLoad}
          onClick={() => {
            const { top, left } = this._ref.getBoundingClientRect();
            this.props.selectSkin(this.props.hash, { top, left });
          }}
        />
      </div>
    );
  }
}

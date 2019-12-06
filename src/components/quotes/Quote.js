import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div className="card">
        <div
          className="body"
          style={{
            backgroundImage: `url('${this.props.background}')`,
            backgroundSize: "cover"
          }}
        >
          <p className="quote">{this.props.quote}</p>
        </div>
        <div className={`footer  ${this.props.category}`}>
          <div className="top">
            <h3 className="author">{this.props.author}</h3>
            <p className="category">{this.props.category}</p>
            <p className="date">{this.props.date.toString()}</p>
          </div>
          <div className="bottom">
            <div className="tags">
              {this.props.tags.map((tag, index) => (
                <span className={["tag", tag].join(" ")} key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

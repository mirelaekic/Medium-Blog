import React from "react";
import "./styles.scss";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
class ArticleItemDetail extends React.Component {
differenceDays = (date) => {
    const diff = moment(this.props.article.createdAt).fromNow();
    return diff;
  };
  render() {
    return (
      <div className={"pr-3"}>
        <div className={"d-flex align-center mb-2"} onClick={() => this.props.history.push(`/read/${this.props.article._id}`)}>
          <img
          alt="cover"
            style={{ width: "20px", height: "20px" }}
            src={
              "https://miro.medium.com/fit/c/20/20/1*xF11-TSkpJSCgLc75f-DFw.jpeg"
            }
          />

          <span className={"author"}>

              <b onClick={() => this.props.history.push(`/read/${this.props.article._id}`)}>{this.props.article.author} </b> in <b>{this.props.article.category}</b>
           
          </span>
        </div>

          <span
          onClick={() => this.props.history.push(`/read/${this.props.article._id}`)}
            className={"heading"}
            style={{
              fontSize: this.props.headingFont === "small" ? "16px" : "22px",
              lineHeight: this.props.headingFont === "small" ? "20px" : "28px",
            }}
          >
            {this.props.article.headLine}
          </span>

        {this.props.subheading && (
          <div className={"subheading"}>
            <p onClick={() => this.props.history.push(`/read/${this.props.article._id}`)}> 
              {this.props.article.subHead}
            </p>
          </div>
        )}
        <div className={"d-flex align-baseline justify-between mt-2"}>
          <h4 className={"date"}>
            <div className={"d-flex"}>
              <span>{this.differenceDays(this.props.article.createdAt)}</span>
              <div>
                <span>
                  <span>·</span>
                </span>
              </div>

              <span>
                <span>4 min read</span>
              </span>
            </div>
          </h4>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleItemDetail);

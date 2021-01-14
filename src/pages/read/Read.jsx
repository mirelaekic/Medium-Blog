import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./index.scss";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import Reactions from "../../components/Reactions/Reactions"
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
class Read extends Component {
  differenceDays = (date) => {
    const diff = moment(this.state.article.createdAt).fromNow();
    return diff;
  };
  state = {
    article: {},
  };
  fetchArticle = async (id) => {
    try {
      let response = await fetch("http://localhost:3003/articles/" + id, {
        method: "GET",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ article: data });
        console.log(this.state.article, "WOHO");
      } else {
        alert("u didnt fetch right");
      }
    } catch (error) {
      console.log(error);
    }
  };
componentDidMount() {
  this.fetchArticle(this.props.match.params.id)
}
  render() {
    const {article} = this.state;
    console.log(article, "CURRENT")
    return (
      <Container className="article-container">
        <h1>{article.headLine}</h1>
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col xs={1}>
            <Avatar style={{ width: 50, height: 50 }} alt={article.author} src="/static/images/avatar/1.jpg" />
          </Col>
          <Col>
            {article.author}
            <p>{this.differenceDays(article.createdAt)}</p>
          </Col>
          <Col>
            <div
              style={{
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <IoLogoTwitter />
              <IoLogoLinkedin />
              <IoLogoFacebook />
              <IoBookmarkOutline />
            </div>
          </Col>
        </Row>
        <p>{article.subHead}</p>
        <p>{article.content}</p>
        <Reactions articleId={article._id}/>
      </Container>
    );
  }
}

export default withRouter(Read);

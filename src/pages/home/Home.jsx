import React, { Component } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { IoBookmarksOutline } from "react-icons/io5";
import ArticleListItem from "../../components/ArticleListItem/ArticleListItem";
import Footer from "../../components/Footer/Footer";
import PeopleList from "../../components/PeopleList/PeopleList";
import TopicsToFollow from "../../components/TopicsToFollow/TopicsToFollow";
import "./styles.scss";
import {Redirect} from "react-router-dom"

export default class Home extends Component {
  state = {
    articles: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch("https://medium-be.azurewebsites.net/", {
        method: "GET",
        mode: "cors",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ articles: data });
        console.log(this.state.articles, "WOHO");
      } else {
        alert("u didnt fetch right");
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    <Redirect to='/login/register'/>
  }
  render() {
    if(!localStorage.getItem("user")){
      return <Redirect to='/login/register'/>
  }
    const { articles } = this.state;
    console.log("THE CURRENT STATE ARRAY", articles);
    return (
      <Container key={articles._id}>
        <Button onClick={this.logout}variant="outline-secondary">Log out</Button>
        <Row
          key={articles._id}
          className={"row-cols-lg-3 pb-4"}
          style={{ borderBottom: "1px solid rgba(230, 230, 230, 1)" }}
        >
          <Col key={articles._id}>
            {articles.slice(6, 7).map((article) => (
              <ArticleListItem
                article={article}
                articleImg={"top"}
                headingFont={"large"}
                subheading
                key={article._id}
              />
            ))}
          </Col>
          <Col key={articles._id} className={"flex-column w-100"}>
            {articles.slice(1, 5).map((article) => (
              <ArticleListItem
                articleImg={"left"}
                headingFont={"small"}
                article={article}
                key={article._id}
              />
            ))}
          </Col>

          <Col>
            <PeopleList />
            <TopicsToFollow />
          </Col>
          <Col className={""}>{/*<TagsList />*/}</Col>
        </Row>
        <Row className={"py-4 mt-4"}>
          <Col className={"col-lg-8 pr-5 pl-2"} key={articles._id}>
            {articles.slice(6).map((article) => (
              <ArticleListItem
                articleImg={"left"}
                headingFont={"large"}
                subheading
                article={article}
                key={article._id}
              />
            ))}
          </Col>
          <Col key={articles._id} className={"col-lg-4 "}>
            <div
              key={articles._id}
              className={"flex-column py-4 px-4 w-100"}
              style={{ backgroundColor: "rgb(250, 250, 250)" }}
            >
              <div className={"mb-4 title"} key={articles._id}>
                {" "}
                <IoBookmarksOutline
                  key={articles._id}
                  style={{ fontSize: 20 }}
                />{" "}
                <span className={"ml-2"}>READING LIST </span>
              </div>
              {articles.slice(0, 3).map((article) => (
                <ArticleListItem
                  key={article._id}
                  headingFont={"small"}
                  article={article}
                />
              ))}
            </div>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

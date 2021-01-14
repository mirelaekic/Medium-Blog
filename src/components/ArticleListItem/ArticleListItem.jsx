import React from "react";
import ArticleItemDetails from "../ArticleItemDetails/ArticleItemDetails";
import "./styles.scss";
class ArticleListItem extends React.Component {
  render() {
    const {article} = this.props;
    return (
      <div
        className={`w-100 d-flex mb-auto justify-content-between align-start  pb-4 ${
          this.props.articleImg === "top" && "flex-column-reverse"
        }`}
      >
          <ArticleItemDetails article={article} key={article._id} />
        {this.props.articleImg && (
            <img
            alt="cover"
              className={
                this.props.articleImg === "top" ? "img-large" : "img-small"
              }
              src={article.cover}
            />
        )}
      </div>
    );
  }
}

export default ArticleListItem;

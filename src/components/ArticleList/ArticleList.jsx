import { Component } from "react";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import { List } from "./ArticleListStyled";

export class ArticleList extends Component {
  render() {
    return (
      <List>
        {this.props.articles.map(({ objectID, url, title }) => (
          <ArticleItem id={objectID} key={objectID} url={url} title={title} />
        ))}
      </List>
    );
  }
}

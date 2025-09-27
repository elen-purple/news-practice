import { Component } from "react";
import { Item, Link } from "./ArticleItemStyled";

export class ArticleItem extends Component {
  render() {
    return (
      <Item id={this.props.id}>
        <Link href={this.props.url} target="_blank" rel="noreferrer noopener">
          {this.props.title}
        </Link>
      </Item>
    );
  }
}

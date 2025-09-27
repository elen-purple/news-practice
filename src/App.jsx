import { Component } from "react";
import { ArticleList } from "./components/ArticleList/ArticleList";
import axios from "axios";
import { Main } from "./AppStyled";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Message } from "./components/ArticleList/ArticleListStyled";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get("/search?query=react");
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, error, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Main>
          {error && (
            <Message>Whops, something went wrong: {error.message}</Message>
          )}
          {isLoading ? (
            <Message>Loading...</Message>
          ) : (
            <ArticleList articles={articles} />
          )}
        </Main>
      </>
    );
  }
}

export default App;

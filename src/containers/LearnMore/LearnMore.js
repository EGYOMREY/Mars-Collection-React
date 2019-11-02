import React, { Component } from "react";

import FigureObject from "../../components/UI/FigureObject/FigureObject";
import InformativeArticle from "../../components/InformativeArticle/InformativeArticle";
import * as actions from '../../store/actions/index';
import { connect } from "react-redux";
import Loader from '../../components/UI/Loader/Loader';
import "./LearnMore.css";

const ROVER_INFORMATION = [{name: "Curiosity"},{name: "Opportunity"},{name: "Spirit"}];

class LearnMore extends Component {

componentDidMount () {
  this.props.loadArticlesFromServer();
}

  render() {
    //// ARTICLES
    const marsSection = this.props.marsData;
    const articles = marsSection.map((art, index) => {
      return <InformativeArticle key={index} articleInfo={art.article} />;
    });
    //// ROVER PICTURES
    const roverFigures = ROVER_INFORMATION.map((ob, index) => {
      return (
        <FigureObject
          pictureName={ob.name}
          key={index}
        />
      );
    });


    return (
      <div className="mars-main">
        <section className="mars-section">
          {this.props.loading ? <Loader /> : articles}
          <h2>Meet the Rovers!</h2>
          <div className="rovers">{roverFigures}</div>
          <footer className="mars-article__footer">
            <h3>Resources: learn more</h3>
            <ul>
              <li>
                <a href="https://mars.nasa.gov/allaboutmars/">
                  Mars Exploration website
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Timekeeping_on_Mars">
                  Timekeeping in Mars
                </a>
              </li>
              <li>
                <a href="https://mars.nasa.gov/">Mars exploration program</a>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.learnMore.loading,
    marsData: state.learnMore.marsData
  };
}

const mapDispatchToProps = dispatch => {
    return {
        loadArticlesFromServer: () => dispatch(actions.loadArticlesFromServer())
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(LearnMore);

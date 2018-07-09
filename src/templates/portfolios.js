import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`;
const ListItem = styled.li`
  margin-bottom: 2rem;
  & h3 {
    margin-bottom: 0.25em;
    font-weight: 600;
    color: ${props => props.theme.colors.primaryBlue};
  }
  &:hover a {
    text-decoration: underline;
  }
`;

const Porfolios = () => {
  return (
    <div style={{ marginLeft: 13 }}>
      <h2>Portfolios</h2>
      <List>
        <ListItem>
          <h3>
            <a
              href="https://victoria-guardian.tk"
              target="_blank"
              rel="noopener"
            >
              Victoria Guardian
            </a>
          </h3>
          <p class="item-desc">
            Victoria Guardian is committed to addressing the issue of invasive
            species in Victoria. The website is built with React, Node.js and
            MongoDB. The image recognition is boosted by Google Vision API. The
            website is currently hosted on Google Cloud Platform.
          </p>
        </ListItem>
        <ListItem>
          <h3>
            <a
              href="https://greatstart.yamahabackstage.com.au/"
              target="_blank"
              rel="noopener"
            >
              Off to A Great Start
            </a>
          </h3>
          <p class="item-desc">
            Off to A Great Start is Yamaha Music Australia's official website
            for music instrument. This website is built with .NET MVC and MS
            SQL. It is visually responsive on both desktop and mobile.{' '}
          </p>
        </ListItem>
        <ListItem>
          <h3>
            <a
              href="https://dontry-ios-calculator.herokuapp.com/"
              target="_blank"
              rel="noopener"
            >
              React iOS-like Calculator
            </a>
          </h3>
          <p class="item-desc">
            A iOS-like calculator built with React, Redux and tested with Jest
            and Cypress.
          </p>
        </ListItem>
        <ListItem>
          <h3>
            <a
              href="https://react-blogpost-client-2018.herokuapp.com/"
              target="_blank"
              rel="noopener"
            >
              React Blog Post Demo
            </a>
          </h3>
          <p class="item-desc">
            This is a full stack project. The back-end is a RESTful api server
            written in Express.js. The client side is developed in React.
          </p>
        </ListItem>
        <ListItem>
          <h3>
            <a
              href="https://react-myreads-2018.herokuapp.com/"
              target="_blank"
              target="_blank"
              rel="noopener"
            >
              React Book Management
            </a>
          </h3>
          <p class="item-desc">
            This is a React front-end project. Users can manage and search books
            with this app.
          </p>
        </ListItem>
        <ListItem>
          <h3>
            <a
              href="http://frontend-avatar.github.io/baidu_frontend_projects/"
              target="_blank"
              rel="noopener"
            >
              Front-end Code Camp
            </a>
          </h3>
          <p class="item-desc">
            It's a showcase of front-end coding tasks ranging from fundamental
            HTML static webpage to sophisitcated hand-coding interactive
            animation.
          </p>
        </ListItem>
      </List>
    </div>
  );
};

export default Porfolios;

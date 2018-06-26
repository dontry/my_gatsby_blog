import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`;
const ListItem = styled.li`
  & h3{
    font-weight: 600;
    color: ${props => props.theme.colors.primaryBlue};
  }
  &:hover a {
    text-decoration: underline;
  }
`;

const Porfolios = () => {
  return (
    <div style={{marginLeft: 13}}>
      <h2>Portfolios</h2>
      <List>
        <ListItem>
          <a href="https://victoria-guardian.tk" target="_blank" rel="noopener">
            <h3>Victoria Guardian</h3>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://react-blogpost-client-2018.herokuapp.com/"
            target="_blank"
            target="_blank"
            rel="noopener"
          >
            <h3>React Blog Post Demo</h3>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="http://frontend-avatar.github.io/baidu_frontend_projects/"
            target="_blank"
            rel="noopener"
          >
            <h3>Baidu frontend Codecamp</h3>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="http://dontry.github.io/ava_homepage/"
            target="_blank"
            rel="noopener"
          >
            <h3>Online course homepage</h3>
          </a>
        </ListItem>
      </List>
    </div>
  );
};

export default Porfolios;

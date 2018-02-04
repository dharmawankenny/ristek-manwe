/**
*
* EncyclopediaAccordion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Chevron from 'images/chevron.png';

import { media } from 'common/theme';

class EncyclopediaAccordion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { expanded } = this.state;
    const { title, content } = this.props.item;

    return (
      <Accordion onClick={this.toggle}>
        <Heading expanded={expanded}>
          <h4>{title}</h4>
          <img src={Chevron} alt="drop" />
        </Heading>
        {expanded &&
          <Content dangerouslySetInnerHTML={{ __html: content }} />}
      </Accordion>
    );
  }
}

EncyclopediaAccordion.propTypes = {
  item: PropTypes.object.isRequired,
};

const Accordion = styled.button`
  width: 100%;
  transition: 0.25s ease all;
  color; ${(props) => props.theme.color.dark};
  margin: 1rem 0 0;
  padding: 0;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0.5rem 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.color.snow};

  h4 {
    margin: 0 1rem 0 0;
    flex: 1;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    text-align: left;

    ${media('mobile')} {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  img {
    height: 0.75rem;
    width: auto;
    transform: rotate(${(props) => props.expanded ? '180deg' : '0deg'});
    transition: 0.5s ease all;
  }
`;

const Content = styled.p`
  margin: 1rem 0 2rem;
  font-size: 1rem;
  line-height: 2;
  text-align: left;
  opacity: 0.75;
`;


export default EncyclopediaAccordion;

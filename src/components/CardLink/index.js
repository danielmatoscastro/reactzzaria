import React from 'react';
import { Link } from 'react-router-dom';
import StyledCardActionArea from './style';

const CardLink = (props) => (
  <StyledCardActionArea component={Link} {...props} />
);

export default CardLink;

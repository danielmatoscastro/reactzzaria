import styled from 'styled-components/macro';
import { CardActionArea } from '@material-ui/core';

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3, 0)};
  min-width: 250px;
`;

export default StyledCardActionArea;

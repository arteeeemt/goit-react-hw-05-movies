import styled from 'styled-components';

export const ReviewItem = styled.li`
  font-family: 'Trebuchet MS', 'Lucida Sans';
  padding: 7px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-left: 10px solid #f05d22;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;

  &:nth-child(2n + 0) {
    border-color: #8bc63e;
  }

  &:nth-child(3n + 0) {
    border-color: #fcba30;
  }

  &:nth-child(4n + 0) {
    border-color: #1ccfc9;
  }

  &:nth-child(5n + 0) {
    border-color: #493224;
  }
`;

export const ReviewList = styled.ul`
  margin-top: 15px;
`;
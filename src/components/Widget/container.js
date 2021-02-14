import styled from 'styled-components';

const WidgetContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding-top: 405px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default WidgetContainer;
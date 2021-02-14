import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 100px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.color1};
  border-radius: 4px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    margin-top: 530px;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 5px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
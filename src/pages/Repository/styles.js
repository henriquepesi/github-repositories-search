import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const IssueFilter = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  button {
    padding: 6px 15px;
    border-radius: 4px;
    margin: 0 10px;
    color: #7159c1;
    border: 1px solid #7159c1;
    background: none;
    min-width: 100px;
  }
`;

export const PageActions = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  button {
    padding: 6px 15px;
    border-radius: 4px;
    margin: 0 10px;
    color: #7159c1;
    border: 1px solid #7159c1;
    background: none;
    min-width: 100px;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 16px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
      padding: 5px;
      /* border: 1px solid #0099f3; */
      margin-left: 10px;
      background: #0099f3;
      font-weight: bolder;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          padding: 5px;
          margin-left: 10px;
          background: #0099f3;
          font-weight: bolder;
          font-size: 12px;
          border-radius: 5px;
          color: #fff;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

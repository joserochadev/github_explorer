import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #a8a8b3;
    display: flex;
    align-items: center;
    transition: color 0.2ms;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        color: #3d3d4d;
        font-size: 36px;
      }
      span {
        display: block;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    text-decoration: none;
    width: 100%;
    padding: 24px;
    display: block;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbdb;
    }
  }
`

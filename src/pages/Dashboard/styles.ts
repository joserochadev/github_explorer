import { shade } from 'polished'
import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`
interface FormProps {
  hasError: boolean
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    height: 70px;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 250px;
    background: #04d361;
    color: #fff;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

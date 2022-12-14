import { createGlobalStyle } from 'styled-components'

import githubBackground from '../assets/github-background.svg'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: Roboto, sans-serif;
        font-size: 16px;
    }
    
    button{
        cursor: pointer;
        border: none;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
`

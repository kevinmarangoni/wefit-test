import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: 1px dashed ${props=> props.theme.color.font.primary};
        color: ${props=> props.theme.color.font.primary};
        font-family: 'Abel', sans-serif;
    }
    a{
        text-decoration: none;
    }
    
    html{
        background-color: ${props=> props.theme.color.primary.main};
        width: 100vw;
        height: 100vh;
    }

    body{
        width: 100%;
        height: 100%;
    }
`
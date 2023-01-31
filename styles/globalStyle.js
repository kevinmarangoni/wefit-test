import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        border: 1px dashed ${props=> props.theme.color.font.primary};
        
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${props=> props.theme.color.font.primary};
        font-family: ${props=> props.theme.color.font.family};
        font-size: ${props=> props.theme.color.font.size.m};
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
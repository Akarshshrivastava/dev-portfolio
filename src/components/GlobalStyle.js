import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        --dark-bg : #171010;
        --brand-red : #D05353;
        background: var(--dark-bg);
        color: #f6f6f6;
        font-family: 'Inter', sans-serif;
    }
    h1{
        font-size: 48px;
    }
    h2{
        font-size: 30px;
        font-weight: 500;
    }
    h3{
        font-size: 26px;
        font-weight: 500;
    }
    p{
        font-size: 20px;
    }
`;
export default GlobalStyle;

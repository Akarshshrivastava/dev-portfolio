import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        /* --dark-bg : #1e1e1e; */
        --dark-bg : #010409;
        --dark-secondary:#0d1117;
        --dark-border : #30363d;
        --dark-border-hover : #6A7A8C;
        --brand-red : #D05353;
        --light-col : #f6f6f6;
        background: var(--dark-bg);
        color: #f6f6f6;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
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
    h4{
        font-size: 22px;
        font-weight: 500;
    }
    h5{
        font-size: 18px;
        font-weight: 500;
    }
    p{
        font-size: 20px;
    }
    @media (max-width: 1024px) {
    h1{
        font-size: 36px;
    }
    h2{
        font-size: 24px;
    }
    p{
        font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 22px;
    }
    h3{
        font-size: 24px;
        font-weight: 500;
    }
    h4{
        font-size: 20px;
        font-weight: 500;
    }
    h5{
        font-size: 16px;
        font-weight: 500;
    }
    p{
        font-size: 16px;
    }
    }

`;
export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    body{
        --dark-bg : #010409;
        --dark-secondary:#0d1117;
        --dark-border : #30363d;
        --dark-border-hover : #6A7A8C;
        --brand-red : #D05353;
        --light-col : #f6f6f6;
        color: var(--light-col);
        background: var(--dark-bg);
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    h1{
        font-size: 48px;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
    }
    h3{
        font-size: 24px;
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
        font-size: 22px;
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
        font-size: 24px;
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
        font-weight: 300;
    }
    p{
        font-size: 18px;
        font-weight: 300;
        line-height: 1.5;
    }
    @media (max-width: 480px) {
        h3{
            font-size: 20px;
            font-weight: 500;
        }
    }

}

`;
export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../common/types/theme';

const ResetCss = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
      font-weight:normal;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
      list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;

      font-size: ${props => (props.theme as ThemeType).fonts.size._14};
      font-weight: 400;
      background-color: ${props => (props.theme as ThemeType).color.lightYellow};
      color: ${props => (props.theme as ThemeType).color.black10};
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 100%;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
      box-shadow: none;
    }
    
    :active, :hover, :focus {
      outline: 0;
      outline-offset: 0;
    }

    button:active, button:focus {
      outline: none;
    }
    button::-moz-focus-inner {
      border: 0;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
      scroll-behavior: auto;
      }
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
`;

export default ResetCss;

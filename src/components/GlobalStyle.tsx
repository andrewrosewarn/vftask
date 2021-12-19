// Create global styles to style elements which are not scoped to components

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(243, 246, 243);
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
`;

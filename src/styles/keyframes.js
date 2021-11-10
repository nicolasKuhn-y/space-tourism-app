const { keyframes } = require("styled-components");

export const slideLeft = keyframes`
    from { transform: translateX(-100%); }

    to { transform: translateX(0%); }
`;

export const slideUp = keyframes`
    from { transform: translateY(100%); }

    to { transform: translateY(0%); }
`;

export const slideRight = keyframes`
    from { transform: translateX(100%); }

    to { transform: translateX(0%); }
`;

export const loading = keyframes`
    from { 
        transform: translateY(0%);

    }

    to { 
        transform: translateY(35%);
    }
`;

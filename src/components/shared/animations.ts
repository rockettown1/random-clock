import { keyframes } from "styled-components";

export const toGlow = keyframes`
from {
    text-shadow: none;
}
to {
    text-shadow: 0 0 0px #fff, 0 0 10px #fff, 0 0 21px #a9e4e0, 0 0 42px #145088;
}
`;
export const fromGlow = keyframes`
from {
    text-shadow: 0 0 0px #fff, 0 0 10px #fff, 0 0 21px #a9e4e0, 0 0 42px #145088;
}
to {
    text-shadow: none;
}
`;

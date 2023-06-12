import React from 'react';
import styled from 'styled-components';

const ScrollupStyle = styled.a`
    position: fixed;
    right: 1rem;
    bottom: -30%;
    background-color: var(--body-color);
    box-shadow: 0 4px 12px hsl(207, 24%, 35%, 0.15);
    display: inline-flex;
    padding: 0.35rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    color: var(--title-color);
    z-index: var(--z-tooltip);
    transition: bottom 0.3s, transform 0.3s;

    &.show {
        bottom: 7.5rem;
    }

    &:hover {
        transform: translateY(-0.25rem);
    }
`;

const ScrollUp = () => {
    return (
        <ScrollupStyle href="#" className="scrollup " id="scroll-up">
            <i className="ri-arrow-up-line"></i>
        </ScrollupStyle>
    );
};

export default ScrollUp;

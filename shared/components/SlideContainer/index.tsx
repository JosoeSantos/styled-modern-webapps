import React from 'react';
import styled from 'styled-components';

interface SlideContainerProps {
    children: React.ReactNode 
}

const StyledContainer = styled.div`
    --height: 43vw;
    background-color: #FFF;
    height: var(--height);
    width: calc(calc(var(--height) / 3) * 4);
    justify-self: center;
    align-self: center;
    box-shadow: 5px 5px 15px 5px #0000004d;
    border-radius: 5px;
    overflow: hidden;
`;

const SlideContainer = (props: SlideContainerProps) => {
    const { children } = props;
    return (
        <StyledContainer>
            { children }
        </StyledContainer>
    );
};

export default SlideContainer;
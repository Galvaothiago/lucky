import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 4.5rem;
    padding: .5rem 5rem;

    background-image: linear-gradient(to right, #1b4332, #2d6a4f);
    color: #fff;

    @media(max-width: 600px) {
        padding: 1rem;
        font-size: .86rem;
    }

    h1 {
        font-weight: 300;
    }

    span {
        font-size: 1.4rem;
        font-weight: 200;

        @media(max-width: 600px) {
            font-size: 1rem;
        }
    }

    button {
        background: none;
        border: 0;
        outline: none;

        cursor: pointer;
        color: #fff;
        font-size: 1rem;
    }

`

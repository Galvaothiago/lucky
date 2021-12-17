import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-items: center;
    position: fixed;
    z-index: 3;

    background: rgba(0, 0, 0, .7);
`

export const ContainerModal = styled.div`
    max-width: 45rem;
    width: 100%;
    max-height: 30rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 10px;
    background: #f2fbe0;
    position: relative;

    svg {
        position: absolute;

        top: .5rem;
        right: .5rem;
        z-index: 5;

        color: #1b4332;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const Title = styled.title`
    width: 100%;
    height: 3rem;

    display: grid;
    place-items: center;

    position: relative;

    h3 {
        font-size: 1rem;
        text-transform: uppercase;
    }   
`

export const Main = styled.main`
    width: 100%;
    height: 100%;

    overflow-y: auto;

    > div {
        width: 100%;
        min-height: 100%;
        height: auto;
        padding:1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        align-items: center;
    }
`

export const ContainerResult = styled.div`
    width: 70%;
    min-height: 10rem;
    height: 100%;
    padding: .4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    background-color: white;
    position: relative;

    p {
        position: absolute;

        width: 1.5rem;
        height: 1.5rem;

        top: .5rem;
        right: .5rem;

        padding: .5rem;
        text-align: center;
        line-height: .5rem;
        background: green;

        border-radius: .75rem;
        font-size: .75rem;
        font-weight: bold;

        color: white;
    }

    span {
        display: block;
        padding: .5rem .5rem;
        background: #f1faee;
    
        letter-spacing: .25rem;
    
        & + span {
            margin-top: 1rem;
        }
    }
`
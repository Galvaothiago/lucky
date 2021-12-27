import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 4.5rem);

    display: grid;
    place-items: center;
    background: #f2fbe0;

    overflow-y: auto;
    overflow-x: hidden;


    @media(max-width: 535px) {
        display: flex;
        flex-direction: column;
    }

`

export const Container = styled.main`
    max-width: 1366px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6rem;

    padding: 3rem 5rem;

    background: #f2fbe0;

    @media(max-width: 535px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    
`

export const ContainerLeft = styled.section`
    width: 36rem;
    height: 37rem;
    padding: 0 2.1rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    @media(max-width: 535px) {
        gap: 2rem;
    }

    
`
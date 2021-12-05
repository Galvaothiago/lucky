import styled from 'styled-components'
import { createBreakpoint } from 'styled-components-breakpoint'

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }

const breakpoint = createBreakpoint(breakpoints)

export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 4.5rem);

    display: grid;
    place-items: center;
    background: #f2fbe0;

    overflow-y: auto;
`

export const Container = styled.main`
    max-width: 1366px;
    max-height: 778px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    padding: 3rem 5rem;

    background: #f2fbe0;

    ${breakpoint('sm')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;      
    `}

    

    
`

export const ContainerLeft = styled.section`
    width: 36rem;
    height: 37rem;
    padding: 0 2.1rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    ${breakpoint('sm')`
        padding: 0;
    `
    }

    
`
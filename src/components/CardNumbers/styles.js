import styled from 'styled-components'

export const ContinerCardNumbers = styled.div`
    width: 35rem;
    height: 20rem;
    // display: flex;
    // flex-direction: row;

    
    padding: 1rem;
    // align-items: center;

    background: #fff;
    
    -webkit-box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 2.5rem;

        

        // background: blue;

        & + div {
            margin-top: .7rem;
        }
    }

    button {
        width: 6rem;
        height: 1.7rem;

    
    }

`

export const Number = styled.div`
    display: flex;
   
    width: 2rem;
    height: 2rem;

    justify-content: center;
    align-items: center;

    border-radius: 2rem;

    border: .1rem solid #74c69d;
    font-weight: 500;
    font-size: .9rem;

    cursor: pointer;
`

export const NumbersClicked = styled.div`
    display: flex;
   
    width: 2rem;
    height: 2rem;

    justify-content: center;
    align-items: center;

    border-radius: 2rem;
    color: #fff;
    background: #95d5b2;

    font-weight: 500;
    font-size: .9rem;

    cursor: pointer;
`
export const ContainerFooter = styled.main`
    display: flex;
    width: 100%;
    height: 6rem;



`
export const SectionFeedback = styled.section`
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        display: flex;
        margin-top: 1.3rem;
        
        p {
            height: 2rem;
            font-size: 1.5rem;
            font-weight: 300;
            // border-bottom: .2rem solid #95d5b2; 

            & + p {
                margin-left: 1.5rem;
            }
        }
    }

    button {
        width: auto;
        height: auto;

        background: none;
        border: none;

        margin-top: 1rem;
        cursor: pointer;
        font-size: .7rem;
        font-weight: 500;

        color: #95d5b2;
    }


`

export const SectionButton = styled.div`
    width: 20%;
    height: 100%;

    button {
        width: 100%;
        height: 2rem;
        margin-top: 3rem;

        background: #1b4332;
        border-radius: 16px;
        border: none;

        cursor: pointer;
        color: #fff;
        font-size: .6rem;
        font-weight: 400;
        text-transform: uppercase;
    }
`
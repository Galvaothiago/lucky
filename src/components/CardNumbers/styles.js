import styled from 'styled-components'

export const ContinerCardNumbers = styled.div`
    max-width: 35rem;
    width: 100%;
    height: 22rem;

    @media (max-width: 510px) {
        max-width: 26rem;
        width: 100%;
    }
    
    padding: .5rem;
    background: #fff;
    
    -webkit-box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 12px -2px rgba(0,0,0,0.75);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 2.4rem;

        & + div {
            margin-top: .7rem;
        }
    }

    button {
        width: 6rem;
        height: 1.7rem;
    }

`

export const NumberStyleLight = styled.div`
    display: flex;
   
    width: 1.7rem;
    height: 1.7rem;

    justify-content: center;
    align-items: center;

    border-radius: 2rem;

    border: .1rem solid #74c69d;
    font-weight: 500;
    font-size: .9rem;

    cursor: pointer;
`

export const NumberStyleDark = styled.div`
    display: flex;
   
    width: 1.7rem;
    height: 1.7rem;

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
    margin-top: 2rem;
`
export const SectionFeedback = styled.section`
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        display: flex;
        margin-top: 1.5rem;

        p {
            height: 2rem;
            font-size: 1.3rem;
            font-weight: 500;
            padding: .6rem .2rem;
            line-height:1rem;
            border-radius: 5px;

            background-image: linear-gradient(to left top,  #40916c, #95d5b2);
            color: whitesmoke;

            @media (max-width: 510px) {
                height: 2rem;
                font-size: 1rem;
                font-weight: 600;
            }

            & + p {
                margin-left: .2rem;
            }
        }
    }
`

export const ContainerButtonNumber = styled.div`
    max-width: 15rem;
    width: 100%;
    height: auto;
    margin-top: .7rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .1rem;

     button {
        width: auto;
        height: 100%;
        padding: .5rem;
        border: 0;
        border-radius: 5px;
        background: none;

        color: green;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            background-color:  #95d5b2;
            color: black;
        }
    }
`

export const SectionButton = styled.div`
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        width: 100%;
        height: 2rem;

        background: #358f80;
        border-radius: 16px;
        border: none;

        cursor: pointer;
        color: #fff;
        font-size: .6rem;
        font-weight: 400;
        text-transform: uppercase;

        &:hover {
            filter: brightness(.9)
        }

        &:clicked {
            transform: scale(1.13);
        }
    }
`
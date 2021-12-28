import styled from "styled-components";

export const ContainerContent = styled.main`
    /* max-width: 36rem; */
    width: 35rem;
    height: 37rem;
    border-radius: 10px;

    background: #fff;

    @media (max-width: 600px) {
        max-width: 36rem;
        width: 100%;

        margin-top: -3rem;
    }
`
export const HeaderContent = styled.header`
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1rem 0 0;

    img {
        width: 8rem;
        height: auto;

        filter: brightness(.8)
    }

    p {

        font-size: 1.1rem;

        strong {
            font-size: 1.3rem;
        }
    }
`

export const ContainerResults = styled.div`
    width: 100%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.5rem;
    padding: 1rem 1rem;

    > div {
        width: 90%;
        height: 2rem;
        text-align: center;
        background: white;

        main {
            width: 100%;
            height: 100%;
            display: flex;

            div {
                width: auto;
                flex: .5;
                height: 100%;
                background-color: #d8f3dc;
                line-height: 2rem;
                font-size: .88rem;
                cursor: pointer;
                transition: all .3s;

                position: relative;

                & + div {
                    border-left: 1px solid white;
                }

                &:hover {
                    color: #bfd200;
                }

                span {
                    display: block;
                    padding: .1rem .3rem;
                    border-radius: 5px;
                    line-height: 1rem;
                    background-color: green;

                    font-size: xx-small;
                    font-weight: 400;
                    color: white;

                    position: absolute;
                    bottom: .35rem;
                    right: 2rem;

                    @media (max-width: 510px) {
                        right: .8rem;
                    }
                }
            }
        }

    }

    section {
        width: 100%;
        height: 15rem;

        margin-top: 1.5rem;
        position: relative;

        button {
            position: absolute;
            right: 1.5rem;
            bottom: -3rem;
            background: #358f80;
            border: none;
            border-radius: 15px;
            color: white;
            cursor: pointer;

            width: 5rem;
            height: 1.9rem;
        }

        p {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            span {
                display: block;
                padding: .5rem .5rem;
                background: #f1faee;
    
                letter-spacing: .25rem;
    
                & + span {
                    margin-top: 1rem;
                }
    
    
            }
        }





    }
`
export const ButtonStyleDefault = styled.div`
    div {
        flex: .5;
        height: 100%;
        background-color: #d8f3dc;
        line-height: 2rem;
        font-size: .88rem;
        cursor: pointer;
        transition: all .3s;

        & + div {
            border-left: 1px solid white;
        }

        &:hover {
            color: white;
        }

        &:clicked {
            transform: translateY(2px);
        }
}
`

export const ContainerCheckNumber = styled.div`
    width: 100%;
    height: 12rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    margin-top: .5rem;
    padding: 1.5rem 0;

    p {
        font-size: 1.1rem;
        font-weight: 500;
        margin-top: 2rem;

        cursor: pointer;
        transition: color .2s;

        &:hover {
            color:  #2d6a4f;
        }
    }

    button {
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;

        cursor: pointer;
        background-image: linear-gradient(to right bottom, #74c69d, #95d5b2);
        border: none;

        font-size: .7rem;
        text-transform: uppercase;
        color: #fff;

        &:hover {
            filter: brightness(.9);
        }
    }
`

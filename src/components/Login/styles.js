import styled from "styled-components";

export const ContainerLogin = styled.div`
    height: 100vh;
    width:100vw;

    display: grid;
    place-items: center;

    background: #49a078;

   

`

export const Sign = styled.div`
    max-width: 49rem;
    width: 100%;
    height: 27rem;

    display: flex;
    background: #ddf3c7;
    border-radius: 10px;

    box-shadow: 1px 9px 25px -9px rgba(0,0,0,0.87);

    section {
        flex: .4;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 10px 0 0 10px;

        img {
            width: 8rem;
            height: 8rem;
        }
    } 

    div {
        flex: .6;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 10px 10px 0;

        background: #74c69d;

        button {
            width: 22rem;
            height: 3.5rem;
            font-size: .87rem;
            font-weight: 800;
            text-transform: uppercase;
            border: 0;
            border-radius: 5px;   
            background: #fff;
            cursor: pointer;
            transition: all .3s;
            position: relative;

            &:hover {
                filter: brightness(.9);
            }

            svg {
                position absolute;
                left: 1rem;
                bottom: .8rem;

                font-size: 2rem;
            }
        }
    }

    // button {
    //     width: 22rem;
    //     height: 3rem;
    //     font-size: .87rem;
    //     font-weight: 800;
    //     text-transform: uppercase;
    //     border: 0;
    //     border-radius: 15px;   
    //     background: #fff;
    //     cursor: pointer;
    // }
`




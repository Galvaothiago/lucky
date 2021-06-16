import styled from "styled-components";

export const ContainerLogin = styled.div`
    height: 100vh;

    display: grid;
    place-items: center;

    background: #f2fbe0;

`

export const Sign = styled.div`
    width: 26rem;
    height: 17rem;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ddf3c7;

    box-shadow: 1px 9px 25px -9px rgba(0,0,0,0.87);


    h3 {
        font-size: 2.2rem;
        font-weight: 200;
        text-align: center;

        letter-spacing: .4rem;
    }

    button {
        width: 22rem;
        height: 3rem;
        font-size: .87rem;
        font-weight: 800;
        text-transform: uppercase;
        border: 0;
        border-radius: 15px;   
        background: #fff;
        cursor: pointer;
    }
`




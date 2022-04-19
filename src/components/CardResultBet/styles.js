import styled from 'styled-components'

export const ContainerResult = styled.div`
    max-width: 35rem;
    width: 100%;
    height: 13rem;

    background-image: linear-gradient(to left top,  #40916c, #95d5b2);
    border-radius: 4px;

    @media (max-width: 510px) {
        max-width: 29rem;
        width: 100%;
    }

    > div {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem;
    }

    main {
        width: 100%;
        height: 6rem; 
        display: flex;

        align-items: center;
        justify-content: center;

        div {
            width: 3.9rem;
            height: 5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 2rem;
            font-weight: 300;
            color: #6b6b6b;

            background: rgba(255, 255, 255, .5);

            & + div {
                margin-left: .15rem;
            }
        }
    }

    footer {
        width: 100%;
        height: 3.4rem;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        padding: .5rem 1rem;

        font-size: .8rem;

        svg {
            font-size: 1.5rem;
            cursor: pointer;
        }
   
    }
`

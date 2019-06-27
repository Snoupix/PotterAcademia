import styled from 'styled-components';

const Buttonstyle = styled.th`
position: relative;
transition: 0.5s;
letter-spacing: 1px;

button {
    width: 150px;
    height: 50px;
    font-size: 20px;
    border: none;
    color: #000;
    font-family: 'IM Fell DW Pica SC', serif;
    cursor: pointer;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
    :hover {
        opacity: 0;
    }
}`;

export default Buttonstyle;
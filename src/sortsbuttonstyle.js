import styled from 'styled-components';

const Buttonstyle = styled.div`
position: relative;
width: 150px;
height: 50px;
margin-left: 10px;
margin-right: 10px;
overflow: hidden;
border: 1px solid #a4834d;
transition: 0.5s;
letter-spacing: 1px;

button {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 20px;
    background: #a4834d;
    border: none;
    color: #fff;
    font-family: 'IM Fell DW Pica', serif;
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
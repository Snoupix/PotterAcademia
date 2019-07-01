import styled from 'styled-components';

const DarkNavbutton = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    overflow: hidden;
    font-weight: 300;
    transition: 0.5s;
    letter-spacing: 1px;
    user-select : none;

    button {
        width: 101%;
        height: 100%;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 1px;
        background: #fff;
        -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
        mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
        -webkit-mask-size: 2300% 100%;
        mask-size: 2300% 100%;
        border: none;
        color: black;
        font-family: 'IM Fell DW Pica', serif;
        cursor: pointer;
        -webkit-animation: ani2 0.7s steps(22) forwards;
        animation: ani2 0.7s steps(22) forwards;
        :hover {
            -webkit-animation: ani 0.7s steps(22) forwards;
            animation: ani 0.7s steps(22) forwards;
            cursor: inherit;
        }
    }
    .inkSpan {
        position: absolute;
        color: #fff;
        width: 101%;
        font-weight: 600;
        font-size: 20px;
        font-family: 'IM Fell DW Pica', serif;
        height : 100%;
        margin-top : 10%;
        line-height: 1;
    }
    .reliques{
        margin-top: 0px;
        letter-spacing: 1px;
        line-height: 1.25;
    }
    @media screen and (max-width: 965px){
        .reliques{
            letter-spacing: 1px;
            font-size 12px;
            margin-top: 11%;
        }
        .inkSpan, .inkButton{
            font-size: 15px;
            font-weight: 600;
        }
    }
    @-webkit-keyframes ani {
        from {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
        }
        to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
        }
    }
    @keyframes ani {
        from {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
        }
        to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
        }
    }
    @-webkit-keyframes ani2 {
        from {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
        }
        to {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
        }
    }
    @keyframes ani2 {
        from {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
        }
        to {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
        }
    }      
`;

export default DarkNavbutton;
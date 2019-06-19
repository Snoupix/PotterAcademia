import styled from 'styled-components';

const DarkNavbutton = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    overflow: hidden;
    border: 1px solid; // #000
    font-weight: 300;
    transition: 0.5s;
    letter-spacing: 1px;

    button {
        width: 101%;
        height: 100%;
        font-weight: 300;
        font-size: 20px;
        letter-spacing: 1px;
        background: #000;
        -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
        mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
        -webkit-mask-size: 2300% 100%;
        mask-size: 2300% 100%;
        border: none;
        color: #fff;
        cursor: pointer;
        -webkit-animation: ani2 0.7s steps(22) forwards;
        animation: ani2 0.7s steps(22) forwards;
        :hover {
            -webkit-animation: ani 0.7s steps(22) forwards;
            animation: ani 0.7s steps(22) forwards;
        }
    }
    .inkSpan {
        position: absolute;
        color: #000;
        text-align: center;
        width: 101%;
        font-weight: 600;
        position: absolute;
        font-size: 20px;
        margin-top: 12px; // ${props => props.nomargintop ? '0px' : '12px'};
        overflow: hidden;
    }
    .reliques{
        margin-top: -4px;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 965px){
        .reliques{
            letter-spacing: 1px;
            font-size 12px;
            margin-top: 5px;
        }
        .inkSpan, .inkButton{
            font-size: 15px;
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
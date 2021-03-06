import styled from 'styled-components';

const LightNavbutton = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    overflow: hidden;
    border: 1px solid #a4834d;
    font-weight: 300;
    transition: 0.5s;
    letter-spacing: 1px;
    user-select: none;

    button {
        width: 101%;
        height: 100%;
        font-weight: 300;
        font-size: 20px;
        letter-spacing: 1px;
        background: #a4834d;
        -webkit-mask: url("https://github.com/robin-dela/css-mask-animation/blob/master/img/nature-sprite-2.png?raw=true");
        mask: url("https://github.com/robin-dela/css-mask-animation/blob/master/img/nature-sprite-2.png?raw=true");
        -webkit-mask-size: 7100% 100%;
        mask-size: 7100% 100%;
        border: none;
        color: #fff;
        font-family: 'IM Fell DW Pica', serif;
        cursor: pointer;
        -webkit-animation: ani2 0.7s steps(70) forwards;
        animation: ani2 0.7s steps(70) forwards;
        :hover {
            -webkit-animation: ani 0.7s steps(70) forwards;
            animation: ani 0.7s steps(70) forwards;
            cursor: inherit;
        }
    }
    .inkSpan {
        position: absolute;
        color: #a4834d;
        text-align: center;
        width: 101%;
        font-weight: 600;
        position: absolute;
        font-size: 20px;
        font-family: 'IM Fell DW Pica', serif;
        margin-top: 16%;
    }
    @media screen and (max-width: 965px){
      width: 75px;
      height: 25px;
      .inkSpan, .inkButton{
        font-size: 10px;
      }
      .inkSpan{
        margin-top: 14px;
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

export default LightNavbutton;
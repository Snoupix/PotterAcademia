import styled from 'styled-components';

const Navbutton = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    overflow: hidden;
    border: 1px solid #000;
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
        -webkit-mask: url("https://github.com/robin-dela/css-mask-animation/blob/master/img/nature-sprite-2.png?raw=true");
        mask: url("https://github.com/robin-dela/css-mask-animation/blob/master/img/nature-sprite-2.png?raw=true");
        -webkit-mask-size: 7100% 100%;
        mask-size: 7100% 100%;
        border: none;
        color: #fff;
        cursor: pointer;
        -webkit-animation: ani2 0.7s steps(70) forwards;
        animation: ani2 0.7s steps(70) forwards;
        :hover {
            -webkit-animation: ani 0.7s steps(70) forwards;
            animation: ani 0.7s steps(70) forwards;
        }
    }
    .inkSpan {
        position: absolute;
        color: #000;
        text-align: center;
        width: 101%;
        font-weight: 300;
        position: absolute;
        font-size: 20px;
        margin-top: 12px;
        overflow: hidden;
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

export default Navbutton;
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  /*************/
  /* Variables */
  /*************/

  .btn-container {
    --pupil-color: rgb(156, 207, 255);
    --pupil-move: 20%;
    --sensor-height: 130dvmax;
    --sensor-width: calc(var(--sensor-height) * 82.84 / 100);

  }
  .btn-button {
    --back-color: #fff;
  }
  .btn-lid {
    --back-color: transparent;
  }

  /**********/
  /* Styles */
  /**********/

  /* Container */
  .btn-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Button */
  .btn-button {
    background: #fff;
    border: 3px solid #000;
    border-radius: 10rem;
    cursor: pointer;
    padding: 2rem;
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
  }
  .btn-button:hover,
  .btn-button:hover .btn-lid {
    animation: squint 100ms forwards;
  }
  .btn-button:active .btn-pupil {
    animation: agitate 100ms infinite 500ms;
    border-width: 0.5rem;
    padding: 1rem;
  }

  .btn-lid {
    border-radius: 10rem;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 101;
  }

  .btn-pupil {
    background: #000;
    border: 0.8rem solid var(--pupil-color);
    border-radius: 10rem;
    padding: 0.7rem;
    transition: all 200ms ease-out;
    margin-right: 8px;
  }

  .btn-text {
    font-weight: bold;
    color: #000;
    z-index: 102;
    position: relative;
  }

  /* Sensors */
  .btn-sensor {
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);
    height: var(--sensor-height);
    left: calc(50% - var(--sensor-width) / 2);
    overflow: hidden;
    position: absolute;
    top: calc(50% - var(--sensor-height) / 2);
    transform: rotate(calc(var(--a) * 1deg))
      translateY(calc(var(--sensor-height) * -50 / 100));
    width: var(--sensor-width);
    z-index: 99;
  }

  /************/
  /* Tracking */
  /************/

  .sensor-n:hover ~ .btn-button .btn-pupil {
    transform: translateX(0) translateY(calc(-3 * var(--pupil-move)));
  }
  .sensor-ne:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(2 * var(--pupil-move)))
      translateY(calc(-2 * var(--pupil-move)));
  }
  .sensor-e:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(3 * var(--pupil-move))) translateY(0);
  }
  .sensor-se:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(2 * var(--pupil-move)))
      translateY(calc(2 * var(--pupil-move)));
  }
  .sensor-s:hover ~ .btn-button .btn-pupil {
    transform: translateX(0) translateY(calc(3 * var(--pupil-move)));
  }
  .sensor-sw:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(-2 * var(--pupil-move)))
      translateY(calc(2 * var(--pupil-move)));
  }
  .sensor-w:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(-3 * var(--pupil-move))) translateY(0);
  }
  .sensor-nw:hover ~ .btn-button .btn-pupil {
    transform: translateX(calc(-2 * var(--pupil-move)))
      translateY(calc(-2 * var(--pupil-move)));
  }

  /**************/
  /* Animations */
  /**************/

  @keyframes agitate {
    0% {
      transform: scale(1.2) translate(0%, -10%);
    }

    25% {
      transform: scale(1.2) translate(-10%, 10%);
    }

    50% {
      transform: scale(1.2) translate(10%, -5%);
    }

    75% {
      transform: scale(1.2) translate(-10%, -5%);
    }

    100% {
      transform: scale(1.2) translate(10%, 10%);
    }
  }

  @keyframes squint {
    0% {
      background: var(--back-color);
    }

    25% {
      background: linear-gradient(
        0deg,
        #000 0% 9%,
        var(--back-color) 10% 90%,
        #000 91% 100%
      );
    }

    50% {
      background: linear-gradient(
        0deg,
        #000 0% 18%,
        var(--back-color) 19% 81%,
        #000 82% 100%
      );
    }

    75% {
      background: linear-gradient(
        0deg,
        #000 0% 27%,
        var(--back-color) 28% 72%,
        #000 73% 100%
      );
    }

    100% {
      background: linear-gradient(
        0deg,
        #000 0% 35%,
        var(--back-color) 36% 64%,
        #000 65% 100%
      );
    }
  }
`;
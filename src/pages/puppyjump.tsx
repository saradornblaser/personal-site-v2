import React, { useRef, useEffect } from 'react';
import Layout from '../templates/layout';

import {startGame} from '../game/gameLogic';
import './puppyjump.scss';

const NotFoundPage = () => {
  const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(
    null
  );
  useEffect(() => {
    if (canvasRef.current != null) {
      startGame();
    }
  }, [canvasRef.current]);
  return (
    <Layout description="An HTML5 canvas game where you play as a puppy collecting bones" keywords={['puppyjump', 'game', 'HTML5']}>
      <div id="canvas-wrapper">
        <h1 id="banner">PuppyJump!</h1>
        <p>
          <a href="/">↩ Back to homepage</a>
        </p>
        <canvas ref={canvasRef} id="my-canvas" width="400" height="100" ></canvas>
        <p id="points-display">0 points</p>
        <button id="replay-button" hidden={true}>Replay</button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

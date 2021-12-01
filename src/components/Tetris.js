import React, {useState} from 'react';
import { createStage } from './gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
//Styled components
import { StyledTetrisWrapper } from './styles/StyledTetris';
import { StyledTetris } from './styles/StyledTetris';

//Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


const Tetris = () => {
    // console.log(createStage())
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPosition, resetPlayer ] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log("re-render");

    const movePlayer = direction => {
        updatePlayerPosition({x:direction, y: 0})

    }

    const startGame =() => {
        //Reset everything
        setStage(createStage());
        resetPlayer();
        

    }

    const drop = () => {
        updatePlayerPosition({x:0 , y: 1 , collided: false})

    }

    const dropPlayer = () => {
        drop();

    }

    const move = ({keyCode}) => {
        //game over== no register key press
        if(!gameOver) {
            //left arrow
            if(keyCode === 37) {
                //to the left
                movePlayer(-1)
            //right arrow
            } else if (keyCode === 39) {
                //to the right
                movePlayer(1);
             //down arrow  
            } else if (keyCode === 40) {
                dropPlayer()
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={event => move(event)}>
            
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text = "Game Over"/>
                    ):(
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
        
    )
}
  
export default Tetris;

  
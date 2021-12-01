import React, {useState} from 'react'

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

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log("re-render");

    return (
        <StyledTetrisWrapper>
            
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
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
        
    )
}
  
export default Tetris;

  
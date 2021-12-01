import {useState, useCallback} from 'react';
import { STAGE_WIDTH } from '../components/gameHelpers';
import { TETROMINOS ,randomTetromino } from '../components/tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: {x: 0, y:0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPosition = ({ x, y, collided}) => {
        setPlayer(prevState => ({
            ...prevState,
            position: {x: (prevState.position.x += x), y: (prevState.position.y +=y)},
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {

        setPlayer({
            position: {x: STAGE_WIDTH / 2 -2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    return [player, updatePlayerPosition, resetPlayer]

  
}
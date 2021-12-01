import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from './tetrominos';

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].colors}></StyledCell>
)

console.log("tetro", TETROMINOS["J"].colors)
console.log("ceell", Cell)

export default Cell;
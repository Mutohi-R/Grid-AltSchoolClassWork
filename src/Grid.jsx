import { range } from './utils';
import './App.css'

function Grid({ numRows, numCols }) {

  const row = range(numRows)
  const col = range(numCols)

  return <div className="grid">{
    row.map(index => (
      <div key = {index}  class="row">{
        col.map(index => (
          <div key = {index} class="cell"></div>
        ))
      }</div>
    ))
  }</div>;
}

export default Grid;

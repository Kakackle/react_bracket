// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Pair from './components/Pair';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function makePairs(array) {
  let arrayCopy = array.slice();
  const arrayLen = array.length;
  let pairs = [];
  for(let i = 0; i<arrayLen/2; i=i+1){
    let new_pair = arrayCopy.slice(0 + i*2, 2+i*2);
    pairs.push(new_pair);
  }
  return pairs;
}

function App() {
  const test_names = ["John", "Joanne", "Jackson", "Jimmy", "Dom", "Marcus", "Wright", "George"];
  shuffleArray(test_names);
  const pairs = makePairs(test_names);
  const pair_elems = pairs.map(pair => {
    return (
        <Pair pair={pair} key={pair}></Pair>
    );
  });

  let len_brackets = test_names.length;
  let brackets = [];

  for(let i = 2; i < len_brackets; i=i*2){
    let brackets_column = Array(len_brackets/i).fill(i);
    brackets.push(brackets_column);
  }

  console.log(`brackets: ${brackets}`);

  const brackets_columns = brackets.map(bracket => {
    let bracket_pairs = makePairs(bracket);
    let bracket_pair_key = 0;
    let bracket_pair_elements = bracket_pairs.map(pair=>{
      bracket_pair_key += 1;
      return (
        <Pair pair={pair} key={bracket_pair_key}></Pair>
      );
    });
    return (
      <div className='column' key={bracket}>
        {bracket_pair_elements}
      </div>
    )
  });

  return (
    <main className='main'>
      <div className='columns'>
        <div className='column'>
          {pair_elems}
        </div>
        <div className="columns">
          {brackets_columns}
        </div>
        <div className='pair-name'>winner</div>
      </div>
    </main>
  )
}

export default App

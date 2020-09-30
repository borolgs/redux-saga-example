import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFacts, catActions } from './catSlice';

export function Cats() {
  const facts = useSelector(selectFacts);
  const dispatch = useDispatch();
  return (
    <div>
      <button aria-label="Get Cat Facts" onClick={() => dispatch(catActions.fetchAllRequest())}>
        Get Cat Facts
      </button>
      <ul>
        {facts.map(({ fact }, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

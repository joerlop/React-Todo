import React from 'react';
import './Todo.scss';

function SearchForm(props) {
  return (
    <form className="form" onSubmit={props.search}>
      <input
        placeholder="search"
        name="search"
        value={props.value}
        onChange={props.change}
      />
      <button onClick={() => props.search}>Search!</button>
      <button onClick={props.back}>Back</button>     
    </form>
  );
}

export default SearchForm;
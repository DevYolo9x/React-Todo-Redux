import React, { useRef, useState, useEffect } from 'react';

function Search(props) {
  const searchInput = useRef(null);
  const [strSearch, setStrSearch] = useState('');

  let {onclickSearchForm} = props;

  function handleSearch() {
    onclickSearchForm(searchInput.current.value);
  }

  function handleChange(event) {
    setStrSearch(event.target.value);
  }

  function handleClear() {
    setStrSearch('');
    onclickSearchForm('');
    if (searchInput.current) {
      searchInput.current.value = '';
    }
  }

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="input-group">
        <input
          type="text"
          value={strSearch}
          onChange={handleChange}
          className="form-control"
          ref={searchInput}
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button onClick={handleSearch} className="btn btn-info" type="button">
            Go!
          </button>
          <button onClick={handleClear} className="btn btn-danger" type="button">
            Clear!
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;

import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actSearch } from '../actions';

function Search(props) {
  const searchInput = useRef(null);
  let {onclickSearchForm, goSearch, clearSearch, search} = props;
  let [strSearch, setStrSearch] = useState(search);

  function handleSearch() {
    props.goSearch(strSearch)
  }

  function handleChange(event) {
    setStrSearch(event.target.value)
  }

  function handleClear() {
    props.clearSearch()
    setStrSearch('')
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

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

// Thay đổi trạng thái của toggle Form
const mapDispatchToProps = (dispatch, props) => {
  return {
    goSearch: (search) => {
      dispatch(actSearch(search))
    },
    clearSearch: () => {
      dispatch(actSearch(''))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
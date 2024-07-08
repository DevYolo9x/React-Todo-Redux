import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actSortForm } from '../actions';

function Search(props) {
  const search = useRef(null);
  let {sort, sortItems} = props;
  let [sortType, setSortType] = useState({
    orderBy: sort.orderBy,
    orderDir: sort.orderDir,
  })

  let sortBy = sortType.orderBy+' - '+sortType.orderDir;

  function handleSort(orderBy, orderDir) {
    props.sortItems({orderBy, orderDir});
    //sortItems(orderBy, orderDir);
  }

  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a role="button" onClick={() => handleSort('name', 'asc')}>Name ASC</a>
          </li>
          <li>
            <a role="button" onClick={() => handleSort('name', 'desc')}>Name DESC</a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a role="button" onClick={() => handleSort('level', 'asc')}>Level ASC</a>
          </li>
          <li>
            <a role="button" onClick={() => handleSort('level', 'desc')}>Level DESC</a>
          </li>
        </ul>
        <span className="label label-success label-medium">{sortBy.toUpperCase()}</span>
      </div>
    </div>
  );
}

// Lấy toàn bộ thông tin state từ component chứa
const mapStateToProps = state => {
  return {
    sort: state.sort,
  }
}

const mapDispatchToProps = (sortType) => {
  return {
    sortItems: (dispatch, sortType) => {
      console.log(sortType);
      //dispatch(actSortForm(orderBy, orderDir))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
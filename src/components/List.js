import React, { useState } from 'react';
import { connect } from 'react-redux';
import {filter, includes} from 'lodash';
import Item from './Item';
import items from '../reducers/items';
import {orderBy as functionOrderBy} from 'lodash';
import { actSortForm } from '../actions';

function List(props) {
  let {items, onClickDelete, onClickEdit, search, sort} = props;
  let itemPage = <tr><th colSpan={4}>Không có dữ liệu!</th></tr>
  let [sortType, setSortType] = useState({
    orderBy: sort.orderBy,
    orderDir: sort.orderDir,
  })

  if( search != '' ) {
    items = filter(items, function(item) { 
        return includes(item.name.toLowerCase(), search.toLowerCase());
    });
  }

  // Sort - Sử dụng thư viện lodash
  items = functionOrderBy(items, [sortType.orderBy], [sortType.orderDir]);

  if( items.length > 0 ) {
      itemPage = items.map((item, index) =>
      <Item 
      key={index} 
      onClickDelete={onClickDelete} 
      onClickEdit={onClickEdit} 
      data={item}
      index={index}
      />
    ) 
  }

  function handleSort() {

  }

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemPage}
        </tbody>
      </table>
    </div>
  );
}

// Lấy toàn bộ thông tin state từ component chứa
const mapStateToProps = state => {
  return {
    items: state.items,
    search: state.search,
    sort: state.sort,
  }
}

const mapDispatchToProps = () => {
  return {
    handleSort: (dispatch, orderBy, orderDir) => {
      dispatch(actSortForm(orderBy, orderDir))
    }
  }
}

export default connect(mapStateToProps, null)(List);

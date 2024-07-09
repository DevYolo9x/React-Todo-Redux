import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {filter, includes} from 'lodash';
import Item from './Item';
import items from '../reducers/items';
import {orderBy as lodashOrderBy } from 'lodash';
import { actSortForm } from '../actions';

function List(props) {

  let {items, onClickDelete, onClickEdit, search, sort} = props;
  let {orderBy, orderDir} = sort
  let itemPage = <tr><th colSpan={4}>Không có dữ liệu!</th></tr>
  let itemsOrigin = items !== null ? items : []
  
  // Sort - Sử dụng thư viện lodash
  items = lodashOrderBy(items, [orderBy], [orderDir]);

  if( search != '' ) {
    items = filter(items, function(item) { 
        return includes(item.name.toLowerCase(), search.toLowerCase());
    });
  }

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

export default connect(mapStateToProps, null)(List);

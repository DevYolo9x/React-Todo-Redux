import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import items from '../reducers/items';

function List(props) {
  const {items, onClickDelete, onClickEdit} = props;
  let itemPage = <tr><th colSpan={4}>Không có dữ liệu!</th></tr>
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
    items: state.items
  }
}

export default connect(mapStateToProps, null)(List);

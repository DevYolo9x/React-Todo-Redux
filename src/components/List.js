import React from 'react';
import Item from './Item';

function List(props) {
  const {items, onClickDelete, onClickEdit} = props;
  const itemPage = items.map((item, index) =>
    <Item 
    key={index} 
    onClickDelete={onClickDelete} 
    onClickEdit={onClickEdit} 
    data={item} 
    index={index}
    />
  )
  
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

export default List;

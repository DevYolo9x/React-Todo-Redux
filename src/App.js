import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Student from './components/Student';
import store from './store';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as functionOrderBy, remove, reject} from 'lodash';

function App() {

  const Task = JSON.parse(localStorage.getItem('Task')) || [];
  const [orderBy, setOrderBy] = useState('level');
  const [orderDir, setOrderDir] = useState('desc');
  let [itemOrigin, setItemOrigin] = useState(Task);

  

  // Sắp xếp bản ghi
  function handleSort(orderBy, orderDir){
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  // Xoá thông tin bản ghi
  function handleDelete(id) {
    // Delete - Sử dụng thư viện lodash
    itemOrigin = remove(itemOrigin, function(item) {
      return item.id !== id;
    });
    setItemOrigin(itemOrigin);
  }
  
  // Cập nhật lại thông tin bản ghi
  function handleEdit(item){
  }

  // Thực hiện Tạo/Cập nhật bản ghi
  function handleSubmit(id, item){
    if( id !== '' ) {
      itemOrigin = reject(itemOrigin, {id: id});
      itemOrigin.push({id: id, name: item.name, level: item.level});
    } else {
      item.id = uuidv4();
      itemOrigin.push(item);
    }
    setItemOrigin(itemOrigin);
    localStorage.setItem('Task', JSON.stringify(itemOrigin));
  }
  
  return (
    <div className="container">
      <Title />
      <Control 
        onclickSort={handleSort}
      />
      <Form 
        onclickHandleSubmit={handleSubmit} 
      />
      <List
      onClickDelete={handleDelete}
      onClickEdit={handleEdit}
      />
    </div>
  );
}

export default App;
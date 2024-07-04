import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Student from './components/Student';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as functionOrderBy, remove, reject} from 'lodash';

function App() {

  const Task = JSON.parse(localStorage.getItem('Task')) || [];
  const [isShowForm, setIsShowForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  const [strSearch, setStrSearch] = useState('');
  const [orderBy, setOrderBy] = useState('level');
  const [orderDir, setOrderDir] = useState('desc');
  let [itemOrigin, setItemOrigin] = useState(Task);
  let [itemSelected, setItemSelected] = useState([]);
  let elForm = null;

   useEffect(() => {
    localStorage.setItem('Task', JSON.stringify(itemOrigin));
  }, [itemOrigin]);


  // Search - Sử dụng thư viện lodash
  if( strSearch != '' ) {
    itemOrigin = filter(itemOrigin, function(item) { 
        return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });
  }

  console.log(itemOrigin);
  

  // Sử dụng theo cách thông thường
  // if( strSearch.length > 0 ) {
  //   Task.forEach((item) => {
  //     if( item.name.indexOf(strSearch) !== -1 ){
  //       itemOrigin.push(item);
  //     }
  //   });
  // } else {
  //   itemOrigin = Task;
  // }

  // Sort - Sử dụng thư viện lodash
  itemOrigin = functionOrderBy(itemOrigin, [orderBy], [orderDir]);

  // Tắt/Mở form
  function handleToggleForm(){
    setIsShowForm(!isShowForm);
    setItemSelected(null);
  }
  
  // Đóng form
  function handleCloseForm(){
    setIsShowForm(false);
    setItemSelected(null);
  }

  // Sắp xếp bản ghi
  function handleSort(orderBy, orderDir){
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  // Tìm kiếm bản ghi
  function handleGoSearchForm(value) {
    setStrSearch(value);
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
    setItemSelected(item)
    setIsShowForm(true)
  }

  // Thực hiện Tạo/Cập nhật bản ghi
  function handleSubmit(id, item){
    if( id !== '' ) {

      // itemOrigin.forEach((el, key) => {
      //   if(el.id === id) {
      //     itemOrigin[key].id = id;
      //     itemOrigin[key].name = item.name;
      //     itemOrigin[key].level = item.level;
      //   }
      //   setItemOrigin(itemOrigin);
      // })

      itemOrigin = reject(itemOrigin, {id: id});
      itemOrigin.push({id: id, name: item.name, level: item.level});
    } else {
      item.id = uuidv4();
      itemOrigin.push(item);
    }
    setItemOrigin(itemOrigin);
    setIsShowForm(false);
    localStorage.setItem('Task', JSON.stringify(itemOrigin));
  }

  useEffect(() => {
    // let items = localStorage.getItem('Task');
    // setItemOrigin(items);
    // console.log(itemOrigin);
  }, [strSearch, itemSelected]);

  if( isShowForm ) {
    elForm = <Form onclickCloseForm={handleCloseForm} onclickHandleSubmit={handleSubmit} itemSelected={itemSelected} />
  }
  
  return (
    <div className="container">

      {/* <Student /> */}

      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control 
        orderBy={orderBy}
        orderDir={orderDir}
        onclickSort={handleSort}
        onclickSearchForm={handleGoSearchForm}
        onclickToggleForm={handleToggleForm}
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <List
      onClickDelete={handleDelete}
      onClickEdit={handleEdit}
      items={itemOrigin}
      />
    </div>
  );
}

export default App;
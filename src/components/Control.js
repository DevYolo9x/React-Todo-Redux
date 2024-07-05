import React, { useRef } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';


function Control(props) {
  const search = useRef(null);
  const task_name = useRef(null);
  const task_level = useRef(null);

  const {onclickSearchForm, orderBy, orderDir, onclickSort} = props;

  function handleShowForm() {
    if (props.onclickToggleForm) {
      props.onclickToggleForm();
    }
  }
  
  return (
    <div className="row">

      <Search onclickSearchForm={onclickSearchForm} />

      <Sort 
      onclickSort={onclickSort}
      orderBy={orderBy}
      orderDir={orderDir}
      />

      <ToggleForm />

    </div>
  );
}

export default Control;

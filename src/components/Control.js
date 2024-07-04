import React, { useRef } from 'react';
import Search from './Search';
import Sort from './Sort';


function Control(props) {
  const search = useRef(null);
  const task_name = useRef(null);
  const task_level = useRef(null);

  const {isShowForm, onclickSearchForm, orderBy, orderDir, onclickSort} = props;

  let buttonForm = <button type="button" onClick={handleShowForm} className="btn btn-info btn-block"> Add Task </button>
  if( isShowForm === true ) {
    buttonForm = <button type="button" onClick={handleShowForm} className="btn btn-success btn-block"> Close Task </button>
  }

  function handleShowForm() {
    if (props.onclickToggleForm) {
      props.onclickToggleForm();
    }
  }
  
  return (
    <div className="row">

      <Search onclickSearchForm={onclickSearchForm} />
      {/* SORT : START */}
      <Sort 
      onclickSort={onclickSort}
      orderBy={orderBy}
      orderDir={orderDir}
      />
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        {buttonForm}
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actCloseForm } from '../actions';

function From(props) {

  let {itemSelected, isShowForm, formCancle} = props;

  let [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData({
      id: (itemSelected ? itemSelected.id:''),
      task_name: itemSelected ? itemSelected.name : '',
      task_level: itemSelected ? itemSelected.level : '',
    });
  }, [itemSelected]);

  function handleCancel() {
    props.formCancle()
  }

  function handleChange(event) {
    let {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let item = {
      id: formData.id,
      name: formData.task_name,
      level: +formData.task_level,
    }
    
    if( props.onclickHandleSubmit ) {
      props.onclickHandleSubmit(item.id, item)
    }
  }

  if( isShowForm === false ) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task_name"
              onChange={handleChange}
              defaultValue={formData.task_name}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="task_level"
              className="form-control"
              required="required"
              onChange={handleChange}
              value={formData.task_level}
            >
              Small
              <option value={0}>Basic</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

// Lấy toàn bộ thông tin state từ component chứa
const mapStateToProps = (state) => {
  return {
    isShowForm: state.isShowForm
  }
}

// Thay đổi trạng thái của toggle Form
const mapDispatchToProps = (dispatch, props) => {
  return {
    formCancle: () => {
      dispatch(actCloseForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(From);
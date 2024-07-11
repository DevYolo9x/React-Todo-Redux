import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { actCloseForm, actSubmitForm, actUnSelectedItem } from '../actions';

function From(props) {

  let {isShowForm, formCancle, formSubmit, itemsSelected} = props;

  let [formData, setFormData] = useState(itemsSelected);

  useEffect(() => {
    if (itemsSelected) {
        setFormData(itemsSelected);
    }
  }, [itemsSelected]);

  function handleCancel() {
    formCancle()
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
      name: formData.name,
      level: +formData.level,
    }
    formSubmit(item)
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
              name="name"
              onChange={handleChange}
              defaultValue={formData.name}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              className="form-control"
              onChange={handleChange}
              value={formData.level}
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
    isShowForm: state.isShowForm,
    itemsSelected: state.itemsSelected
  }
}

// Thay đổi trạng thái của toggle Form
const mapDispatchToProps = (dispatch, props) => {
  return {
    formCancle: () => {
      dispatch(actCloseForm())
      dispatch(actUnSelectedItem())
    },
    formSubmit: (item) => {
      dispatch(actSubmitForm(item))
      dispatch(actCloseForm())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(From);
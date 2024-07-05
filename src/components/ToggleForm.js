import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { actToggleForm } from '../actions';

function ToggleForm(props) {

  const {isShowForm, handleToggle} = props;

  console.log(isShowForm);

  let buttonName = isShowForm === true ? 'Open Form' : 'Close Form'
  let buttonClass = isShowForm === true ? 'btn-info' : 'btn-success'
  let buttonForm = <button type="button" onClick={toggleForm} className={`btn ${buttonClass} btn-block`}> {buttonName} </button>

  function toggleForm() {
    props.handleToggle();
  }

  return (
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
      {buttonForm}
    </div>
  );
}

// Lấy toàn bộ thông tin state từ component chứa
const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm
  }
}

// Thay đổi trạng thái của toggle Form
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleToggle: () => {
      dispatch(actToggleForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);
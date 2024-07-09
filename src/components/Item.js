import React from 'react';
import { connect } from 'react-redux';
import { actCloseForm, actOpenForm, actDelete, actSelectedItem } from '../actions';

function Item(props) {
  const {data, index, onClickDelete, onClickEdit, editItem, deleteItem} = props;
  var type = {
    0: 'Basic',
    1: 'Medium',
    2: 'High',
  }
  
  var label = {
    0: 'label-primary',
    1: 'label-warning',
    2: 'label-danger',
  }

  function handleDelete(id) {
    deleteItem(id)
  }
  
  function handleEdit(item) {
    props.editItem(item)
  }

  return (
    <tr>
      <td className="text-center">{index+1}</td>
      <td>
        {data.name}
      </td>
      <td className="text-center">
        <span className={'label ' + label[data.level]}>{type[data.level]}</span>
      </td>
      <td>
        <button type="button" onClick={() => handleEdit(data)} className="btn btn-warning">
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(data.id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
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
    editItem: (item) => {
      dispatch(actOpenForm())
      dispatch(actSelectedItem(item))
    },
    deleteItem: (id) => {
      dispatch(actDelete(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Item);
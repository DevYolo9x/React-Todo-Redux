import React from 'react';

function Item(props) {
  const {data, index, onClickDelete, onClickEdit} = props;
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
    onClickDelete(id)
  }
  
  function handleEdit(item) {
    onClickEdit(item)
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

export default Item;

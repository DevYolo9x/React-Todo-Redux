import React, { useRef, useState } from 'react';


function Control(props) {

  const [formData, setFormData] = useState({
    fullname: '',
    code: '',
    cources: 'PHP',
    collect: 'Đại học',
    sendmail: false,
  });


  function onSubmitEvent(event){
    event.preventDefault();
    console.log(formData);
  }

  function onChangeSendmail(event) {
    const { name, value, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      sendmail: !formData.sendmail,
    }));
  }

  function onChangeEvent(event){
    const { name, value, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form style={{ margin: "10px 0" }} onSubmit={onSubmitEvent}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Họ và tên</label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          name="fullname"
          onChange={onChangeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Mã sinh viên</label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          name="code"
          onChange={onChangeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Khoá học</label>
        <select name="cources" value={formData.cources} onChange={onChangeEvent} className="form-control" id="exampleFormControlSelect1">
          <option value={'ReactJS'}>ReactJS</option>
          <option value={'PHP'}>PHP</option>
          <option value={'HTML'}>HTML</option>
        </select>
      </div>
      
      <div className="form-group">
        <div className="">
          <input
              type="radio"
              className=""
              placeholder=""
              name="collect"
              onChange={onChangeEvent}
              checked={formData.collect==='Đại học'}
              value="Đại học"
            />
          <label  style={{ margin: "0 0 0 5px" }} >Đại học</label>
        </div>
        <div className="">
          <input
              type="radio"
              className=""
              placeholder=""
              name="collect"
              onChange={onChangeEvent}
              checked={formData.collect==='Cao đẳng'}
              value="Cao đẳng"
            />
          <label  style={{ margin: "0 0 0 5px" }} >Cao đẳng</label>
        </div>
        <div className="">
          <input
              type="radio"
              className=""
              placeholder=""
              name="collect"
              onChange={onChangeEvent}
              checked={formData.collect==='Liên thông'}
              value="Liên thông"
            />
          <label  style={{ margin: "0 0 0 5px" }} >Liên thông</label>
        </div>
      </div>
      <div className="form-group">
        <input
            type="checkbox"
            className=""
            placeholder=""
            name="sendmail"
            onChange={onChangeSendmail}
            value={formData.sendmail}
            checked={formData.sendmail}
          />
         <label  style={{ margin: "0 0 0 5px" }} >Gửi thông báo</label>
      </div>
      <div className="form-group">
        <input
            type="submit"
            className='btn btn-submit'
            value={'Gửi'}
          />
      </div>
    </form>

  );
}

export default Control;

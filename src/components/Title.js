import React, { useRef } from 'react';

function Title() {
  const search = useRef(null);
  const task_name = useRef(null);
  const task_level = useRef(null);
  return (
      <div className="page-header">
        <h1>
          Project 01 - ToDo List <small>NodeJSs</small>
        </h1>
      </div>
  );
}

export default Title;

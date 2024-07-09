import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Student from './components/Student';
import store from './store';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as functionOrderBy, remove, reject} from 'lodash';

function App() {
  
  return (
    <div className="container">
      <Title />
      <Control />
      <Form />
      <List />
    </div>
  );
}

export default App;
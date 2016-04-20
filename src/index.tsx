/// <reference path="react-modal.d.ts"/>

import * as React from 'react';
import * as ReactDom from 'react-dom';
import Modal from 'react-modal';

console.log(Modal);

ReactDom.render(<Modal isOpen={true}></Modal>, document.getElementById("app"));

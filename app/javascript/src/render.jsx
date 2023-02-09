import React from 'react';
import ReactDOM from 'react-dom/client';

import Comp from './component';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('my-test'));
  root.render(<Comp />);
});

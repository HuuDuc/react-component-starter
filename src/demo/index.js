import React from 'react';
import { createRoot } from 'react-dom/client';
import { MyCounter } from '../index';
const root = createRoot(document.getElementById('demo'));
root.render(<MyCounter />);

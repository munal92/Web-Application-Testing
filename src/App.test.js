import React from 'react';
import { render } from '@testing-library/react' ;
import {tmBsbll} from './App'
import App from './App';
import Dashboard from './components/Dashboard';



// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  const wrapper = render(<App/>)
  expect(wrapper).toBeVisible
});


test ('calc' , () =>{
    expect(tmBsbll(3)).toBe(40);

} );
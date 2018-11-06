import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchTagsForm from './components/SearchTagsForm';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const list = [
  {
    name: 'Hello world',
    id: 1
  },
  {
    name: 'Fishing time',
    id: 2
  },
  {
    name: 'McDonalds',
    id: 3
  },
  {
    name: 'Lorem ipsum',
    id: 4
  },
  {
    name: 'Dolor sit',
    id: 5
  }
]

ReactDOM.render(
  <SearchTagsForm data={ list } />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


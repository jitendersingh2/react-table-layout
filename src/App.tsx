import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventTable from './table/EventTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <EventTable />
    </div>
  );
}

export default App;

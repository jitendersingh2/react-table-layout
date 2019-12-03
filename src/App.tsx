import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventTable from './table/EventTable';
import Dashboard from './table/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <EventTable /> */}
      <Dashboard />
    </div>
  );
}

export default App;

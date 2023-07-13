import React from 'react';
import ChatInterface from './components/ChatInterface';

const App = () => {
  return (
    <div className='flex justify-end flex-col-reverse '>
      <div className="mt-96">
        <ChatInterface />
      </div>
    </div>
  );
};

export default App;
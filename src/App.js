import React from 'react';
import StoryList from './components/StoryList';
import FirebaseAuthUI from './components/firebase/FirebaseAuthUI';

const App = () => {
  return (
    <div className="App">
      <StoryList />
			<FirebaseAuthUI /> {/* Виджет Firebase UI */}
    </div>
  );
};

export default App;
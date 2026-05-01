import React from 'react';
import WealthKraftForm from './components/WealthKraftForm';

function App() {
  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-center bg-white">
      <div className="w-full h-full min-h-[100dvh] max-w-4xl mx-auto relative flex flex-col overflow-x-hidden">
        <WealthKraftForm />
      </div>
    </main>
  );
}

export default App;

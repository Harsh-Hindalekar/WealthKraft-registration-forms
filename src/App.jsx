import React from 'react';
import WealthKraftForm from './components/WealthKraftForm';

function App() {
  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-center bg-transparent p-4 md:p-8 font-sans text-slate-800">
      <div className="w-full max-w-6xl min-h-[90vh] bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden relative flex flex-col p-6 md:p-8 gap-8">
        <WealthKraftForm />
      </div>
    </main>
  );
}

export default App;

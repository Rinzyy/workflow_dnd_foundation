import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { Canvas } from './components/Canvas';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <div className="flex h-screen">
      <ReactFlowProvider>
        <Toolbar />
        <div className="flex-1 ml-64">
          <Canvas />
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
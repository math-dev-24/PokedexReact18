import { Suspense } from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App bg-slate-200">
      <Suspense fallback={<div>Chargement...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;

import AppState from "./Context/AppState";
import AppInner from "./AppInner";

//import css and components
import "./App.css";

function App() {
   return (
      <div className="app-div">
         <AppState>
            <AppInner />
         </AppState>
      </div>
   );
}

export default App;

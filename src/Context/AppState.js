import AppContext from "./app-context";

function AppState(props) {
   return (
      <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>
   );
}

export default AppState;

import { ActiveUserContextProvider } from "./core/modules/user/contexts/ActiveUserContext"
import Router from "./core/modules/router/components/pages/Router"
import SearchAppBar from "./core/modules/Navbar/Navbar.tsx";

function App() {
  return (
    <ActiveUserContextProvider>
      <SearchAppBar/>
      <Router />
    </ActiveUserContextProvider>
  )
}

export default App;

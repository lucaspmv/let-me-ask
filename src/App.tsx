import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from './pages/Room/index';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom/index';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/rooms/new' component={NewRoom}></Route>
          <Route path='/rooms/:id' component={Room}></Route>

          <Route path='/admin/rooms/:id' component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

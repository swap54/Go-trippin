import './App.css';
import One from './one';
import Flight from './Flight';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={
        ()=>{
          return(
            <>
              <One />
            </>
          )
        }
      }/>
      <Route exact={true} path="/Flight" component={
        ()=>{
          return <Flight />
        }
      }
      />
      <Route exact={true} path="/Train" component={
        ()=>{
          return <Flight />
        }
      }
      />
      <Route exact={true} path="/Car" component={
        ()=>{
          return <Flight />
        }
      }
      />
    </Switch>
   </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import useRouteElement from './useRouteElement';

function App() {
  const routeElement = useRouteElement();
  return <div>{routeElement}</div>;
}

export default App;

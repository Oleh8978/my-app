import Cart from './components/Cart'

import { getDaysInMonth } from './utils/dates';

function App() {
  console.log(getDaysInMonth())
  return (
    <div className="horizontal-calendar-container">
      <div className="horizontal-calendar-body"></div>
    </div>
  );
}

export default App;

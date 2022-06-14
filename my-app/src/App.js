import './App.css';
import { format } from 'date-fns';

function App() {
  let date = format(new Date(), 'dd/MM/yyyy')
  return (
    <div>
      <div className="header">
        <div className="icon">
          <img src="./logo.png"></img>
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="page">
        <div className="column">
          <img src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"/>
          <div className="img-txt">HEY</div>
        </div>

        <div className="column">
          <img src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"/>
          <div className="img-txt">LET'S</div>
        </div>

        <div className="column">
          <img src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"/>
          <div className="img-txt">GIVE</div>
        </div>

        <div className="column">
          <img src="https://source.unsplash.com/ITjiVXcwVng/1500x1500"/>
          <div className="img-txt">ALL</div>
        </div>

        <div className="column">
          <img src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500"/>
          <div className="img-txt">YOU CAN</div>
        </div>
      </div>
    </div>
  );
}

export default App;

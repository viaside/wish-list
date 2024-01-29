import './App.css';
import WishListData from "./WishListData.json";
import Item from './Component/Item';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div 
          style={{
            position: 'absolute',
            top: 0,
            display: "flex", 
            flexDirection: "column", 
            textAlign: 'center', 
          }}
        >
          <h1>Мой "Виш лист" 🛍️</h1>
          <h1>❤️🩷🧡💛💚💙🩵💜🤎🖤🩶🤍</h1>
        </div>
        <div style={{display: "flex"}}>
          {WishListData.data.map((el, key) => {
            return (
              <Item key={key} img={el.img} name={el.name} price={el.price}/>
            )
          })}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            display: "flex", 
            flexDirection: "column", 
            textAlign: 'center', 
          }}
        >
          <h1>❤️🩷🧡💛💚💙🩵💜🤎🖤🩶🤍</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

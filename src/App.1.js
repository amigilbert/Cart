import React, {Component} from "react"
import './App.css';

class App extends Component {

  state = {
    items: [],
    cart: [],
  }

  componentDidMount(){
    const cartJSON = localStorage.getItem ("cart")
    const cart = JSON.parse(cartJSON);
    this.setState({
      items: ["Shoes", "Sandals", "Hat", "Sunglasss"],
      cart
    })
  }

  addToCart = (item) => () => {
    const cart = [...this.state.cart, item]
    localStorage.setItem("cart", JSON.stringify(cart))
    this.setState({
      cart
    })    
  }

  removeFromCart = (index) => () =>{
    this.state.cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.state.cart))
    this.setState({
      cart: this.state.cart
    })
  }

  render() {    
    return (
      <div className="App">
        <h1> Store</h1>
        <ul>
          {this.state.items.map((item, index) =>
          <li key={index}>
            {item}
              <button onClick={this.addToCart(item)}>Add to Cart</button>
            </li>  
          )}
        </ul>
        <h1> Cart</h1>
        <ul>
          {this.state.cart.length > 0 ?
            this.state.cart.map((item, index) =>
          <li key={index}>
            {item}
            <button onClick={this.removeFromCart(index)}>Remove</button>
            </li>
            ):<p>Cart is empty</p>          
          }
        </ul>   
      </div>
    );
  }
}

export default App;

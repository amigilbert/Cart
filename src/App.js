import React, {Component} from "react"
import './App.css';
import Button from "./components/Button"
import Input from "./components/Input"

class App extends Component {

  state = {
    items: [],
    cart: [],
  }

  componentDidMount(){
    console.log('hello from componentDidMount')
    fetch('https://mysterious-savannah-64434.herokuapp.com/items')
    .then((resp) => {
      let data = resp.json()
      console.log(data)
      return data
    })
    .then((myJson) => {
      console.log(myJson);
      this.setState({ items: myJson })
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
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
          { this.state.items.length > 0 ?
            this.state.items.map((item, index) =>
          <li key={index}>
            {item.name}
              <button onClick={this.addToCart(item.name)}>Add to Cart</button>
            </li>  
          ):<p>No Items</p>   
        }
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
        <Button color={"red"}>hi</Button>
        <Button>bye</Button>
        <Button>me</Button>
        <Button>you</Button>
        <Button>us</Button> 
        <Input onChange={this.handleChange}></Input> 
        <Input onChange={this.handleChange}></Input> 
        <Input onChange={this.handleChange}></Input> 
        <Input onChange={this.handleChange}></Input> 
        <Input onChange={this.handleChange}></Input> 
      </div>
    );
  }
}

export default App;

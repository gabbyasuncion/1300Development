import React from "react";
import "../App.css";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";
import { Nav, Navbar } from "react-bootstrap";


/**
 * This class contains all of the web app's major functionalities. This includes filtering, sorting, add to/remove from cart, and 
 * increase/decrease quantity. 
 */
class Shop extends React.Component {
  constructor(props) {
    super(props);
    // A state is a variable which is remembered when the component re-renders.
    //TODO: Add additional state variables within this.state for another filter and a price sort, then set them to a default value. Remember, states can also be functions!
    this.state = {
      cartContents: [],
      size: "Size"
    };
  }

  /**
   * This function is called every time a new Size filter is selected. State
   * changes will occur when a new filter type is selected.
   */
  onSelectFilterSize = event => {
    this.setState({
      size: event
    })
  };
  /**
   * This function determines whether the item being passed in matches the Size that we are filtering on. Remember that the selected type
   * we are filtering on is stored in this.state!
   */
  matchesFilterSize = item => {
    if (this.state.size === "Size") {
      return true
    } else if (this.state.size === item.size) {
      return true
    } else {
      return false
    }
  }
  /**
   * This function is passed into a built-in filter() function called when rendering this Shop component. filter() calls this function on every element
   * in the list. If this function returns true for a given element, filter() will add that element to its
   * return list, which is the list of filtered plants. 
   */
  filterItems = item => {
    return this.matchesFilterSize(item);
  }

  /**
   * Compare two plants in the list, and sorts them in price increasing order.
   */
  sortLowToHigh = (a, b) => {
    // TODO: Write a comparator function that sorts your items from lowest to highest price.
  }

  /**
   * Called when the "Lowest to Highest" price filter is selected.
   */
  onPriceLowToHigh = () => {
    // TODO: Set your price sort state to the sortLowToHigh comparator.
  }


  /**
   * This function is called when the user adds an item from the Shop to the Cart. This function is hard so we have 
   * provided pseudocode to help you think through it!
   */
  addToCart = (item) => {
    // If the item has already been added to the cart 
    //    The old cartContents list is copied to a updatedContents list. (We need to copy arrays because it is bad practice to mutate states directly.)
    //    We update the newly added object in the updatedContents list with the new quantity. 
    //    Set the state cartContents to updatedContents - this state can then be passed as prop to other components!
    // If the item is not in the cart
    //    The old cartContents list is copied to the updatedContents list, AND the new item is added to the updatedContents list. 
    //    Set the state cartContents to updatedContents
  }

  /**
   * This function removes an item from the Cart by filtering the cartContents to only render items other than the removed item.
   */
  removeFromCart = (item) => {
    //TODO: Write a function that only renders items that are in the cart
  }

  /* 
  Calculate the total price of the items in the cart. 
  */
  calculateTotal = contents => {
    //TODO: Calculate the total price of the cart. Remember, you want to be able to pass the total price to the Cart component as well!
  }

  //TODO: Add functions that takes care of increasing/decreasing item quantity.

  render() {
    return (
      <div className="wrapper">
        <div className="cards-container">
          {/* TODO: Add more menu items with onSelect handlers. Might be cleaner to have all the filtering/sorting in a new component!*/}
          <Navbar bg="light" expand="lg">
            Size:
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav defaultActiveKey="Size">
              <Nav.Item><Nav.Link eventKey="Size" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Desktop" onSelect={this.onSelectFilterSize}>Desktop</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Medium" onSelect={this.onSelectFilterSize}>Medium</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Large" onSelect={this.onSelectFilterSize}>Large</Nav.Link></Nav.Item>
            </Nav>
          </Navbar>
          <br />
          {/* An instance of the ProductGrid Component that filters your items from App.js. isInCart will be useful to keep track of when the addToCart and removeFromCart buttons will appear! You might have to pass addToCart here as all items in the Shop section can be added to cart.*/}
          <ProductGrid list={this.props.list.filter(this.filterItems)} isInCart={false}/>
        </div>
        {/* An instance of the Cart Component that takes in your cartContents. You might have to pass the removeFromCart and increase/decrease item quantity functions here because users can remove or increase/decrease all items in the Cart.*/}
        <div className="cart-container">
          <Cart contents={this.state.cartContents} />
        </div>
      </div>
    );
  }
}

export default Shop;
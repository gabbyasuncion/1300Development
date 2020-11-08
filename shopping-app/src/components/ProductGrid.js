import React from "react";

/**
 * This class maps each item in your products list to individual Product Cards. 
 */
class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /**
   * TODO: Create a new component that styles each item, then map each item from this.props.list from Shop to the new component.
   *
   */
  productGrid() {
    const grid = this.props.list.map(item => {
      // Can you receive the addToCart and removeFromCart functions as the same prop? This might be helpful when you use isInCart to check whether
      // the item is in the cart or not, and render certain buttons accordingly in the Product Card component.

      // Maybe also create a quantity prop that checks: if the item is in the cart, then it keeps its quantity; else, it's quantity is one. Then, you can refer 
      // to an item's quantity when you write the addToCart/removeFromCart/increasing/decreasing quantity functions!
      return <li key={item.name} isInCart={this.props.isInCart}>{item.name}, <strong>{item.size}</strong> </li>
    });
    return grid;
  }

  render() {
    return (
      <div>
        {this.productGrid()}
      </div>
    )
  }
}

export default ProductGrid;
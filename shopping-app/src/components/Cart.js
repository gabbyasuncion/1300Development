import React from "react";

/**
 * This class handles calculating the total price of all the items in the cart. 
 */
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: this.props.cartContents,
    };
  }

  /**
   * This function ensures that the Cart's total is updated the instant an item is added to the Cart. In React, a component only updates when its state 
   * changes. You can pass data from parent to child through props but there is no rerender logic there. Since this.state.contents is the props of contents 
   * from Shop, we have to update this.state.contents within this class for it to rerender. The componentDidUpdate() API makes sure that calculating the total is 
   * the absolutely last thing to be executed.
   * 
   * TODO: Checks that the prevProps or prevState doesn't equal to the current props and state, then calculate total. 
   */
  componentDidUpdate(prevProps, prevState) {
  }

  //TODO: Write functions that updates the total when an item's quantity is increased/decreased in the cart!

  render() {
    return (
      <div className="cart">
        <h3>My Cart</h3>
        {/*TODO: Create an instance of the ProductGrid Component that passes props from Shop to Product Grid.*/}
      </div>
    )
  }
}

export default Cart;
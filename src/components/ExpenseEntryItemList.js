import React from "react";
import { Link } from 'react-router-dom';

class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: this.props.items,
         pageCount: this.props.pageCount
      }

      this.handleMouseEnter = this.handleMouseEnter.bind();
      this.handleMouseLeave = this.handleMouseLeave.bind();
      this.handleMouseOver = this.handleMouseOver.bind();
   }

   handleMouseEnter(e) {
      e.target.parentNode.classList.add("highlight");
   }
   handleMouseLeave(e) {
      e.target.parentNode.classList.remove("highlight");
   }
   handleMouseOver(e) {
      console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
   }
   handleDelete = (id, e) => {
      e.preventDefault();
      console.log(id);
      // this.setState((state, props) => {
      //    let items = [];
      //    state.items.forEach((item, idx) => {
      //       if (item.id != id)
      //          items.push(item)
      //    })
      //    let newState = {
      //       items: items
      //    }
      //    return newState;
      // })
      if(this.props.onDelete != null)this.props.onDelete(id, e);
   }
   getTotal() {
      let total = 0;
      for (var i = 0; i < this.state.items.length; i++) {
         total += this.state.items[i].amount
      }
      return total;
   }

   calculate(state, pageNo) {
      let currentPage = pageNo;
      let totalPages = Math.ceil(state.items.length / state.pageCount);
      if (currentPage > totalPages) currentPage = totalPages;
      let hasPreviousPage = currentPage == 1 ? false : true;
      let hasNextPage = currentPage == totalPages ? false : true;
      let first = (currentPage - 1) * state.pageCount
      let last = first + state.pageCount;
      let filteredItems = state.items.slice(first, last)

      let newState = {
         items: state.items,
         filteredItems: filteredItems,
         currentPage: currentPage,
         totalPages: totalPages,
         pageCount: state.pageCount
      }
      return newState;
   }

   static getDerivedStateFromProps(props, state) {
      let newState = {
         items: props.items
      }
      return newState;
   }

   render() {
      const lists = this.state.items.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
            <td><a href="#"
               onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
         </tr>
      );
      return (
         <div>
            {/* <div>
               <h1>Expenses</h1>
               <p><Link to="/add">Click here</Link> to add new expenses</p>
               <div>
                  Expense list
               </div>
            </div> */}
            <table onMouseOver={this.handleMouseOver}>
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Amount</th>
                     <th>Date</th>
                     <th>Category</th>
                     <th>Remove</th>
                  </tr>
               </thead>
               <tbody>
                  {lists}
                  <tr>
                     <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                     <td colSpan="4" style={{ textAlign: "left" }}>
                        {this.getTotal()}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default ExpenseEntryItemList
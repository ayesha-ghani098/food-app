import React from 'react'
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OrderCanvas = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.hide} placement='end'>
    <Table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>SubTotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <div><h3>Menu 1</h3></div>
        <span>Remove</span>
        </td>
        <td>3</td>
        <td>Rs 400</td>
        <td>Rs 1200</td>
      </tr>
      <tr>
        <td>
        <div><h3>Menu 1</h3></div>
        <span>Remove</span>
        </td>
        <td>3</td>
        <td>Rs 400</td>
        <td>Rs 1200</td>
      </tr>
      <tr>
      <td>
      <div><h3>Menu 1</h3></div>
      <span>Remove</span>
      </td>
      <td>3</td>
      <td>Rs 400</td>
      <td>Rs 1200</td>
    </tr>
    </tbody>
  </Table>
  </Offcanvas>
  )
}

export default OrderCanvas
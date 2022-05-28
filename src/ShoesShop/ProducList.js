import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProducList extends Component {
  render() {
      const{products,onSelect}=this.props;
    return (
      <div className='row'>
          {products.map((product)=>{
              return(
                  <div key={product.id} className="col-sm-4">
                      <ProductItem product={product} onSelect={onSelect} ></ProductItem>
                      
                  </div>
              )
          })}
      </div>
    )
  }
}

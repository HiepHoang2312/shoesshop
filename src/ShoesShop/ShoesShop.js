import React, { Component } from 'react'
import ProducList from './ProducList'
import data from './data.json'

export default class ShoesShop extends Component {
    state = {
        selectedProduct: null,
    }

    handleSelectProduct = (product) => {
        this.setState({
            selectedProduct: product,
        });
    }
  render() {
    return (
    <div className='container'>
        <h1 className='text-center'>ShoesShop</h1>
        <ProducList products={data} onSelect={this.handleSelectProduct}></ProducList>
        
    </div>
    )
  }
}

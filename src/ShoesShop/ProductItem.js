import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      const{product,onSelect}=this.props;
    return (
      <div className='card mt-2' >
          <img src={product.image} alt={product.name} />
          <div className="card-body">
              <h3 className='card-title'>{product.name}</h3>
              <p className='card-text'>{product.shortDescription}</p>
              <button onClick={()=>onSelect(product)} data-bs-toggle="modal" data-bs-target={`#item-${product.id}`} className='btn btn-dark'>Chi tiết sản phẩm</button>
              <div className="modal fade" id={`item-${product.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Chi tiết</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h4>{product.name}</h4>
                            <img width="30%" src={product.image} alt={product.image}></img>
                        </div>
                        <div className='col-12 text-center'>
                            <h3>Chi tiết của sản phẩm</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Tên</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Alias</td>
                                        <td>{product.alias}</td>
                                    </tr>
                                    <tr>
                                        <td>Giá</td>
                                        <td>{product.price} $</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả ngắn</td>
                                        <td>{product.shortDescription}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
          </div>
      </div>
    )
  }
}

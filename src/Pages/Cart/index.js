import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import QuantityBox from '../../Components/QuantityBox';
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '@mui/material/Button';
import { FiLogOut } from "react-icons/fi";

export default function Cart() {
    return (
        <>
            <div className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-1">Your Cart</h2>
                    <p>There are <b className='text-red'>3</b> products in your cart</p>
                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="35%">Product</th>
                                            <th width="18%">Unit Price</th>
                                            <th width="22%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://nest-grocery.vercel.app/assets/popular-product/product-1-1.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="18%">$7.25</td>
                                            <td width="22%"><QuantityBox /></td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%"><span className='remove'><RiDeleteBin6Line /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://nest-grocery.vercel.app/assets/popular-product/product-1-1.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="18%">$7.25</td>
                                            <td width="22%"><QuantityBox /></td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%"><span className='remove'><RiDeleteBin6Line /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://nest-grocery.vercel.app/assets/popular-product/product-1-1.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="18%">$7.25</td>
                                            <td width="22%"><QuantityBox /></td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%"><span className='remove'><RiDeleteBin6Line /></span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='card border p-3 cardDetails'>
                                <h4>CARD TOTALS</h4>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Shipping</span>
                                    <span className='ml-auto'><b>Free</b></span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Estimate for</span>
                                    <span className='ml-auto'><b>India</b></span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Total</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                                <br/>
                                <Button className='btn-purple btn-lg btn-big'>Proceed to Checkout <FiLogOut className='ml-2'/></Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
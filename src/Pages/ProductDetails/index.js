import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <div>
                <section className="productDetails section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pl-5">
                                <ProductZoom />
                            </div>
                            <div className="col-md-7 pl-5 pr-5">
                                <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                                <ul className="list list-inline d-flex align-items-center">
                                    <li className="list-inline-item">
                                        <div className="d-flex align-items-center">
                                            <span className="text-light2 mr-2">Brands :</span>
                                            <span>Welch's</span>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="d-flex align-items-center">
                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                            <span className="text-light2 cursor ml-2">1 Review</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="d-flex info mb-3">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                <span className="badge badge-success">IN STOCK</span>
                                <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                    Class aptent taciti sociosqu ad litora torquent. Vivamus adipiscing nisl ut dolor dignissim semper.
                                    Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent.
                                </p>
                                <div className="productSize d-flex align-items-center">
                                    <span>Size / Weight:</span>
                                    <ul className="list list-inline mb-0 pl-4">
                                        <li className="list-inline-item">
                                            <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200g</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>500g</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>1kg</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <QuantityBox />
                                    <Button className="btn-purple btn-lg btn-big btn-round"><MdShoppingCart /> &nbsp; Add to cart</Button>
                                    <Tooltip title="Add to Wishlist" placement="top">
                                        <Button className="btn-purple btn-lg btn-big btn-circle ml-4"><IoIosHeartEmpty /></Button>
                                    </Tooltip>
                                    <Tooltip title="Add to Compare" placement="top">
                                        <Button className="btn-purple btn-lg btn-big btn-circle ml-2"><MdCompareArrows /></Button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="card mt-5 p-5 detailsPageTabs">
                            <div className="customTabs">
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0) }}>Description</Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1) }}>Additional info</Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs(2) }}>Reviews(3)</Button>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            {
                                activeTabs === 0 && <div className="tabContent">
                                    Noodles & company is an American fast-casual restraunt that offers international and American noodle dishes
                                    and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron kennedy and is
                                    headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue
                                    in 2017. In late 2018, there were 460 noodles & Company locations across 29 states and washington, D.C.
                                </div>
                            }
                            {
                                activeTabs === 1 && <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H (front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-o-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-w-o-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr class="color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr class="size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                            {
                                activeTabs === 2 && <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Customer questions & answers</h3>
                                            <br />
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src='https://i.redd.it/1zkb9k4tlb4z.jpg' />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold">Jessica </span>
                                                </div>
                                                <div className="info pl-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-light2">03/09/2024</h5>
                                                        <div className="ml-auto">
                                                            <Rating name="half-rating-read" value={4.5} precision={0.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                    <p> Noodles & company is an American fast-casual restraunt that offers international and American noodle dishes
                                                        and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron kennedy and is
                                                        headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue
                                                        in 2017. In late 2018, there were 460 noodles & Company locations across 29 states and washington, D.C.
                                                    </p>
                                                </div>
                                            </div>
                                            <br className="res-hide" />
                                            <br className="res-hide" />
                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Write a Review" name="review"></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Name" name="userName" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={4.5} precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <Button type='submit' className="btn-purple btn-lg btn-big btn-round">Submit Review</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <br/>

                        <RelatedProducts title="RELATED PRODUCTS"/>

                        <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>

                    </div>
                </section>
            </div>
        </>
    )
}
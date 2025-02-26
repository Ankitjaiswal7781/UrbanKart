import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { FaAngleRight } from "react-icons/fa6";
export default function Navigation() {
    const [isOpenSidebarVal, setIsOpenSidebarVal]=useState(false);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <div className="catWrapper">
                                <Button className="allCatTab align-items-center" onClick={()=>setIsOpenSidebarVal(!isOpenSidebarVal)}>
                                    <span className="icon1 mr-2"><IoIosMenu /></span>
                                    <span className="text">ALL CATEGORIES</span>
                                    <span className="icon2 ml-2"><FaAngleDown /></span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open': ''}`}>
                                    <ul>
                                        <li><Link to="/"><Button className="category">Men <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Fragrances</Button></Link>
                                        <Link to="/"><Button>Grooming For Men</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link> 
                                        </div>
                                        </li>
                                        <li><Link to="/"><Button className="category">women <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>Indian wear</Button></Link>
                                        <Link to="/"><Button>western wear</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Fragrances</Button></Link>
                                        <Link to="/"><Button>Bags & Wallets</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link>
                                    </div>
                                        </li>
                                        <li><Link to="/"><Button className="category">beauty <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>Makeup</Button></Link>
                                        <Link to="/"><Button>Skincare</Button></Link>
                                        <Link to="/"><Button>Bath & Body</Button></Link>
                                        <Link to="/"><Button>Nails</Button></Link>
                                        <Link to="/"><Button>Haircare</Button></Link>
                                        <Link to="/"><Button>tools & Accessories</Button></Link>
                                        <Link to="/"><Button>Women's Fragrances</Button></Link>
                                        <Link to="/"><Button>Men's Frangrances</Button></Link>
                                    </div>
                                    </li>
                                        <li><Link to="/"><Button className="category">watches <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>Mens Watches</Button></Link>
                                        <Link to="/"><Button>womens Watches</Button></Link>
                                        <Link to="/"><Button>kids watches</Button></Link>
                                    </div>
                                    </li>
                                        <li><Link to="/"><Button className="category">kids <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>Boys</Button></Link>
                                        <Link to="/"><Button>Girls</Button></Link>
                                        <Link to="/"><Button>Infants</Button></Link>
                                        <Link to="/"><Button>Toys</Button></Link>
                                        <Link to="/"><Button>School Essential</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                    </div>
                                    </li>
                                        <li><Link to="/"><Button className="category">Gifts <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                        <Link to="/"><Button>gifts for her</Button></Link>
                                        <Link to="/"><Button>gifts for him</Button></Link>
                                        <Link to="/"><Button>Instant gifting</Button></Link>
                                        <Link to="/"><Button>house warming gift</Button></Link>
                                        <Link to="/"><Button>wedding gifts</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link>
                                    </div>
                                    </li>
                                        <li><Link to="/"><Button className="category">Men</Button></Link></li>
                                        <li><Link to="/"><Button className="category">women</Button></Link></li>
                                        <li><Link to="/"><Button className="category">beauty</Button></Link></li>
                                        <li><Link to="/"><Button className="category">watches</Button></Link></li>
                                        <li><Link to="/"><Button className="category">kids</Button></Link></li>
                                        <li><Link to="/"><Button className="category">Gifts</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Home</Button></Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Men</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Fragrances</Button></Link>
                                        <Link to="/"><Button>Grooming For Men</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Women</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Indian wear</Button></Link>
                                        <Link to="/"><Button>western wear</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Fragrances</Button></Link>
                                        <Link to="/"><Button>Bags & Wallets</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Beauty</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Makeup</Button></Link>
                                        <Link to="/"><Button>Skincare</Button></Link>
                                        <Link to="/"><Button>Bath & Body</Button></Link>
                                        <Link to="/"><Button>Nails</Button></Link>
                                        <Link to="/"><Button>Haircare</Button></Link>
                                        <Link to="/"><Button>tools & Accessories</Button></Link>
                                        <Link to="/"><Button>Women's Fragrances</Button></Link>
                                        <Link to="/"><Button>Men's Frangrances</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Watches</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Mens Watches</Button></Link>
                                        <Link to="/"><Button>womens Watches</Button></Link>
                                        <Link to="/"><Button>kids watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Kids</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Boys</Button></Link>
                                        <Link to="/"><Button>Girls</Button></Link>
                                        <Link to="/"><Button>Infants</Button></Link>
                                        <Link to="/"><Button>Toys</Button></Link>
                                        <Link to="/"><Button>School Essential</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Gifts</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>gifts for her</Button></Link>
                                        <Link to="/"><Button>gifts for him</Button></Link>
                                        <Link to="/"><Button>Instant gifting</Button></Link>
                                        <Link to="/"><Button>house warming gift</Button></Link>
                                        <Link to="/"><Button>wedding gifts</Button></Link>
                                        <Link to="/"><Button>Sunglasses & Frames</Button></Link>
                                        <Link to="/"><Button>Accessories</Button></Link>
                                        <Link to="/"><Button>Jewellery</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Blog</Button></Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button className="category">Contact Us</Button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};
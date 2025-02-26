import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { useContext, useEffect } from 'react';
import { MyContext } from '../../../App';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function CountryDropDown() {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selectedTab, setSelectedTab]= useState(null);
    const [countryList, setCountryList]=useState([]);

    const context=useContext(MyContext);

    const selectCountry=(index, country)=>{
        setSelectedTab(index);
        setIsOpenModel(false);
        context.setSelectedCountry(country);
    }
    useEffect(()=>{
        setCountryList(context.countryList);
    },[context.countryList]);
    const filterList=(e)=>{
        const keyword=e.target.value.toLowerCase();
        if(keyword!==""){
            const list=countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        }else{
            setCountryList(context.countryList);
        }
    }
    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className="lable">Your Location</span>
                    <span className="name">{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? 
                    context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry: 'Select Location' }</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
            <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)} className="locationModel" TransitionComponent={Transition} >
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModel(false)}><MdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div> 
                <ul className="countryList mt-3">
                    {
                        countryList?.length!==0 && countryList?.map((item,index)=>{
                            return (<li key={index}><Button onClick={()=>selectCountry(index, item.country)}
                                    className={`${selectedTab===index? 'active' : ''}`}
                                    >{item.country}</Button></li>);
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
};
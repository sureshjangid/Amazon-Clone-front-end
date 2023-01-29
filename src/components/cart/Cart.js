import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './cart.css'
// import Empty from './Empty';
import Option from './Option';
 import Right from './Right';
import Subtotal from './Subtotal';

const Cart = () => {

    

    return (
        <>
                <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <span className="leftbuyprice">Price</span>
                            <Divider />

                            
                                  
                               
                                            <div className="item_containert" key={'ind'}>
                                                <img src={"../bannerImage/earbirds.jpg"} alt="imgitem" />
                                                <div className="item_details">
                                                    <h3>{"ZEBRONICS Zeb-Sound Bomb N1 True Wireless in Ear"}</h3>
                                                    {/* <h3>{"ZEBRONICS Zeb-Sound Bomb N1"}</h3> */}
                                                    <h3 className="diffrentprice">₹{1599}.00</h3>
                                                    <p className="unusuall">Usually dispatched in 8 days.</p>
                                                    <p>Eligible for FREE Shipping</p>
                                                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                    <Option/>
                                                </div>
                                                <h3 className="item_price">₹{9999}.00</h3>
                                            </div>
                                            <Divider />
                              
                           
                         
                            <Subtotal />
                        </div>
                        <Right />
                    </div>
                </div> 
            
        </>
    )
}

export default Cart;
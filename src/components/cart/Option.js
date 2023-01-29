import React, { useContext } from 'react'
// import { Logincontext } from '../context/Contextprovider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Option = () => {

    return (
        <div className="add_remove_select" key={'deletedata'}>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p  style={{ cursor: "pointer" }}>Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
            {/* <ToastContainer /> */}
        </div>

    )
}

export default Option;
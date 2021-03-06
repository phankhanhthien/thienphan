import React from 'react'
import {useState} from "react";
import PropTypes from 'prop-types'
import {filterItem} from "../actions/listItem.js";
import { useDispatch } from 'react-redux'
const Searchbar =(props) =>{
    const [value,setvalue] = useState({
        active : 'Status',
        search : '',
        categories:"categoriesCollection",
        skillss:"skillsCollection",
        services:"servicesCollection"
    })
    const dispatch = useDispatch()

// get value
    function getvalue(event){ event.preventDefault();setvalue({...value,active:event.target.value })}
    function formvalue(event){ event.preventDefault();setvalue({...value, search: event.target.value})}
    function getCategoriesValue(event){ event.preventDefault();setvalue({...value, categories: event.target.value})}
    function getSkillssValue(event){ event.preventDefault();setvalue({...value, skillss: event.target.value})}
    function getServicesValue(event){ event.preventDefault();setvalue({...value, services: event.target.value})}



    function submit(){
            const action = filterItem(value);
            dispatch(action);
            console.log( dispatch(action));
       
             
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group mt-5">
                        <input type="text" className="form-control w-25" value={value.search} aria-label="Text input with segmented dropdown button" placeholder="Search me..." onChange={formvalue }/>
                        <button type="button" className="btn btn-secondary" onClick={submit}>Search</button>
                        <select className="form-select" onChange={getvalue}>
                            <option defaultValue="Status" >Status</option>
                            <option value="true" >Online</option>
                            <option value="false">Offline</option>
                        </select>
                        <select className="form-select" onChange={getCategoriesValue}>
                            <option defaultValue="categoriesCollection">categoriesCollection</option>
                            <option value="T?? v???n t??m l??">T?? v???n t??m l??</option>
                            <option value="Xem phong th???y">Xem phong th???y</option>
                            <option value="T?? v???n h??n nh??n gia ????nh">T?? v???n h??n nh??n gia ????nh</option>
                            <option value="Xem t?????ng h???c">Xem t?????ng h???c</option>
                        </select>
                        <select className="form-select" onChange={getSkillssValue}>
                            <option defaultValue="skillsCollection">skillsCollection</option>
                            <option value="L???ng nghe">L???ng nghe</option>
                            <option value="T??m l?? h???c">T??m l?? h???c</option>
                            <option value="T?? v???n">T?? v???n</option>
                        </select>
                        <select className="form-select" onChange={getServicesValue}>
                            <option defaultValue="servicesCollection">servicesCollection</option>
                            <option value="ChatService">ChatService</option>
                            <option value="PhoneService">PhoneService</option>
                            <option value="VideoService">VideoService</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </div>
       
    )
}

Searchbar.propTypes = {

}

export default Searchbar


import React from 'react';
import { useState,useEffect } from 'react';
import '../index.css';
import { Container } from '@material-ui/core';
import axios from 'axios';
import Transfer from './Transfer';


const View = (props) => {
    
    const [view,setView] =useState({});
    console.log(props.id);
    useEffect(()=>{
        axios.get(`http://localhost:8000/customers/${props.id}`).then((response)=>{
            setView(response.data[0]);
        })
    },[])
    return(
        <>
        <Container maxWidth="sm">
            <div className="view">
                <table id="viewTable">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Details</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>Unique ID</td>
                            <td>{view.uniqueID}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{view.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{view.email}</td>
                        </tr>
                        <tr>
                            <td>Current Balance</td>
                            <td>{view.amount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Transfer data={props} />
            </Container>
        </>
    );
}

export default View;

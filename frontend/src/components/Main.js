import React from 'react'
import { useState,useEffect,Fragment } from 'react';
import axios from 'axios'
import Home from './Home'
import './Main.css'


function Main() {
    const [messages,setMessages]=useState([])
    const [flag,setFlag]=useState(false)
    const [id,SetId]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:4000/api/')
        .then((res)=>{
            setMessages(res.data.message)
            
        }).catch(err=>{
            console.log(err)
        })
    },[])
    const updateMessage = (id)=>{
     
        SetId(id)
        setFlag(true)

            
        

    }
    function update(){
        return <Home id={id}/>
    }
    
    return (
        <div className="step" style={{marginLeft:'500px'}}>
            <Fragment>
                {flag ? update() : (
                    <Fragment>
                        <h2>All messages</h2>
                 {messages.map(msg=>{
                return(

                    <div className="mainBox"  onClick={()=>{updateMessage(msg._id)}}>
                    
                        <h4>Date {msg.createdAt}</h4>
                        <h2 style={{color:'red'}}>{msg.title}</h2>

                        <p>{msg.content}</p>
                        
                    </div>

                )
            })}
                        
                         </Fragment>
                )}
            </Fragment>
            
        </div>
    )
}

export default Main

import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'

function Home({id}) {
    const [title,setTitle]=useState()
    const [content,setMessage]=useState()
    const [flag,setFlag]=useState(false)
    let msg
    useEffect(()=>{
        if(localStorage.getItem('cancelMsg')){
             msg= localStorage.getItem('cancelMsg')
             msg= JSON.parse(msg)
            setMessage(msg.content)
            setTitle(msg.title)
            
        }
       
        axios.get(`http://localhost:4000/api/${id}`).then(
            res=>{
                setTitle(res.data.message.title)
            setMessage(res.data.message.content)

                console.log('msg',res.data.message)
                setFlag(true)
            }
            

        ).catch(err=>{
            console.log(err)
        })

    },[msg])

    const saveTolocal= ()=>{
        let message = {
            title:title,
            content:content
        }
        localStorage.setItem('cancelMsg',JSON.stringify(message))
    }


    const saveBtn = ()=>{
        axios.post('http://localhost:4000/api/',{
            title,
            content
        }).then((response)=>{
            alert('Msg added')
            localStorage.removeItem('cancelMsg')
            setMessage('')
            setTitle('')
        }).catch((err)=>{
            console.log(err)
        })
    }
    

    return (
        <div >
            {
                flag ? (
                    <Fragment>
                        <label>Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} onBlur={()=>{saveTolocal()}} /> <br/>
            <label>Content</label>
            <input type="text" value={content} onChange={(e)=>{setMessage(e.target.value)}} onBlur={()=>{saveTolocal()}} />
             <br/><button style={{color:'white',background:'black'}} onClick={()=>{saveBtn()}}>Save</button>
             <button style={{color:'white',background:'black'}} onClick={()=>{saveTolocal()}}>Cancel</button>
             <button style={{color:'white',background:'black'}} >draft to button</button>
                    </Fragment>
                )
                :(
                    <Fragment>
                        <label>Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} onBlur={()=>{saveTolocal()}} /> <br/>
            <label>Content</label>
            <input type="text" value={content} onChange={(e)=>{setMessage(e.target.value)}} onBlur={()=>{saveTolocal()}} />
             <br/><button style={{color:'white',background:'black'}} onClick={()=>{saveBtn()}}>Save</button>
             <button style={{color:'white',background:'black'}} onClick={()=>{saveTolocal()}}>Cancel</button>
             <button style={{color:'white',background:'black'}} >draft to button</button>
                    </Fragment>
                )
            }
            
        </div>
    )
}

export default Home

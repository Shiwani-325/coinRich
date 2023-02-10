import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CoinRich from './CoinRich'
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const [logindata, setLoginData] = useState([]);
    const history = useNavigate();
    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                    <center>
                        <h1>CashRich</h1>
                        <h1>User Name:-{logindata[0].name}</h1>
                        <button1 onClick={userlogout}>LogOut</button1>
                        </center>
                    </>
            }
<CoinRich/>
        </>
    )
}

export default Details























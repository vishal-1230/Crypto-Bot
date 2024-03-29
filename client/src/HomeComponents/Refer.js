import React from 'react'
import { useState } from 'react'
import { TbCopy } from 'react-icons/tb'
import './Refer.css'

function Refer() {

    const [rid, setrid] = useState('')
    const [ridLoaded, setridLoaded] = useState(false)

    async function loadRid(){
        const response=await fetch(`http://20.193.147.19:8080/getReferralId?key=${document.cookie}`)
        const data=await response.json()
        setridLoaded(true)
        setrid(data)
    }
    loadRid()

    function onRef(){
        window.location.href=''
        alert('User Referred Successfully')
    }

  return (
    <div className='referBox'>
        <h1 className='referHeading'>Refer & Earn</h1>
        <div className="referTxt">Refer to Someone and get a Whopping 10% of their First License Tier Purchase!</div>
        <div className="referSomeone">
            <h2 className="referSomeoneHeading">Refer To Someone</h2>
            <form action="http://20.193.147.19:8080/refer" method='post' className="referSomeoneForm">
                <div className="referSomeoneFormDiv">
                <div className="refNameDiv">
                <label htmlFor="" className="refNameLbl">Name</label>
                <input type="text" required name='name' placeholder='Name of the Person' className='refName' id='refName' />
                </div>
                <div className="refEmailDiv">
                <label htmlFor="" className="refEmailLbl">Email</label>
                <input type="text" required name='email' placeholder='Email of that Person' className="refEmail" id="refEmail" />
                </div>
                <div className="refPhoneDiv">
                <label htmlFor="" className="refPhoneLbl">Phone</label>
                <input type="Number" name='phone' placeholder='Phone Number of the Person' className="refPhone" id="refPhone" />
                </div>
                </div>
                    <button className="refBtn" onClick={onRef}>Refer</button>
            </form>
            <div className="getRefUrlDiv">
                <h2 className="getRefUrlHeading">Get Your Referral Link</h2>
                <div className="refUrlDiv">
                    <span className="refUrl">http://localhost:3000/refer/{ridLoaded ? rid : ''}</span>
                    <TbCopy className='copyBtn' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Refer
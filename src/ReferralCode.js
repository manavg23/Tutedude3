import React from 'react'
import './ReferralCode.css'
import referralcode from 'referral-code-generator';

export default function ReferralCode() {
    const referral = ()=>{
    
        var ref =referralcode.alphaNumeric('uppercase',2,2)
        document.getElementById('referral-code').innerHTML=ref
      }
React.useEffect(()=>{
    referral()
},[])
  return (
    <div className='ReferralCode'>
<div className='info'>UI/UX > Refer & Earn > Friends Referred </div>
<div className='referral-box'>
    <div className='referral-text-box'/>
<div className='referral-text'>Your Referral Code</div>
<div className='referral-code' id='referral-code'></div>
</div>
<div className='dashboard-box'>
<div className='wallet-balance'>Wallet Balance</div>
<div className='wallet-amount'>$500</div>

</div>

      
    </div>
  )
}

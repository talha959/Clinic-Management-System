import React, { useState } from 'react'
import '../Manage.css'
import Modal from 'react-modal';
import Logout from '../Logout';
const Head = () => {
    const [openmodal,setOpenmodal]=useState(false);
    const modaltoggle=()=>{
        setOpenmodal(!openmodal);
    }
  return (
    <div className='heading' >
        <h1 className='h1' >Clinic Management System</h1>
        <div className='icon'>
            <div className='head-box' >
                <div className='Alhubi' >
                <svg className='svg-margin' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z" fill="#FBF8F8"/>
                </svg>
                    <label className='lab' style={{fontSize:'20px'}} >Alhubi Zafari</label>
                    <div className='circle' onClick={modaltoggle} >
                    <svg className='svgs' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M23.4746 20.8797C22.9587 19.6579 22.2102 18.5481 21.2707 17.6121C20.3339 16.6734 19.2243 15.925 18.0031 15.4082C17.9921 15.4027 17.9812 15.4 17.9703 15.3945C19.6738 14.1641 20.7812 12.1598 20.7812 9.89844C20.7812 6.15234 17.746 3.11719 13.9999 3.11719C10.2539 3.11719 7.2187 6.15234 7.2187 9.89844C7.2187 12.1598 8.32612 14.1641 10.0296 15.3973C10.0187 15.4027 10.0078 15.4055 9.99682 15.4109C8.77182 15.9277 7.6726 16.6688 6.72924 17.6148C5.79056 18.5516 5.04215 19.6612 4.52534 20.8824C4.01762 22.078 3.7438 23.3599 3.7187 24.6586C3.71797 24.6878 3.72309 24.7168 3.73375 24.744C3.74442 24.7712 3.76041 24.7959 3.7808 24.8168C3.80119 24.8377 3.82555 24.8543 3.85245 24.8657C3.87935 24.877 3.90825 24.8828 3.93745 24.8828H5.57807C5.69838 24.8828 5.79409 24.7871 5.79682 24.6695C5.85151 22.5586 6.69917 20.5816 8.1976 19.0832C9.74799 17.5328 11.807 16.6797 13.9999 16.6797C16.1929 16.6797 18.2519 17.5328 19.8023 19.0832C21.3007 20.5816 22.1484 22.5586 22.2031 24.6695C22.2058 24.7898 22.3015 24.8828 22.4218 24.8828H24.0625C24.0916 24.8828 24.1205 24.877 24.1474 24.8657C24.1743 24.8543 24.1987 24.8377 24.2191 24.8168C24.2395 24.7959 24.2555 24.7712 24.2661 24.744C24.2768 24.7168 24.2819 24.6878 24.2812 24.6586C24.2539 23.3516 23.9832 22.0801 23.4746 20.8797ZM13.9999 14.6016C12.7449 14.6016 11.5636 14.1121 10.6749 13.2234C9.78628 12.3348 9.29682 11.1535 9.29682 9.89844C9.29682 8.64336 9.78628 7.46211 10.6749 6.57344C11.5636 5.68477 12.7449 5.19531 13.9999 5.19531C15.255 5.19531 16.4363 5.68477 17.3249 6.57344C18.2136 7.46211 18.7031 8.64336 18.7031 9.89844C18.7031 11.1535 18.2136 12.3348 17.3249 13.2234C16.4363 14.1121 15.255 14.6016 13.9999 14.6016Z" fill="#1E9AF1"/>
                    </svg>
                </div>
                </div>
            </div>
        </div>
        <Modal
        isOpen={openmodal}
        onRequestClose={modaltoggle}
        className='modal'
        >
        <Logout setOpenmodal={setOpenmodal} />
        </Modal>
  </div>
  )
}

export default Head
import React from 'react'

import Gen1 from '../assets/images/elemax3.jpg'
import Gen2 from '../assets/images/elemax1.jpg'

function Product(){
        const [shiftClass , setShiftClass] = React.useState('')
        const [showEnquiries , setShowEnquiry] = React.useState('d-none')
        const [showChats , setShowChats] = React.useState('d-none')
        const [mainBox , setMainBox] = React.useState('d-block')

    const handleEnquiry = (e) => {
        e.preventDefault()
        mainBox === "d-block" ?
            setMainBox("d-none") : setMainBox("d-block")
        shiftClass === "" ? 
            setShiftClass("shift-left") : setShiftClass("")
        
        showEnquiries === "d-none" ? 
            setShowEnquiry("") : setShowEnquiry("d-none")
    }

    const handleChats = (e) => {
        e.preventDefault()

        mainBox === "d-block" ?
            setMainBox("d-none") : setMainBox("d-block")

        shiftClass === "" ? 
            setShiftClass("shift-left") : setShiftClass("")
        
        showChats === "d-none" ? 
            setShowChats("") : setShowChats("d-none")
    }
    
    return(
        <>
            <div className="main">
                <div className="container-fluid mt-4 single-product-page">
                    <span className="mr-2">Shop</span>
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className="mr-2">Generator</span>
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className="main-product">JCB Generator</span>
                    <div className="mt-3 single-product">
                        <div className="row">
                            <div className={"col-md-9 shadow-sm mb-3 product-card " + shiftClass}>
                                <div className="row">
                                    <div className="col-md-6 product-img">
                                        <img src={Gen1} alt="" width="100%" height="250px" />
                                        <h3>Cumming P70 AC</h3>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                            Debitis, temporibus adipisci. Debitis, temporibus adipisci.
                                            Debitis, temporibus adipisci. Debitis, temporibus adipisci.
                                        </p>
                                    </div>
                                    <div className="col-md-6 product-info">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                            Debitis, temporibus adipisci. Officiis porro magni, repudiandae 
                                            alias dolorem commodi assumenda natus obcaecati vitae recusandae 
                                            quidem debitis fugit, repellat adipisci eveniet ipsa!
                                        </p>
                                        <div className="row justify-content-center mt-5 mb-5">
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <p className="col-6 move">
                                                        Genset Model
                                                    </p>
                                                    <p className="col-6">
                                                        GP P7
                                                    </p>
                                                    <p className="col-6 move">
                                                        Engine Model
                                                    </p>
                                                    <p className="col-6">
                                                        403A-11G1/9.5
                                                    </p>
                                                    <p className="col-6 move">
                                                        Prime Power
                                                    </p>
                                                    <p className="col-6">
                                                        7/9
                                                    </p>
                                                    <p className="col-6 move">
                                                        Alternator Model
                                                    </p>
                                                    <p className="col-6">
                                                        GPI 164B/8.8
                                                    </p>
                                                </div>
                                            </div>    
                                        </div>
                                        <div className="text-center">
                                            <a className="mr-3" href="#" onClick={handleEnquiry}>Make Enquiry</a>
                                            <a href="#" onClick={handleChats}>Online Chat</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-3 other-parts " + mainBox}>
                                
                                <div className="part mb-3">
                                    <img src={Gen2} alt="" />
                                    <h2>JCB P70</h2>
                                    <p>Diesel powered</p>
                                </div>
                                <div className="part mb-3">
                                    <img src={Gen2} alt="" />
                                    <h2>JCB P70</h2>
                                    <p>Diesel powered</p>
                                </div>
                            </div>
                            <div className={"col-md-3 enquiry-box " + showEnquiries}>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea placeholder="What can we help you with"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit">Submit</button>
                                        </div> 
                                    </div>
                                </form>
                            </div>
                            <div className={"col-md-3 chat-box " + showChats}>
                                Chat Box
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Product
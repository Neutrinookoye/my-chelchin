import React , {useState} from 'react'

import Gen1 from '../assets/images/elemax3.jpg'
import Gen2 from '../assets/images/elemax1.jpg'

function Product(){
        const [shiftClass , setShiftClass] = useState('')
        const [showEnquiry , setShowEnquiry] = useState('d-none')
        const [showChats , setShowChats] = useState('d-none')
        const [mainBox , setMainBox] = useState('d-block')
        const [cb , setCb] = useState('')
        const [eb , setEb] = useState('')


    const handleEnquiry = (e) => {
        e.preventDefault() 

        mainBox === "d-block" ? setMainBox("d-none") : setMainBox("d-block")

        shiftClass === "" ? setShiftClass("shift-left") : setShiftClass("")
        
        showEnquiry === "d-none" ? setShowEnquiry("") : setShowEnquiry("d-none")

        cb === "" ? setCb("d-none") : setCb("")
        
        // showChats === "" ? setShowChats("d-none") : setShowChats("")

    }

    const handleChats = (e) => {
        e.preventDefault()

        mainBox === "d-block" ? setMainBox("d-none") : setMainBox("d-block")

        shiftClass === "" ? setShiftClass("shift-left") : setShiftClass("")
        
        showChats === "d-none" ? setShowChats("") : setShowChats("d-none")

        eb === "" ? setEb("d-none") : setEb("")

        // showEnquiry === "" ? setShowEnquiry("d-none") : setShowEnquiry("")

    }


    return(
        <>
            <div className="prod-main">
                <div className="container-fluid mt- single-product-page">
                    <span className="mr-2 title">Shop</span>
                    <i className="fa fa-angle-right"></i>
                    <span className="mr-2 title"> Generator</span>
                    <i className="fa fa-angle-right"></i>
                    <span className="sub-title"> JCB Generator</span>
                    <div className="mt-3 single-product">
                        <div className="row">
                            <div className={"col-md-9 shadow-sm mb-3 product-card " + shiftClass}>
                                <div className="row">
                                    <div className="col-md-6 product-img">
                                        <img src={Gen1} alt="" width="100%" height="250px" />
                                        <h3>CUMMING P70 AC</h3>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                            Debitis, temporibus adipisci. Debitis, temporibus adipisci.
                                            Debitis, temporibus adipisci. Debitis, temporibus adipisci.
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-info">
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                                Debitis, temporibus adipisci. Officiis porro magni, repudiandae 
                                                alias dolorem commodi assumenda natus obcaecati vitae recusandae 
                                                quidem debitis fugit, repellat adipisci eveniet ipsa!
                                            </p>
                                            <div className="row justify-content-center">
                                                <div className="col-6 text-right aa">
                                                    <p>Genset Model</p>
                                                </div>
                                                <div className="col-6 bb">
                                                    <p>GP P7</p>
                                                </div>
                                                <div className="col-6 text-right aa">
                                                    <p>Engine Model</p>
                                                </div>
                                                <div className="col-6 bb">
                                                    <p>403A-11G1/9.5</p>
                                                </div>
                                                <div className="col-6 text-right aa">
                                                    <p>Prime Mover</p>
                                                </div>
                                                <div className="col-6 bb">
                                                    <p>7/9</p>
                                                </div>
                                                <div className="col-6 text-right aa">
                                                    <p>Alternator Model</p>
                                                </div>
                                                <div className="col-6 bb">
                                                    <p>GPI 164B/8.8</p>
                                                </div>
                                            </div>
                                            <div className="prod-btn">
                                                <a href="#" className={"mr-3 btn " + eb} onClick={handleEnquiry}>Make Enquiry</a>
                                                <a href="#" className={"btn " + cb} onClick={handleChats}>Online Chat</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-3 other-parts " + mainBox}>
                                <div className="part">
                                    <img src={Gen2} alt="" />
                                    <h3>JCB P70</h3>
                                    <p>Diesel Powered</p>
                                </div>
                                <div className="part">
                                    <img src={Gen2} alt="" />
                                    <h3>JCB P70</h3>
                                    <p>Diesel Powered</p>
                                </div>
                            </div>
                            <div className={"col-md-3  " + showEnquiry}>
                                <div className="enquiry-box">
                                    <form method="POST" className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea col="3" row="3" placeholder="what can we help you with?" className="form-control" ></textarea>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn btn-enq" >Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={"col-md-3 " + showChats}>
                                <div className="chat-box ">
                                    <p>Chat Box</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Product
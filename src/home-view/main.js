import React from 'react'
import {Link} from 'react-router-dom'

import {UncontrolledTooltip} from 'reactstrap'
import Gen1 from '../assets/images/elemax1.jpg'


const LandingPage = () => {
    return(
        <div className="landing"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1>Online Shopping</h1>
                        <p>Dius aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nullar pariatur</p>
                        <Link to="/about">READ MORE...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductColumns = () => {
    return(
        <>
        <div className="col-md-3 mb-3">
            <Link to="/shop/product/123" id="tooltip1">
                <div className="card prodCard">
                    <img src={Gen1} alt=""></img>
                    <div className="info">
                        <h5>JCB GENERATOR</h5>
                        <div className="row">
                        <p className="col-6 a">
                            Genset Model
                        </p>
                        <p className="col-6 b">
                            GP P7
                        </p>
                        <p className="col-6 a">
                            Engine Model
                        </p>
                        <p className="col-6 b">
                            403A-11G1/9.5
                        </p>
                        <p className="col-6 a">
                            Prime Power
                        </p>
                        <p className="col-6 b">
                            7/9
                        </p>
                        <p className="col-6 a">
                            Alternator Model
                        </p>
                        <p className="col-6 b">
                            GPI 164B/8.8
                        </p>
                    </div>
                    </div>
                </div>
            </Link>
            <UncontrolledTooltip delay={0} target="tooltip1">
                Hire
            </UncontrolledTooltip>
            <Link to="#" id="tooltip2">
                <div className="card prodCard">
                    <img src={Gen1} alt="" />
                    <div className="info">
                        <h5>JCB Generator</h5>
                        <div className="row">
                            <p className="col-6 a">
                                Genset Model
                            </p>
                            <p className="col-6 b">
                                GP P7
                            </p>
                            <p className="col-6 a">
                                Engine Model
                            </p>
                            <p className="col-6 b">
                                403A-11G1/9.5
                            </p>
                            <p className="col-6 a">
                                Prime Power
                            </p>
                            <p className="col-6 b">
                                7/9
                            </p>
                            <p className="col-6 a">
                                Alternator Model
                            </p>
                            <p className="col-6 b">
                                GPI 164B/8.8
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <UncontrolledTooltip delay={0} target="tooltip2">
                Hire
            </UncontrolledTooltip>
        </div>

        <div className="col-md-6 mb-3">
            <div className="card mainProdDisplay">
                <img src={Gen1} alt="" />
                <h3>Cumming P70 AC</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                temporibus adipisci. Officiis porro magni. Repudiandae alias 
                dolorem commodi assumenda natus obcaecati vitae recusandae 
                </p>
            </div>
        </div> 

        <div className="col-md-3 mb-3">
            <Link to="/shop/product/001">
                <div className="card prodCard">
                    <img src={Gen1} alt="" />
                    <div className="info">
                        <h5>JCB Generator</h5>
                        <div className="row">
                            <p className="col-6 a">
                                Genset Model
                            </p>
                            <p className="col-6 b">
                                GP P7
                            </p>
                            <p className="col-6 a">
                                Engine Model
                            </p>
                            <p className="col-6 b">
                                403A-11G1/9.5
                            </p>
                            <p className="col-6 a">
                                Prime Power
                            </p>
                            <p className="col-6 b">
                                7/9
                            </p>
                            <p className="col-6 a">
                                Alternator Model
                            </p>
                            <p className="col-6 b">
                                GPI 164B/8.8
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="#">
                <div className="card prodCard">
                    <img src={Gen1} alt="" />
                    <div className="info">
                        <h5>JCB Generator</h5>
                        <div className="row">
                            <p className="col-6 a">
                                Genset Model
                            </p>
                            <p className="col-6 b">
                                GP P7
                            </p>
                            <p className="col-6 a">
                                Engine Model
                            </p>
                            <p className="col-6 b">
                                403A-11G1/9.5
                            </p>
                            <p className="col-6 a">
                                Prime Power
                            </p>
                            <p className="col-6 b">
                                7/9
                            </p>
                            <p className="col-6 a">
                                Alternator Model
                            </p>
                            <p className="col-6 b">
                                GPI 164B/8.8
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div> 
    </>
    )
}

const ProductDisplay = () => {
    return(
        <div className="productDisp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center section-header">
                        <h3 className="">LATEST PRODUCTS</h3>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <ProductColumns />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}


function HomeComponent() {
    return(
        <>
            <div className="main-home">
                <LandingPage />
                <ProductDisplay />
            </div>
        </>
    )
}



export default HomeComponent;
import React from 'react'

const ContactParagraph = () => {
    return(
        <div className="col-md-6">
            <div className="contact-para">
                <p className="a">Phasellus finibus enim nulla, quis ornadore odios facillis eu.</p>
                <p className="a mb-0 pb-1">Sara.cunningham@gmail.com</p>
                <p className="a">alice.murphy@gmail.com</p>
                <p className="b">+234 812 605 7131  +234 801 109 2765</p>
                <p className="b">+234 709 833 3897</p>
            </div>
        </div>
    )
}

const ContactForm = () => {
    return(
        <div className="col-md-6">
            <div className="pr-5 pl-5 contactForm">
                <h2>HOW CAN WE SERVE YOU?</h2>
                <form action="" method="POST" id="" >
                    <input type="text" id="" name="" placeholder="FULL NAME" className="form-control mb-4" />
                    <input type="telephone" placeholder="PHONE NUMBER" className="form-control mb-4" />
                    <input type="email" placeholder="E-MAIL" className="form-control mb-4" id="" name="" />
                    <textarea col="5" row="5" className="form-control mb-4" id="" name="" />
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


const ContactPage = () => {
    return( 
        <>
            <div className="pt-5 mt-5 contactPage">
                <div className="container mt-5">
                    <div className="row">
                        <ContactForm />
                        <ContactParagraph />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContactPage
import React from 'react';

import '../../styles/Contact.css';

function ContactContent() {
    return (
        <div id="contact">

            <div className="contact-clean">
                <form>
                    <h2 className="text-center">Contact us</h2>
                    <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
                    <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
                    <div className="form-group"><button className="btn btn-primary" type="submit">send </button></div>
                </form>
            </div>

            <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright © Your Website 2021</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacy</a>
                        <span className="text-white mx-1">·</span>
                        <a className="link-light small" href="#!">Terms</a>
                    </div>
                </div>
            </div>
        </footer>

        </div>


    );
}

export default ContactContent;
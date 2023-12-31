import React, { Fragment, useState } from "react";
import NavigationBar
 from "../components/Navbar/NavigationBar";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const mailHandler = (e) => {
        setMail(e.target.value);
    };
    const phoneHandler = (e) => {
        setPhone(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
        const userDetails = {
            name: name,
            email: email,
            phoneNumber: phone,
        };
        props.userDetail(userDetails);
        setName("");
        setPhone("");
        setMail("");
    };
    return (
        <Fragment>
            <NavigationBar></NavigationBar>

            <Title>Contact Us</Title>
            <div className="d-flex justify-content-center my-5">
            <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"></img>
      </div>
                <form
                    onSubmit={submitHandler}
                    className="shadow  rounded-4 p-4 "
                    style={{ width: "600px", backgroundColor: "#FFE082" }}
                >
                    <div className="row mb-3 d-flex justify-content-center ">
              
                        <div className="col-xs-6">
                            <label htmlFor="name" className="col-sm-2 col-form-label fs-5 ">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control py-2"
                                id="name"
                                value={name}
                                onChange={nameHandler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-xs-5">
                            <label htmlFor="email" className="col-sm-2 col-form-label fs-5">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control py-2"
                                id="email"
                                value={email}
                                onChange={mailHandler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-xs-5">
                            <label htmlFor="phone" className="col-sm-2 col-form-label fs-5">
                                PhoneNumber
                            </label>
                            <input
                                type="number"
                                className="form-control py-2"
                                id="phone"
                                value={phone}
                                onChange={phoneHandler}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="btn btn-warning w-100 my-2 py-2  fs-5 mt-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default Contact;
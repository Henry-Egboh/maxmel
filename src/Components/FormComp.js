import { Container } from "react-bootstrap";
import { Asterisk } from "react-bootstrap-icons";

const FormComp = () => {
    return (
        <main>
            <div className="wrapper my-5">
                <Container className="d-flex justify-content-center">
                    <div className="wrapper-div d-flex flex-column align-items-center">
                        <h4 className="color-text">Fill Out the Fields</h4>
                        <p className="text-muted">The fields marked <sup><Asterisk className="text-danger asterisk-size" /></sup> are compulsory</p>
                        {/* forms */}
                        <fieldset>
                            <form action="" className="d-flex flex-column gap-3">
                                {/* first name */}
                                <div>
                                    <label for="firstName" className="label-width">FirstName <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <input className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" id="firstName" type='text' placeholder="Enter first name"  />
                                </div>
                                {/* last name */}
                                <div>
                                    <label for="lastName" className="label-width">LastName :</label>
                                    <input className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" id='lastName' type='text' placeholder="Enter last name"  />
                                </div>
                                {/* email */}
                                <div>
                                    <label for="email" className="label-width">E-mail <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <input className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" id="email" type='email' placeholder="Enter email"  />
                                </div>
                                {/* date of birth */}
                                <div>
                                    <label className="label-width" for='dateOfBirth'>Date of birth <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <input className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" type="date" id="dateOfBirth" />
                                </div>
                                {/* LGA */}
                                <div>
                                    <label className="label-width" for="lga">LGA <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <input className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" list="listLGA" id="lga" name="lga" />
                                    <datalist id="listLGA">
                                        <option value='Ikwere'></option>
                                        <option value='Obio-Akor'></option>
                                        <option value='Andoni'></option>
                                        <option value='Vocana'></option>
                                        <option value='Ndoni'></option>
                                        <option value='Port Harcourt'></option>
                                        <option value='Oyigbo'></option>
                                        <option value='Ogoni'></option>
                                    </datalist>
                                </div>
                                {/* state */}
                                <div>
                                    <label className="label-width" for="state">State of Origin <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <select className=" border border-0 shadow bg-body p-3 rounded input-width py-2" id="state" name="state">
                                        <option value="Rivers">select</option>
                                        <option value="Rivers">Ogun</option>
                                        <option value="Rivers">Ekiti</option>
                                        <option value="Rivers">Lagos</option>
                                        <option value="Rivers">Abuja</option>
                                        <option value="Rivers">Rivers</option>
                                    </select>
                                </div>
                                {/* country */}
                                <div>
                                <label className="label-width" for="specialization">Specialization <sup><Asterisk className="text-danger asterisk-size" /></sup> :</label>
                                    <select className=" border border-0 shadow bg-body p-3 rounded input-width py-2" id="specialization" name="specialization">
                                        <option value="Rivers"></option>
                                        <option value="Rivers">AI Mining</option>
                                        <option value="Rivers">Web Developer</option>
                                        <option value="Rivers">Software Engineer</option>
                                        <option value="Rivers">ChatGPT</option>
                                        <option value="Rivers">Java Programmer</option>
                                    </select>
                                </div>
                                {/* policy */}
                                <div className="d-flex gap-4">
                                    <input id="check" type='checkbox' className="p-5"></input> 
                                    <label for="check" className="">
                                        I understand that the info provided is correct and I will bear the consequences of any false
                                        information
                                    </label>
                                </div>
                                {/* submit button */}
                                <button type="submit" className=" border border-0 shadow p-2 rounded btn btn-dark btn-outline-white text-light">Submit</button>
                            </form>
                        </fieldset>
                    </div>
                </Container> 
            </div>           
        </main>
    )
}

export default FormComp;
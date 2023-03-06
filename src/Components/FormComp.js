// import { Container } from "react-bootstrap";
import { Asterisk } from "react-bootstrap-icons";
import { useState } from "react";
import { validateEmail } from "./utils";


// print error message
const PrintErrorMessage = () => {
        return (
                <p className="mb-0">Please enter the minimum of 8 characters</p>
            );
}

const FormComp = () => {
    // use state hooks to get data from user and update it
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [lga, setLga] = useState("");
    const [state, setState] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [check, setCheck] = useState("");

    // form validation
    const getIsFormValid = () => { 
        return ( 
          firstName && validateEmail(email) && lga && state && 
          specialization && password.value.length >= 8
        ); 
      };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setDateOfBirth("");
        setLga("");
        setState("");
        setSpecialization("");
        setCheck("");
    }

    // handle form when submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submiited");
        console.log("Submitted successfully");
        clearForm();
    }
    return (
        <div>
            <div className="wrapper my-lg-5 d-flex justify-content-center">
                    <div className="wrapper-div d-flex flex-column align-items-center border border-3 border-secondary p-5 shadow bg-body rounded">
                        <h4 className="color-text">Fill Out the Fields</h4>
                        <p className="text-muted">The fields marked <sup><Asterisk className="text-danger asterisk-size" /></sup> are compulsory</p>
                        {/* forms */}
                        <form action="" className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                                {/* first name */}
                                <div>
                                    <label 
                                    htmlFor="firstName" 
                                    className="label-width">
                                        <span className="d-flex gap-2 mb-2">FirstName <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    id="firstName" 
                                    type="text"
                                    placeholder="Enter first name" 
                                    name="firstName" 
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                {/* last name */}
                                <div>
                                    <label 
                                    htmlFor="lastName" 
                                    className="label-width">
                                        <span className="d-flex gap-2 mb-2">LastName <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    id='lastName' 
                                    type='text' 
                                    placeholder="Enter last name" 
                                    name="lastName" 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                {/* email */}
                                <div>
                                    <label 
                                    htmlFor="email" 
                                    className="label-width">
                                        <span className="d-flex gap-2 mb-2">E-mail <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    id="email" 
                                    type='email' 
                                    placeholder="Enter email" 
                                    name="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                {/* password */}
                                <div>
                                    <label 
                                    htmlFor="password" 
                                    className="label-width">
                                        <span className="d-flex gap-2 mb-2">Password <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    name="password" 
                                    placeholder="password" 
                                    value={password.value} 
                                    type="password" 
                                    onChange={e =>{setPassword({...password, value: e.target.value});
                                    }}
                                    onBlur={() => {setPassword({...password, isTouched: true});
                                    }} />
                                </div>
                                <div className="text-danger d-flex">
                                    <div className="label-width"></div>
                                    <div className="input-width">{password.isTouched && password.value.length < 8 ? (<PrintErrorMessage />) : null}</div>
                                </div>
                                {/* date of birth */}
                                <div>
                                    <label 
                                    className="label-width" 
                                    htmlFor='dateOfBirth'>
                                        <span className="d-flex gap-2 mb-2">Date of birth <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    type="date"
                                    name="dateOfBirth" 
                                    id="dateOfBirth"
                                    value={dateOfBirth} 
                                    onChange={e => setDateOfBirth(e.target.value)} />
                                </div>
                                {/* LGA */}
                                <div>
                                    <label 
                                    className="label-width" 
                                    htmlFor="lga">
                                        <span className="d-flex gap-2 mb-2">LGA <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <input 
                                    className="border border-0 shadow bg-body p-3 rounded input-width py-2 ps-4" 
                                    list="listLGA" 
                                    id="lga" 
                                    name="lga"
                                    placeholder="Enter LGA"
                                    value={lga} 
                                    onChange={e => setLga(e.target.value)} />
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
                                    <label 
                                    className="label-width" 
                                    htmlFor="state">
                                        <span className="d-flex gap-2 mb-2">State of Origin <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <select 
                                    className=" border border-0 shadow bg-body p-3 rounded input-width py-2" 
                                    id="state" 
                                    name="state"
                                    value={state} 
                                    onChange={e => setState(e.target.value)}>
                                        <option value="select state">Select State ...</option>
                                        <option value="ogun">Ogun</option>
                                        <option value="ekiti">Ekiti</option>
                                        <option value="lagos">Lagos</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="rivers">Rivers</option>
                                    </select>
                                </div>
                                {/* specialization */}
                                <div>
                                <label 
                                className="label-width" 
                                htmlFor="specialization">
                                    <span className="d-flex gap-2 mb-2">Specialization <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                </label>
                                    <select 
                                    className=" border border-0 shadow bg-body p-3 rounded input-width py-2" 
                                    id="specialization" 
                                    name="specialization"
                                    value={specialization} 
                                    onChange={e => setSpecialization(e.target.value)}>
                                        <option value="Specialization">Specialization ...</option>
                                        <option value="AI Mining">AI Mining</option>
                                        <option value="Web Developer">Web Developer</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="ChatGPT">ChatGPT</option>
                                        <option value="Java Programmer">Java Programmer</option>
                                    </select>
                                </div>
                                {/* gender */}
                                <div className="d-lg-flex">
                                    <label 
                                    className="label-width">
                                        <span className="d-flex gap-2 mb-2">Gender <sup><Asterisk className="text-danger asterisk-size" /></sup> :</span>
                                    </label>
                                    <fieldset className="input-width ">
                                        <span className="me-4">
                                            <input 
                                            className="me-3" 
                                            id="male" 
                                            type="radio" 
                                            name="gender" 
                                            value="male"
                                            readOnly= {true}/>
                                            <label htmlFor="male"> Male</label>
                                        </span>
                                        <span>
                                            <input 
                                            className="me-3" 
                                            id="female" 
                                            type="radio" 
                                            name="gender"
                                            value="male"
                                            readOnly= {true} />
                                            <label htmlFor="female"> Female</label>
                                        </span>
                                    </fieldset>
                                </div>
                                {/* policy */}
                                <div className="d-flex gap-4">
                                    <input 
                                    id="check" 
                                    type='checkbox' 
                                    name="check"
                                    checked={check}
                                    onChange={e => setCheck(e.target.checked)} /> 
                                    <label 
                                    htmlFor="check" 
                                    className="footer-text text-dark">
                                        The information provided are correct and I will bear the consequences of any false
                                        information
                                    </label>
                                </div>
                                {/* submit button */}
                                <button 
                                type="submit" 
                                className=" border border-0 shadow p-2 rounded btn btn-dark btn-outline-white text-light"
                                disabled={!getIsFormValid()}>Submit</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default FormComp;
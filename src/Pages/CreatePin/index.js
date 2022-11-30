import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PinInput, PinInputField } from '@chakra-ui/react';
import Auth from '../../Layout/Auth';
import '../../Styles/Pages/auth.css';
// import { CiLock } from 'react-icons/ci';
// import {BsEnvelope} from 'react-icons/bs';
import { createPinService } from '../../services/auth';


const CreatePin = () => {
    const navigate = useNavigate();
    const [pin, setInput] = useState("");
    const [pin1, setInput1] = useState("");
    const [pin2, setInput2] = useState("");
    const [pin3, setInput3] = useState("");
    const [pin4, setInput4] = useState("");
    const [pin5, setInput5] = useState("");
    const [pin6, setInput6] = useState("");
    const [error, setError] = useState(false)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //         if ( pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ) {
    //             setError(true)
    //         }
    //     createPin();
    // }

    const createPin = async () => {
        const data = {
            pin
        };

        const detailUserId = `${response.id}`;

        const response = await createPinService(data, detailUserId);
            console.log(response);
            if (response.status === 201) {
            alert(response.data.message);
            navigate("/success-pin", { replace: true })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ) {
            setError(true)
        } else {
            localStorage.setItem("pin1", pin1)
            localStorage.setItem("pin2", pin2)
            localStorage.setItem("pin3", pin3)
            localStorage.setItem("pin4", pin4)
            localStorage.setItem("pin5", pin5)
            localStorage.setItem("pin6", pin6)
            const pin = localStorage.getItem("pin1") + localStorage.getItem("pin2") + localStorage.getItem("pin3") + localStorage.getItem("pin4") + localStorage.getItem("pin5") + localStorage.getItem("pin6")
            console.log(pin);
            navigate('/success-pin',{ replace : true })
        }
        // createPin();
    }


    return <Auth>
        <div className='title-right-wrapper'>

            <div className='title-top-right'>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself
            </div>
            <div className='subtitle-bottom-right'>
                Create 6 digits pin to secure all your money and your data in PayLens app. Keep it secret and don't tell anyone about your PayLens password and the PIN.
            </div>

        </div>

        <div className='pin-wrapper'>
            <form onSubmit={handleSubmit}>
                <PinInput className='d-flex pin-input' >
                    <PinInputField className='pin-input text-center' name='pin1' onChange={(e) => setInput1(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin2' onChange={(e) => setInput2(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin3' onChange={(e) => setInput3(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin4' onChange={(e) => setInput4(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin5' onChange={(e) => setInput5(e.target.value)} />
                    <PinInputField className='pin-input text-center' name='pin6' onChange={(e) => setInput6(e.target.value)} />
                </PinInput>
                <div className='error-message'>
                    {error && pin1.length === 0 && pin2.length === 0 && pin3.length === 0 && pin4.length === 0 && pin5.length === 0 && pin6.length === 0 ?
                    <label>Input cannot be empty !</label>:""}
                </div>
                <button className="btn-auth" id='submit' type="submit" value="Enter">Confirm</button>
                {/* <input type='submit'>Confirm</input> */}
            </form>
        </div>

  </Auth>
}

export default CreatePin
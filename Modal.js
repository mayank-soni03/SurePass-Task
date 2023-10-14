import React, { useState } from "react";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false)

    const Mymodal = () =>{
        return <>
        <h1>Name h1 Mayank</h1>
        <p>Mayank p</p>
        <button onClick={()=> setShowModal(false)} >Accept it</button>
        </>
    }

    return (
        <>
        <button onClick={() => setShowModal(true) } >Modal</button>
        {showModal &&<Mymodal /> }
        </>
    )
}

export default Modal;
import React, { useState, useRef, useEffect } from "react";

import ModalTecnologia from "../components/ModalTecnologias";

function CadastroProjetos() {


  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);


  return (
    <>
      <button onClick={() => setShowModal(true)}>Abrir</button>
      <ModalTecnologia 
        isOpen={showModal}
        onCancel={closeModal}
      />
    </>
  )
}

export default CadastroProjetos;
import React from "react";

function ModalTecnologia({ isOpen, onCancel }) {

  if (!isOpen) {
    return
  }


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute inset-0 backdrop-blur-[1px] bg-black bg-opacity-10" onClick={onCancel}></div>
        <div className="modal-container w-1/4 bg-white mx-auto rounded-lg z-50 overflow-y-auto px-8 py-4 max-h-[80vh]">
          {/* Modal */}
          <div>
            <ul className="space-y-2">
              <li className="bg-gray-200">HTML</li>
              <li className="bg-gray-200">CSS</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default ModalTecnologia;
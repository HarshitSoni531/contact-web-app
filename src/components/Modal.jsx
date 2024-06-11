import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 ${isOpen ? "blur-background" : ""}`}
        >
          <div className="bg-lightBlue p-6 rounded-lg w-96">
            <div className="flex justify-between items-center">
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none bg-red"
                onClick={onClose}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};
export default Modal;

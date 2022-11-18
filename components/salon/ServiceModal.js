import React from 'react';

const ServiceModal = ({children, ...props}) => {

  const handleHideModal = () => {
    props.toggleModal(false);
  }
  return (
    <>
      <div className={`fixed top-0 left-0 h-screen w-screen z-10 bg-overlay ${props.showModal !== false ? "block" :"hidden"}`} onClick={handleHideModal}></div>
      <div className={`${props?.className && props.className} top-1/4 left-1/2 -translate-x-1/2 z-50 h-auto w-max p-5 rounded-xl bg-white  ${props.showModal !== false ? "block" :"hidden"}`}>
        {children ? children : <p>Modal test...</p>}
      </div>
    </>
  )
}

export default ServiceModal;

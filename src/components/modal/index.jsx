import React from 'react'
import Form from '../AddForm'
const Modal = ({
    register,
    submitData,
    handleSubmit,
    setValue,
    startDate,
    endDate,
    handleStartChange,
    handleEndChange,
    setOpenSlot
}) => {
    return (
        <>
            <div className="min-w-screen h-screen animated fadeIn faster animate-fade fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto animate-fade rounded-xl shadow-lg  bg-white ">
                    {/* <!--content--> */}
                    <div className="">
                        {/* <!--body--> */}
                        <div className="text-center p-2 flex-auto justify-center">
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-semibold text-xl text-black"><h1>Add Appointment</h1></span>
                                <span className="bg-gray-300 text-black pl-2 pr-2 cursor-pointer rounded-md hover:text-white hover:bg-black hover:cursor-pointer hover:shadow-lg " onClick={() => setOpenSlot(false)} >x</span>
                            </div>
                            <div className="">
                                <Form
                                    register={register}
                                    submitData={submitData}
                                    handleSubmit={handleSubmit}
                                    setValue={setValue}
                                    startDate={startDate}
                                    endDate={endDate}
                                    handleStartChange={handleStartChange}
                                    handleEndChange={handleEndChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;







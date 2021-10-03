import React from 'react'
import moment from 'moment'
import userAvatar from "../../assets/img/Ellipse.png"
import link from "../../assets/svg/link.svg"
import clock from "../../assets/svg/clock.svg"
import well from "../../assets/svg/well.svg"
import edit from "../../assets/svg/edit.svg"
import circle from "../../assets/svg/circle.svg"
import cancel from "../../assets/svg/cancel.svg"


const ViewModal = ({eventSelect, setOpenEvent}) => {
    console.log("event selected", eventSelect?.clickedEvent)

    const momentDate = (data) => { 
      const ans = moment(data).format('Do MMMM YYYY');
      console.log(ans)
      return ans;
    }
    return (
        <>
            <div className="min-w-screen h-screen animated fadeIn faster animate-fade fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0 "></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white animate-fade ">
                    {/* <!--content--> */}
                    <div className="text-center p-2 flex-auto justify-center">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-semibold text-xl text-black"><h1>{eventSelect?.clickedEvent?.title}</h1></span>
                            <span className="bg-gray-300 text-black pl-2 pr-2 cursor-pointer rounded-md hover:text-white hover:bg-black hover:cursor-pointer hover:shadow-lg "  onClick={() => setOpenEvent(false)}>x</span>
                        </div>
                        <div className="flex flex-col ">
                            <div className="bg-dark-orange rounded-lg flex justify-between items-center p-3 mb-2">
                                <span className="p-3 flex items-center">
                                    <div className="">
                                        <img className="object-contain h-12 w-full " src={userAvatar} alt={'user avatar'} />
                                    </div>
                                    <div className="">
                                        <p className="text-md font-semibold ml-2">Acme Clinic, Inc.</p>
                                    </div>
                                </span>
                                <span className="">
                                <img className="svg object-contain h-6 w-full mr-4" src={link} alt={'user avatar'} />
                                </span>
                            </div>
                            <div className="-mb-2">
                            <span className="p-3 flex items-center">
                                    <div className="">
                                        <img className="object-contain h-7 w-full " src={clock} alt={'clock'} />
                                    </div>
                                    <div className="">
                                        <p className="text-md font-semibold  ml-2 text-gray-500">{`${momentDate(eventSelect?.clickedEvent?.start)} - ${momentDate(eventSelect?.clickedEvent?.end)}`}</p>
                                    </div>
                                </span>
                            </div>
                            <div className="">
                            <span className="p-3 flex items-center">
                                    <div className="mr-2 mb-1">
                                        <img className="object-contain h-7 w-full " src={well} alt={'well'} />
                                    </div>
                                    <div className="">
                                        <img className="object-contain h-7 w-full " src={userAvatar} alt={'user avatar'} />
                                    </div>
                                    <div className="">
                                        <p className="text-md  ml-2 font-semibold text-gray-500"> {eventSelect?.clickedEvent?.attendingPatient}</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        {/* <!--footer--> */}
                        <div className=" mt-2 text-center flex-row  flex-nowrap  md:block ">

                            <div className="w-3/3 flex">
                                <div className="w-32 h-9 mr-2 mb-2 md:mb-0 bg-secondary-pink  px-5 py-2 text-sm shadow-sm font-semibold  text-darker-orange rounded-md hover:shadow-lg hover:bg-white">Check in
                                <div className="inline-block -mb-1 ">
                                        <img className="object-contain h-4 ml-2 " src={circle} alt={'circle'} />
                                    </div>
                                </div>
                                <div className="w-32 h-9 mb-2 md:mb-0 bg-gray-100 px-5 py-2 text-sm font-semibold text-center  rounded-md hover:shadow-lg hover:bg-gray-400">
                                    Cancel
                                    <div className="inline-block -mb-1 ">
                                        <img className="svg object-contain h-4 ml-2 text-black stroke-current-black text-black fill-current-black text-black" src={cancel} alt={'cancle'} />
                                    </div>
                                </div>
                                <div className="w-1/12 hover:border hover:border-gray-400 ml-40 rounded-md hover:shadow-lg hover:bg-white">
                                <div className="inline-block -mb-1 ">
                                        <img className="svg object-contain h-4 ml-2 " src={edit} alt={'edit'} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewModal;
















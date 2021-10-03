import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Form = ({
    register,
    handleSubmit,
    submitData,
    setValue,
    startDate,
    endDate,
    handleStartChange,
    handleEndChange
 }) => {

    // const CustomInput = ({ value }) => (
    //     <input {...register('start')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    // );

    return (
        <form className="w-full max-w-lg" onSubmit={handleSubmit(submitData)}>
            {/* Type */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="grid-state">
                        Type
                    </label>
                    <div className="relative">

                        <select {...register('title')} id="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="Office Visit">Office Visit</option>
                            <option value="Online">Online</option>
                            <option value="Drive By">Drive By</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Type end */}
            {/* Time start */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="grid-zip">
                        From
                    </label>
                    {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" /> */}
                    <DatePicker
                        selected={startDate}
                        onChange={(startDate)=> {
                            handleStartChange(startDate)
                            setValue('start', startDate);
                        }}
                        placeholderText="Start Date"
                        style={{ backgroundColor: "black" }}
                        wrapperClassName="appearance-none block !w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
                        to
                    </label>
                    <div className="relative">
                        <select {...register('startTime')} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>9:00 am</option>
                            <option>9:30 am</option>
                            <option>10:00 am</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Time end */}
            {/* Time end start */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="grid-zip">
                        To
                    </label>
                    {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" /> */}
                    <DatePicker
                        selected={endDate}
                        onChange={(endDate)=> {
                            handleEndChange(endDate)
                            setValue('end', endDate);
                        }}
                        placeholderText="End Date"
                        wrapperClassName="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
                        to
                    </label>
                    <div className="relative">
                        <select {...register('endTime')} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>11:00 am</option>
                            <option>11:30 am</option>
                            <option>12:30 pm</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Time end end*/}
            {/* Attach Patient */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="grid-state">
                        Attact Patient
                    </label>
                    <div className="relative">
                        <select {...register('attachPatient')} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Ronald O.</option>
                            <option>Tracy Okeke</option>
                            <option>Jane Doe</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Attach Patient  */}
            {/* Attending Physical */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="grid-state">
                        Attending Physical
                    </label>
                    <div className="relative">
                        <select {...register('attendingPatient')} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Dr Afolabi</option>
                            <option>Dr James</option>
                            <option>Dr Jone</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/*  end Attending Physical */}
            {/* comment */}
            <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                        Notes
                    </label>
                    <input {...register('notes')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="New Appionment" />
                </div>
            </div>
            {/* comment end */}
            {/* <!--footer--> */}
            <div className="mt-2 text-center md:block">
                <button className="mb-2 md:mb-0 bg-primary-black px-10 py-3 w-full text-md shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-black transition-color ease-in-out delay-200" type="submit" >
                    Save
                </button>

            </div>
        </form>
    );
}

export default Form;


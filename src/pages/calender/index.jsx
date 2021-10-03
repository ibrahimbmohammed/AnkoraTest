import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useForm} from "react-hook-form";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../../components/modal"
import ViewModal from "../../components/viewModal";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        desc:'',
        start: new Date(2021, 10, 3),
        end: new Date(2021, 10, 4),
    },
    {
        title: "Vacation",
        desc:'',
        start: new Date(2021, 10, 4),
        end: new Date(2021, 10, 6),
    },
    {
        title: "Conference",
        desc:'',
        start: new Date(2021, 9, 20),
        end: new Date(2021, 9, 22),
    },
];
// dob: new Date(newPatient.dob).toISOString(),

const Calender = () => {
    //const [newEvent, setNewEvent] = useState({ title: "",desc:"", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [openEvent, setOpenEvent] = useState(false);
    const [openSlot, setOpenSlot] = useState(false);
    //const [addModal, setAddModal] = useState(false);
    const [openSlotTrue, setOpenSlotTrue] = useState({title: "", desc: "", start: "", end: ""});
    const [eventSelect, setEventSelect] = useState({clickedEvent: "", start: "", end: "", title: "", desc: ""});

    const [startDate, setStartDate] = useState(new Date());
    const handleStartChange = startDate => setStartDate(startDate);
    const [endDate, setEndDate] = useState(new Date());
    const handleEndChange = endDate => setEndDate(endDate);

    const { formState: register, handleSubmit, setValue, reset } = useForm({
        defaultValues: openSlotTrue || {},
      });
    const handleAddEvent = (newEvent) => {
        setAllEvents([...allEvents, newEvent]);
    }
    
    //closes modals
    // const handleClose = () => {
    //     setOpenEvent(false)
    //     setOpenSlot(false)
    //     setAddModal(false)
    // }

    //  Allows user to click on calendar slot and handles if appointment exists
     const handleSlotSelected = (slotInfo) => {
        setOpenSlotTrue({title: "", desc: "", start: slotInfo.start, end: slotInfo.end})
        reset({title: "", desc: "", start: slotInfo.start, end: slotInfo.end});
        console.log("Real slotInfo", slotInfo);   
        setOpenSlot(true)
      }

     const handleEventSelected = (event) => {
        console.log("event", event);
        setEventSelect({clickedEvent: event, start: event.start, end: event.end, title: event.title, desc: event.desc})
        setOpenEvent(true)
      }

    //   componentDidMount() {
    //     const dob = new Date();
    //     this.onDateChange(dob);
    // }
    //   onDateChange(dob) {
    //     const { newPatient } = this.state;
    //     newPatient.dob = dob;
    //     this.setState({ newPatient });
    // }

    //  const setTitle = (e) => {
    //     this.setState({ title: e });
    //   }

    //   setDescription(e) {
    //     this.setState({ desc: e });
    //   }

    //   handleStartTime = (event, date) => {
    //     this.setState({ start: date });
    //   };

    //   handleEndTime = (event, date) => {
    //     this.setState({ end: date });
    //   };

      // Onclick callback function that pushes new appointment into events array.
    //   const setNewAppointment = () => {
    //     const { start, end, title, desc } = this.state;
    //     let appointment = { title, start, end, desc };
    //     let events = this.state.events.slice();
    //     events.push(appointment);
    //     this.setState({ events });
    //     setAllEvents(events)
    //   }
      const submitData = (values) => {
        console.log("whats uuuuuppppp", values)
        handleAddEvent(values)   
        setOpenSlot(false)
      }

      //  Updates Existing Appointments Title and/or Description
    //   const updateEvent = () => {
    //     const index = allEvents.findIndex(event => event === eventSelect.clickedEvent);
    //     const updatedEvent = allEvents.slice();
    //     updatedEvent[index].title = title;
    //     updatedEvent[index].desc = desc;
    //     updatedEvent[index].start = start;
    //     updatedEvent[index].end = end;
    //     this.setState({
    //       events: updatedEvent
    //     });
    //     setAllEvents([...allEvents, updatedEvent]);
    //   }

    //   //  filters out specific event that is to be deleted and set that variable to state
    //   deleteEvent() {
    //     let updatedEvents = this.state.events.filter(
    //       event => event["start"] !== this.state.start
    //     );
    //     // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvents));
    //     this.setState({ events: updatedEvents });
    //   }

    // let components = {
    //     event: MyEvent, // used by each view (Month, Day, Week)
    //     toolbar: MyToolbar,
    //     agenda: {
    //          event: MyAgendaEvent // with the agenda view use a different component to render events
    //     }
    //   }
    return (
        <div>
            <Calendar
                //components={components}
                localizer={localizer}
                defaultView='week'
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                showMultiDayTimes={true}
                style={{ height: '90vh', margin: " 0px 16px 2px 0px" }}
                selectable={true}
                onSelectEvent={(event) => handleEventSelected(event)}
                onSelectSlot={(slotInfo) => handleSlotSelected(slotInfo)}
                longPressThreshold={50}
            />
            {openSlot && <Modal 
            register={register}
            handleSubmit={handleSubmit}
            submitData={submitData}
            setValue={setValue}
            startDate={startDate}
            endDate={endDate}
            handleStartChange={handleStartChange}
            handleEndChange={handleEndChange}
            setOpenSlot={setOpenSlot}
            />}
            {openEvent && <ViewModal
            eventSelect={eventSelect}
            setOpenEvent={setOpenEvent}
            />}
        </div>
    )
}

export default Calender;


import { Component } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './index.css'

const timeList = [
    { id: '6am', displayText: '6:00am' },
    { id: '630am', displayText: '6:30am' },
    { id: '7am', displayText: '7:00am' },
    { id: '730am', displayText: '7:30am' },
    { id: '8am', displayText: '8:00am' },
    { id: '830am', displayText: '8:30am' }
]

const getWeekday = (day) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[day];
};



class ContactUs extends Component {
    state = { date: new Date(), time: '', appoinment: [], userName: '', userCompany: '', userEmaill: '' }



    onSubmitAppointmentForm =  async event => {
        event.preventDefault()
        const {userCompany, userEmaill, userName, time, date} = this.state
        console.log(this.props)
        const newAppintment = {
            companyName: userCompany,
            email: userEmaill,
            name: userName, 
            time,
            date
        }

        //add user Id to newAppointment Object

        const url = 'http://localhost:3080/book_appointment'

        const options =  {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAppintment)
        }

        const response = await fetch(loginUrl, loginOptions)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            alert('Appointment Booked Successfully')
        }
        else {
            alert ( "Unable to book your appointment now, Please try after some time!!" )
        }

    }


    getAppointmentList = async () => {
        
        const { date } = this.state
        let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


        const url = 'http://localhost:3080/?date=2024-5-18'
        const appointFetcingUrl = `http://localhost:3080/?date=${formattedDate}`

        const resposne = await fetch(appointFetcingUrl)
        const data = await resposne.json()

        if (resposne.ok) {
            this.setState({ appoinment: data.appointmentsList })
        }
    }

    onChangeDate = (date) => {
        this.setState({ date }, this.getAppointmentList)

    }

    isSlotAvailaible = (slot) => {
        const { date, appoinment } = this.state
        let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return appoinment.some(each => each.date === formattedDate && each.time === slot.displayText)
    }

    bookAppointment = () => {
        console.log(this.state.time)
        
    }

    onClickTimeSlot = (slot) => {
        if (!this.isSlotAvailaible(slot)) {
            this.setState({ time: slot }, this.bookAppointment)
        }
    }

    userNameChange = e => {
        this.setState({userName: e.target.value})
    }

    userCompanyChange = e => {
        this.setState({userCompany: e.target.value})
    }

    userEmaillChange = e => {
        this.setState({userEmaill: e.target.value})
    }


    render() {
        let weekday = getWeekday(this.state.date.getDay())
        const dateDisplay = this.state.date.getDate()
        const { appoinment, userCompany, userEmaill, userName } = this.state
        return (
            <div>
                <div className='appoint-cont'>
                    <div>
                        <h1>Hi, I am Gabbug!</h1>
                        <p>A Defect in your software,
                            You are just one call away from getting rid of me…</p>
                        <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722139843/df49efe3-6770-4b09-9e12-51ddc725c4bb_1_ymbc6k.svg" alt="bug" />
                    </div>
                    <div>
                        <div className='date-view'>
                            <img src="" alt="logo" />
                            <hr />
                            <p>Thought Frameworks Team</p>
                            <h1>30 Minute Meeting</h1>
                            <div>
                                <p>30 min</p>
                                <p>Web conferencing details provided upon confirmation.</p>
                                <p>Great Thought, We look forward to your collaboration with Thought Frameworks.</p>
                                <p>QA & QC | Design | Development | DevOps | Digital</p>
                            </div>
                            <hr />
                            <h1>Select a Day</h1>
                            <Calendar
                                onChange={this.onChangeDate}
                                value={this.state.date}
                            />
                        </div>
                        <div className='time-view'>
                            <h1>{weekday}</h1>
                            <p>{dateDisplay}</p>
                            <div>
                                <h1>Select a Time</h1>
                                <p>Duration 30 minutes</p>
                                <ul>
                                    {timeList.map(time => (<p 
                                        className='time-slots'
                                        style={{
                                            textDecoration: this.isSlotAvailaible(time) ? 'line-through' : 'none',
                                            color: this.isSlotAvailaible(time) ? 'blue' : 'red',
                                            cursor: this.isSlotAvailaible(time) ? 'not-allowed' : 'pointer'
                                        }}
                                        onClick={() => this.onClickTimeSlot(time)}
                                        key={time.id}>
                                        {time.displayText}
                                    </p>))}
                                </ul>
                            </div>
                        </div>
                        <div className='book-appoint-view'>
                            <img src="" alt="logo" />
                            <hr />
                            <h1>30 Minutes Meeting</h1>
                            <p>30 min</p>
                            <p>Web conferencing details provided upon confirmation.</p>
                            <p>7:30pm - 8:00pm, Wednesday, July 31, 2024</p>
                            <p>India Standard Time</p>
                            <form onSubmit= {this.onSubmitAppointmentForm}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input onChange={this.userNameChange}  value = {userName} type="text" id='name' />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={this.userEmaillChange} value = {userEmaill}  type="text" id='email' />
                                </div>
                                <div>
                                    <label htmlFor="company">Company</label>
                                    <input onChange={this.userCompanyChange} value = {userCompany}  type="text" id='company' />
                                </div>
                                <button type='submit'>Schedule Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs
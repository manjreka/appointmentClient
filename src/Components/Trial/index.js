// import React, { Component } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// class Booking extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDate: null,
//             time: '',
//             error: '',
//             appointments: []
//         };
//     }

//     handleDateChange = (date) => {
//         const selectedDate = this.formatDate(date); // Convert date to string in YYYY-MM-DD format
//         this.setState({ selectedDate, time: '', error: '', appointments: [] });

//         // Fetch appointments for the selected date
//         fetch(http://localhost:5000/api/appointments/${selectedDate})
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ appointments: data });
//             })
//             .catch(error => {
//                 console.error('Error fetching appointments for the selected date', error);
//             });
//     }

//     formatDate = (date) => {
//         const year = date.getFullYear();
//         const month = (0${date.getMonth() + 1}).slice(-2); // Months are zero indexed
//         const day = (0${date.getDate()}).slice(-2);
//         return ${year}-${month}-${day};
//     }

//     handleTimeClick = (slot) => {
//         if (!this.isSlotBooked(slot)) {
//             this.setState({ time: slot });
//         }
//     }

//     // handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     const { selectedDate, time } = this.state;

//     //     // Send date as a string
//     //     fetch('http://localhost:5000/api/appointments', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({ date: selectedDate, time }),
//     //     })
//     //         .then(response => {
//     //             if (response.status === 400) {
//     //                 this.setState({ error: 'This time slot is already booked' });
//     //             } else {
//     //                 return response.text();
//     //             }
//     //         })
//     //         .then(data => {
//     //             if (data) {
//     //                 alert('Appointment booked!');
//     //                 this.setState(prevState => ({
//     //                     appointments: [...prevState.appointments, { date: selectedDate, time }],
//     //                     time: '',
//     //                     error: '',
//     //                 }));
//     //             }
//     //         })
//     //         .catch(error => {
//     //             console.error('Error booking appointment', error);
//     //         });
//     // }

//     // isSlotBooked = (slot) => {
//     //     const { selectedDate, appointments } = this.state;
//     //     return appointments.some(app => app.date === selectedDate && app.time === slot);
//     // }

//     render() {
//         const { selectedDate, time, error } = this.state;
//         const timeSlots = ['6:00am to 7:00am', '7:00am to 8:00am', '8:00am to 9:00am'];

//         return (
//             <div>
//                 <h2>Book an Appointment</h2>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <label>
//                     Select Date:
//                     <Calendar onChange={this.handleDateChange} value={selectedDate ? new Date(selectedDate) : null} />
//                 </label>
//                 <br />
//                 {timeSlots.map(slot => (
//                     <p
//                         key={slot}
//                         style={{
//                             textDecoration: this.isSlotBooked(slot) ? 'line-through' : 'none',
//                             color: this.isSlotBooked(slot) ? 'red' : 'black',
//                             cursor: this.isSlotBooked(slot) ? 'not-allowed' : 'pointer'
//                         }}
//                         onClick={() => this.handleTimeClick(slot)}
//                     >
//                         {slot}
//                     </p>
//                 ))}
//                 <button onClick={this.handleSubmit} disabled={!selectedDate || !time || this.isSlotBooked(time)}>Book Appointment</button>
//             </div>
//         );
//     }
// }

// export default Booking;

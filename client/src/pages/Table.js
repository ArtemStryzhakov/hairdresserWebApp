import React from "react";
class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          bookings: [],
          styles: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:9000/table")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                bookings: result.bookingsAr,
                styles: result.styles
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, styles, bookings } = this.state;
        return(
            <div>
                <div id={"content-table"}>
                    <div id={"div-table"}>
                        <table id={"table"}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Hair name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.name}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.time}</td>
                                        <td>{booking.stylename}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default Table
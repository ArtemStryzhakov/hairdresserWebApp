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
                    <div id={"addHair"}>
                        <form action="/" method="post">
                            <label htmlFor="name">Enter name: <br/></label>
                            <input required id="name" type="text" name="nameField" placeholder="Your name."/><br/>
                            <label htmlFor="date">Enter date: </label><br/>
                            <input required id="date" type="date" name="dateField"/><br/>
    
                            <label htmlFor="time">Enter time: </label><br/>
                            <input required type="time" id="time" min="10:00" max="20:00" name="timeField"/><br/>
                            <label htmlFor="hairStyle">Choose a hairstyle: </label><br/>
                            <select required name="hairStyle" id="hairstyle">
                              {styles.map( style =>(
                                <option value={style.id}>{style.stylename}</option>
                              ))}
                            </select><br/>
                            <input type="submit" value="OK"/>
                        </form>
    
                        <form action="/addh" method="post">
                            <label htmlFor="stylename">Style: <br/></label>
                            <input required id="stylename" type="text" name="stylename" placeholder="Hair style name"/><br/>
                            <label htmlFor="picURL">Picture: <br/></label>
                            <input required id="picURL" type="text" name="picURL" placeholder="Picture Url"/><br/>
                            <input type="submit" value="Meh"/>
                        </form>
                    </div>
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
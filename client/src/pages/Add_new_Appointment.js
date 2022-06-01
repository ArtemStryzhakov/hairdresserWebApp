import React from "react";
class Add_new_A extends React.Component{
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
                        <form id="formAdd" action="/" method="post">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Add_new_A
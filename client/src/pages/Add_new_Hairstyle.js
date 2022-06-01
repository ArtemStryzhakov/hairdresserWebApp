import React from "react";
class Add_new_H extends React.Component{
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
                        <form id="formAdd" action="/addh" method="post">
                            <label htmlFor="stylename">Style: <br/></label>
                            <input required id="stylename" type="text" name="stylename" placeholder="Hair style name"/><br/>
                            <label htmlFor="picURL">Picture: <br/></label>
                            <input required id="picURL" type="text" name="picURL" placeholder="Picture Url"/><br/>
                            <input type="submit" value="Meh"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add_new_H
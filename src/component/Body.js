import reactDom from "react-dom";

function Body() {
    
    const firstName = "Maninder";
    const lastName = "Maan";
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;

    if (hours > 12) {
        timeofDay = "Morning";
    } else if (hours >=12 && hours <= 18) {
        timeofDay = "Evening"
    } else {
        timeofDay = "Night";
    }
    // Writing inline styles in Const Var
    const H2Styles = {
        color: "#454323",
        fontSize: "30px"
    }

    return (
        <div className="body">
            <h1>This is Body Element</h1>
            <h2 style={H2Styles}>Hello {`${firstName}  ${lastName}`}</h2>
            <h2>it's about {date.getHours() % 12} o'Clock </h2>
            <h2 style={{ color: "#454545", backgroundColor: "#456777"}}> It's about to {timeofDay}</h2>
        </div>
    )
}

export default Body;
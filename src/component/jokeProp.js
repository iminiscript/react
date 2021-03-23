

function JokeProps(props) {
    return (
        <div className="container">
            <div className="joke" style={{ display: props.ques ? "block" : "none" }}>Joke: { props.ques }</div>
            <div className="punch">Punch: {props.punch } </div>
        </div>
    )
}

export default JokeProps;
import JokeProp from './jokeProp';

import data from './jokeData';
import JokeProps from './jokeProp';


function JokeFun() {
    const number = [1,2,3,4,5,6,7];
    
    const douuble = number.map(function (num) {
        return num * 2;
    })
    console.log(douuble);

    const mino = data.map(jo => <JokeProps key={jo.id} ques={jo.ques} punch={jo.punch} /> )

    const second = data.map(function (i) {
        return (
            <JokeProps key={i.id} ques={i.ques} punch={i.punch} />
        )
    })
        

    return (
        <div className="JokeProp">
            { mino }
            { second }
        </div>
    )
}

export default JokeFun;
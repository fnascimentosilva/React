import { useEffect, useState } from "react";

function Timer(){

    const [segundos, setSegundos] = useState(0);

    //setInterval, setTimeout
useEffect(() => {
    const intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);
//limpeza de estado
    return () => clearInterval(intervalId);
}, []);//array dependencia vazio

    return(
       <div>Timer: {segundos} segundos.</div>
    )
}

export default Timer;
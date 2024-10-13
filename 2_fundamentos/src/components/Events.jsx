function Events(){
    function handleClick(){
        console.log("clicou");
        
    }
    return(
        <button onClick={handleClick}>Aperte</button>
    )
}

export default Events;
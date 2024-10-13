function Lists({numbers}){
    return(
        <ul>{numbers.map((number)=> (
            <li>{number}</li>
        ))}</ul>
    )
}

export default Lists;
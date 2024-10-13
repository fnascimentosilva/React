function Lists({numbers}){

    //metodos de array map, filter, reduce
    return(
        <ul>{numbers.map((number)=> (
            <li>{number}</li>
        ))}</ul>
    )
}

export default Lists;
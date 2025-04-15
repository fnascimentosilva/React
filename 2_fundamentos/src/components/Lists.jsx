function Lists({numbers}){

    //metodos de array map, filter, reduce
    return(
        <ul>{numbers.map((number, index)=> (
            <li key = {index}>{number}</li>
        ))}</ul>
    )
}

export default Lists;
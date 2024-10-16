import { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

function Context() {
    const [name, setName] = useState("Fabrício Nascimento");

    return (
        <AppContext.Provider value={{ name, setName }}>
            <div>{name}</div>
            <ChildrenOne changeName = {setName}/>
        </AppContext.Provider>
    )
}

function ChildrenOne(){
    return <ChildrenTwo/>
}

function ChildrenTwo(){
    const {setName} = useContext(AppContext)

    return(

        <button onClick={() => setName('Ravi Gael')}>Mudar nome</button>
    )
}

export default Context;
import { useEffect } from "react";

function Info({ userInfo }) {

    useEffect(() => {
        document.title = `${userInfo.name} - ${userInfo.jobTitle}`
    }, [userInfo])

    return (
        <div>
            <h2>Nome: {userInfo.name}</h2>
            <p>Profissão: {userInfo.jobTitle}</p>
        </div>
    )

}


function Revisao() {

    const userInfo = { name: "Daniel", jobTitle: "FullStack Developer" }

    return (
        <div>
            <h1>Revisão</h1>
            <Info userInfo={userInfo} />
        </div>
    )
}

export default Revisao;
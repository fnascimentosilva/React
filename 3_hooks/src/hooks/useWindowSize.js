import { useEffect, useState } from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width: window.width,
        height: window.height,
    });

    useEffect(() => {
        //Funcao que altera os valores
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        //Evento que dispara a funcao
        window.addEventListener("resize", handleResize);

        handleResize();

        //Limpeza de memória
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return windowSize;
}
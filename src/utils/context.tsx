import React, { createContext } from "react";


export const welcomingContext = createContext<{ welcoming: boolean, setWelcoming: (w: boolean) => void}>({
    welcoming: true,
    setWelcoming: () => {}
}) 

export const exitContext = createContext<{exit: boolean, setExit: (e: boolean) => void}>({
    exit: false,
    setExit: () => {}
})
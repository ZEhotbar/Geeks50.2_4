import React, { useMemo } from 'react'

export const Calculation = () => {
    const calc = useMemo(() => {
        const array = [1,2,3,4,5,6,7,8,9,10]
        let result = 0
        console.log("calc");
        array.forEach((element) => {result = result+element})
        
        return result
    }
    [data])
}



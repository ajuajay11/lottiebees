import { useState } from "react"
import CountOne from "../CountOne"
import Button from "../Button"
import { useCallback } from "react"


function index() {
 
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)

 
    const incrementOne = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])
    const incrementTwo = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])
    return (
        <>
            
            <Button countBtn={incrementOne} />
            <CountOne count={count2} />
            <Button countBtn={incrementTwo} />
        </>
    )
}

export default index;
// It will stop the unnecessary rendering , and it will return the memorized callback function
// eg like it will be used mainly for performance optimization.
// so use call back and use memo is mainly used for perfomance optimization, and they return memoized callback function,
// manil used for perfomance optimazation They help avoid unnecessary renders in large or frequently updating components.





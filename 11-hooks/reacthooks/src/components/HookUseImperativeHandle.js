import React, { useRef } from 'react'
import SomeComponent from './SomeComponent'

const HookUseImperativeRef = () => {
    const componentRef = useRef()

    return (
        <div>
            <hr />
            <h2>useImperativeRef</h2>
            <SomeComponent ref={componentRef} />
            <button onClick={() => componentRef.current.validate()}>Validate</button>
        </div>
    )
}

export default HookUseImperativeRef
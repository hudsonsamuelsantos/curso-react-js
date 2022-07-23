import React from 'react'
import MyComponent from './MyComponent'

function TemplateExpressions() {
    const name = "Hudson Santos"
    const infos = {
        age: 23,
        job: "Desenvolvedor",
    }

    return (
        <div>
            <p>Olá {name}! Tudo bem?</p>
            <p>Você atua como: {infos.job}</p>
            {/*Você pode executar código JS aqui */}
            <p>{4 + 2}</p>
            <MyComponent />
        </div>
    )
}

export default TemplateExpressions
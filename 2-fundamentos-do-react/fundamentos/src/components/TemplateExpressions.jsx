import React from 'react'

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
            <p>{4 + 2}</p>
        </div>
    )
}

export default TemplateExpressions
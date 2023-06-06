import React from 'react';
import Month from './Month';
import Menu from './menu';
import Section from './section';

function Index() {
    return (
        <div>
            <Menu />
            <Month />
            <div className='ml-5 mt-5'>
                
                <h1 className='p-2 text-sm font-bold mb-2'>Acessoria</h1>
                <Section props="Perfil de investimento" />
                <Section props="O que é cada investimento" />
                <Section props="Investir em quê?"/>

                <h1 className='p-2 text-sm font-bold mb-2 mt-5'>Consultas</h1>
                <Section props="Cadastro na corretora"/>
                <Section props="Movimentações"/>
                <Section props="Assinaturas de termos"/>
                
            </div>
        </div>
    )
}

export default Index;
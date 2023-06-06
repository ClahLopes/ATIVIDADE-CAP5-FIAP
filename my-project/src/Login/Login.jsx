import React from 'react';
import Logo from '../assets/logo.svg';
import { Button } from './Button';

function Login() {
    return (

        <div className='bg-white w-[100vw]'>
            <img src={Logo} alt="Logo" className=' w-[375px]' />
            <div className='ml-4'>
                <h1 className='text-xl font-bold mt-20 mb-5 '>Login</h1>
                <h3 className='text-base mb-5'>Com o email e senha para entrar</h3>

                <div className='mb-5'>
                    <p className='text-xs p-1 '>Digite seu email</p>
                    <div>
                        <input type="text" placeholder='E-mail' className='bg-[#C1C1C1] w-[345px] p-3 text-xs' />
                    </div>
                </div>

                <div className='mb-14'>
                    <p className='text-xs p-1'>Digite sua senha</p>
                    <div>
                        <input type="text" placeholder='Senha' className='bg-[#C1C1C1] w-[345px] p-3 text-xs' />
                    </div>
                </div>

                <div className='flex items-center mr-10 mb-10 gap-20'>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" className='bg-[#C1C1C1] w-[20px] h-[20px]'></input>
                        <p className='text-xs'>Lembrar minha senha</p>
                    </div>
                    <div>
                        <p className='text-xs hover:underline decoration-1'>Esqueci minha senha</p>
                    </div>
                </div>

            </div>

            <Button/>
        </div>
    )
}

export default Login;
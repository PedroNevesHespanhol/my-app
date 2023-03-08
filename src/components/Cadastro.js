
import React, { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);

    const [nomeTela, setNomeTela] = useState('');
    const [emailTela, setEmailTela] = useState('');
    const [idadeTela, setIdadeTela] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNomeTela(nome);
        setNome("");

        setEmailTela(email);
        setEmail("");

        setIdadeTela(idade);
        setIdade("");
    }

    const handleClick = () => {

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <p>Nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>
            <p>Email:</p>
            <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            <p>Idade:</p>
            <input type="number" placeholder="Complete com sua idade" onChange={(e) => setIdade(e.target.value)}/>
            <br/>
            <button type="submit" onClick={handleClick}>Registro</button>
        </form>
        <div>
            <p>Bem vindo {nomeTela}</p>
            <p>Email: {emailTela}</p>
            <p>Idade: {idadeTela}</p>

        </div>
    </>
  );
}

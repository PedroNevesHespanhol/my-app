
import React, { useState, useEffect } from 'react';

export default function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz,",
        "Estudar front-end",
        "Enviar a tarefa"
    ]);
    const [nome, setNome] = useState('');
    
    useEffect(() => {

        const nomeNovo = prompt("Qual é o seu nome?");
        setNome(nomeNovo);
        localStorage.setItem("nome", nomeNovo);
        
    }, []);
    
    //Pega o que esta no localStorage
    const tarefasStorage = localStorage.getItem('@tarefa');

    //Verifica se ja possui itens no localStorage e se possui passa esses valores
    useEffect(() => {
        
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, []);

    useEffect(() => {
        //@tarefa e a key de id do localStorage, stringify converte o array para JSON, pois localStorage so aceita JSON
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleRegistro(e) {
        e.preventDefault();

        //spread operator(...), faz uma copia do array e add o proximo item a frente
        setTarefas([...tarefas, input]);
        setInput('');//zera o input novamente
    }

  return (
    <>
        <h1>{ nome }, sua lista de tarefas</h1>
        <form onSubmit={handleRegistro}>
            {/* <span>Sua lista de tarefas!</span><br/> */}
            <input type="text" placeholder="Digite uma tarefa" value={ input } onChange={(e) => setInput(e.target.value)}/><br/>
            <button type="submit">Registro</button>
        </form><br/>
        <ul>
            {tarefas.map( tarefa => (
                //sempre que utilizar um array necessita ter uma key
                <li key={tarefa}>{tarefa}</li>
            ))}
        </ul>
    </>
  );
}

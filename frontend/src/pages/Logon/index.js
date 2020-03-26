import React, {useState} from 'react';
import './style.css';
import {FiLogIn} from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/Api';

import imgHeros from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory(); 

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', {id});
           localStorage.setItem('ongId', id);
           localStorage.setItem('ongName', response.data.nome);
           history.push('/profile'); 
        }catch(err){
            alert('Falha no Login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit = {handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                    placeholder = "Sua ID"
                    value={id}
                    onChange = {e => setId(e.target.value)}
                    />
                    <button className = "buttom" type="submit">Entrar</button>

                    <Link className="back-link" to="./register">
                        <FiLogIn sie={16} color="#E02141"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={imgHeros} alt="heros"/>
        </div>
    );
}
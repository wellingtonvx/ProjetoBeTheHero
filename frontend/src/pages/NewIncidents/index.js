import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import { FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/Api';


export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncidents(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data , {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        }catch(err){
            alert('erro ao cadasstar um novo incidente')
        }
    }

    return(
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft sie={16} color="#E02141"/>
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncidents}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                     />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />

                    <button className="buttom" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

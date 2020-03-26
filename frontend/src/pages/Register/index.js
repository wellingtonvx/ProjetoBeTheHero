import React, {useState} from 'react';
import { FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/Api'
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegistrer(e){
        e.preventDefault(); 

        const data = {
            nome,
            email,
            whatsapp,
            city, 
            uf
        };

     try{
        const response = await api.post('ongs',data);
        alert(`Seu Id de acesso é: ${response.data.id}`);

        history.push('/');
     }catch(err){
        alert('Erro ao cadastrar, tente novamente');
     }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>

                    <p>Faça se cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft sie={16} color="#E02141"/>
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegistrer}>

                    <input 
                        placeholder="Nome da ONG"
                        value={nome}
                        onChange = {e => setNome(e.target.value)}
                    />

                    <input 
                        type="E-mail" 
                        placeholder="E-mail"
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange = {e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">

                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange = {e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{width:80}}
                            value={uf}
                            onChange = {e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="buttom" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}


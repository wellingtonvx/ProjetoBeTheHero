import React,{useEffect, useState} from 'react'; /*useEffect dispara uma função*/
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import api from '../../services/Api';
 
export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongname = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile',{
            headers: { 
                Authorization : ongId,
            }
        }).then(response => {
            setIncidents(response.data); 
        })
    },[ongId]);

    async function handleDeleteIncidents(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter( incident => incident.id !== id));
        }catch(err){
            alert("Erro ao deletar");
        }
    }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }

    return(
       <div className="profile-container">
           <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo(a), {ongname} </span>
                <Link className="buttom" to="/incidents/new">Cadastrar novo caso </Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>   
           </header>

           <h1>Casos cadastrados</h1>
           
           <ul>
              {incidents.map( incident => (
                   <li key= {incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong> 
                        <p>{incident.description}</p>  

                        <strong>VALOR:</strong>
                       
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>

                   <button onClick={() => handleDeleteIncidents(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                   </button>
               </li>
              ))}
           </ul>

       </div>
    )
}
import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList , Text, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents(){

    const  navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState([0]);

    function navigateToDetal(incident){
        navigation.navigate('Detail', { incident });
    } 
 

    async function loadIncidents(){
        const response = await api.get('incidents');

        setIncidents(response.data);
        setTotal(response.headers['x-total-count']);
    }

    useEffect(() => {
        loadIncidents();

    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source = {logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos </Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem-Vindo! </Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia! </Text>


            <FlatList 
                style={styles.incidentList}
                data={incidents}
                keyExtractor = {incident => String(incident.id )}
                showsVerticalScrollIndicator= {false}
                renderItem = {({item: incident}) => (
                <View style= {styles.incident}>
                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>{incident.nome}</Text>

                    <Text style={styles.incidentProperty}>CASO: </Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style:'currency',
                             currency:'BRL'
                            }).format(incident.value)}</Text>

                    <TouchableOpacity 
                    style={styles.detailsButtom} 
                    onPress={() => navigateToDetal(incidents)}
                    >
                        <Text style = {styles.detailsButtomText}> Ver Mais detalhes</Text>
                        <Feather name='arrow-right' size={20} color='#e02041'/>
                    </TouchableOpacity>
                </View>
                )}
            />
            
        </View>
    );
}       
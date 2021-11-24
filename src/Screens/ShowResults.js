import React, { useState, useEffect } from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import yelp from '../API/Yepl';
import { FlatList } from 'react-native-gesture-handler';

const ShowResults=({route})=>{
    const id = route.params.id;
    const link=`/${id}`;
    const [result,setresult]=useState([]);
    const getresult=async (id)=>{
        yelp.get(link).then(response=>{
            setresult(response.data);
        })

    };
    useEffect(()=>{
        getresult(id);
    },[]);
    if(!result){
        return null;
    }
    return(
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return (
                        <View>
                            <Text>{result.name}</Text>
                            <Image style={{height:120,width:250,borderRadius:5}} source={{uri:item}}/>
                        </View>
                    )
                }}
            />
        </View>
    );

};

export default ShowResults;
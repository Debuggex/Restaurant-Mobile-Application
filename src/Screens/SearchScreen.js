import React,{useState, useEffect} from 'react'
import {View, TextInput, ScrollView, StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import yepl from '../API/Yepl.js';
import { color } from 'react-native-reanimated';
import SearchResults from '../Components/SearchResults';



const SearchScreen=({navigation})=>
{
    const [term,settext]=useState('');
    const [results,setresults]=useState([]);
    const [message,setmessage]=useState('');

    const SearchApi =async ()=>{
        try{
            yepl.get('/search',{
                params:{
                    limit : 50,
                    term,
                    location : 'san jose',

                }
            }).then(response=>setresults(response.data.businesses));
        }catch(err){
           setmessage("Something Went Wrong");
        }
        
        
        
    };
    useEffect(()=>{
        SearchApi('pasta');
    },[]);

    const FilterbyPrice=(price)=>{
        return results.filter(result=>{
           return result.price===price;
        });
    };

    return(
        
        <>  
            <View style={styles.background}>
                <Icon name="search" size={20} color="#1100FF" style={styles.Iconic}/>
                <TextInput placeholder="Search" style={{flex:1,marginRight:35,fontSize:15,alignSelf:'center',color:"#7D7D7E"}}
                    value={term}
                    onChangeText={(newtext)=>{
                        settext(newtext)
                        
                    }}
                    onEndEditing={()=>SearchApi()}
                />
            </View>
            <ScrollView>
                
                <SearchResults title="Cost Effective"
                    results={FilterbyPrice('$')}
                    navigation={navigation}
                /> 
                <SearchResults title="Bit Pricer"
                    results={FilterbyPrice('$$')}
                    navigation={navigation}
                /> 
                <SearchResults title="Big Spender"
                    results={FilterbyPrice('$$$$')}
                    navigation={navigation}
                />
            </ScrollView>         
        </>
    );
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        height:50,
        margin:30,
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 4,
	        height: 4,
        },
        shadowOpacity: 2.2,
        shadowRadius: 16.0,

        elevation: 1,
        alignItems:"center",
        
        
    },
    Iconic:{
        marginHorizontal:20,
        marginVertical:11.75,
        alignSelf:'center'
    }


})
export default SearchScreen;
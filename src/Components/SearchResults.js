import React from 'react';
import {Text,StyleSheet,View,FlatList,Image,TouchableOpacity} from 'react-native';


const SearchResults=({title,results, navigation})=>{
    if(!results.length){
        return null;
    }
    return (
        <View style={{marginBottom:10}}>
            <Text style={{fontSize:18, fontStyle:'italic',marginHorizontal:30}}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return (
                    
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Result',{id:item.id})}>
                            <Image style={{width:250, borderRadius:5,height:120,marginLeft:30}} source={{uri:item.image_url}}/>
                            <Text style={{fontSize:14,color:"#7D7D7E",marginLeft:30}}>{item.name}</Text>
                            <Text style={{fontSize:12,color:"#7D7D7E",marginLeft:30}}>{item.rating} Stars, {item.review_count} Reviews</Text>
                        </TouchableOpacity>
                    </View>    
                );
            }}
            />
        </View>
    );
};

export default SearchResults;
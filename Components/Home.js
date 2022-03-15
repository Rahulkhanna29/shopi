import React,{useState} from 'react';
import { StyleSheet,Text, View} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA=[
    {
title:'electronics'
},
    {
title:'furnitures'
},
    {
title:'mens-clothings'
},
    {
title:'womens-clothings'
},
    {
title:'accessories'
}
];
const Home = () => {
    const [key,setKey]=useState(0)

const selected=(index)=>{
    setKey(index)
}

    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:'white',height:hp(9),justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:28,color:'#3f46ad'}}>Home</Text>
            </View>
            <View style={{marginTop:hp(2),}}>
<FlatList 
showsHorizontalScrollIndicator={false}
horizontal={true}
data={DATA}
renderItem={({item,index})=>{
    return(
        <View style={{borderColor:'#3f46ad',borderRadius:15,marginHorizontal:wp(1),borderWidth:2,padding:wp(2),backgroundColor:key===index?'#3f46ad':'white'}}>
           <TouchableOpacity onPress={()=>selected(index)}>
            <Text style={{color:key===index?'white':'#3f46ad',fontSize:16,}}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}}
/>
            </View>
        </View>
    );
}
export default Home;
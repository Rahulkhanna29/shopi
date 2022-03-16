import React, { useState ,useCallback} from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailScreen=()=>{
const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    
    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    },[]);

    return(
        <ScrollView>
<View style={{flex:1,backgroundColor:'#fffff'}}>
  
   <View style={{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 }}>
                <Text style={{ textAlign: 'center', fontSize: 28, color: '#3f46ad' ,fontWeight:'bold'}}>Wishlist</Text>
            </View>
            <View style={{ borderColor: 'white',  borderRadius: 10, borderWidth: 2 ,margin:wp(4),alignSelf:'center'}}>
                                <Image resizeMode='contain' style={{ width: wp(40), height: hp(30), borderRadius: 10 }} source={require('../assets/iphone.jpg')}></Image>
                                <View style={{ backgroundColor: '#3f46ad', borderRadius: 10, borderColor: '#3f46ad', borderWidth: 2 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',textAlign:'center' }}>Iphone</Text>
                                </View>
                                <View style={{ backgroundColor: 'black',marginTop:wp(1) ,borderRadius: 10, borderColor: 'black', borderWidth: 2 }}>
                                <Text style={{textAlign:'center',marginLeft:wp(4),fontSize: 15,  width: wp(40), color: 'white' }}>Prices: 1,25,400</Text>
                            </View>
                            </View>
 <View style={{ borderColor: '#E2E5DE',  borderRadius: 10, borderWidth: 2,backgroundColor:' #B2BEB5' }}>
     <Text style={{fontSize:20,fontWeight:'bold',color:'#3f46ad',marginBottom:hp(1)}}>Description</Text>
    <Text
                  onTextLayout={onTextLayout}
                  numberOfLines={textShown ? undefined : 2}
                  style={{ lineHeight: 21 ,color:'black',fontSize:15}}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</Text>
    
                  {
                      lengthMore ? <Text
                      onPress={toggleNumberOfLines}
                      style={{ lineHeight:13 , marginTop: 2 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                      :null
                  } 
 
 </View>
 <View style={{alignSelf:'center',justifyContent:'flex-end',marginTop:wp(6)}}>
     <TouchableOpacity style={{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,}}>
         <Text style={{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)}}>Add To Cart</Text>
     </TouchableOpacity>
 </View>
</View>
</ScrollView>
    );
}
export default DetailScreen;
import React, { useState ,useCallback,useEffect} from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './StyleSheet';

const DetailScreen=({navigation,route})=>{

  
  
    useEffect(()=>{
      AsyncStorage.getItem('SavedData').then((value)=>{
        if(value != null)
        {
          setArray(JSON.parse(value))
        }
      })
    },[])
  
    const [array, setArray] = useState([])
  const gotoNext=()=>{
   
 let arr = array;
  arr.push({name:route?.params.item?.name ||'', price:route?.params.item?.price || '',  avatar:route?.params.item?.avatar || ''})
  AsyncStorage.setItem('SavedData', JSON.stringify(arr))
//   const counts = {};
//   const sampleArray = array;
// sampleArray.forEach(function (send) { counts[send] = (counts[send] || 0) + 1; });
// console.log(counts);

   navigation.navigate('Cart')
  
  
  }
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
        <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1,}}>
<View style={{flex:1,}}>
  
   <View style={styles.DetailView}>
                <Text style={styles.DetailText}>Details</Text>
            </View>
            <View style={styles.View1}>
                                <Image resizeMode='contain' style={styles.image} source={{ uri:route.params.item.avatar}}></Image>
                                <View style={styles.textView}>
                                    <Text style={styles.text}>{route.params.item.name}</Text>
                                </View>
                                <View style={styles.textView2}>
                                <Text style={styles.prices}>Prices:{route.params.item.price}</Text>
                            </View>
                            </View>
 <View style={styles.descriptionView}>
     <Text style={styles.descriptionText}>Description</Text>
    <Text
                  onTextLayout={onTextLayout}
                  numberOfLines={textShown ? undefined : 2}
                  style={{ lineHeight: 21 ,color:'black',fontSize:15}}>{route.params.item.description}</Text>
    
                  {
                      lengthMore ? <Text
                      onPress={toggleNumberOfLines}
                      style={{ lineHeight:13 , marginTop: 2 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                      :null
                  } 
 
 </View>
<View style={{margin:hp(5)}}></View>
 
</View>
<View style={styles.TouchView}>
     <TouchableOpacity style={styles.touch1}>
         <Text style={styles.touchText1}>Wishlist</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> gotoNext()} style={styles.touch2}>
         <Text style={styles.touchText2}>Add To Cart</Text>
     </TouchableOpacity>
 </View>
</ScrollView>
    );
}
export default DetailScreen;
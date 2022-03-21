import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles=StyleSheet.create({
    // Home Screen
container:{ flex: 1 },
mainView:{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center', borderBottomColor: '#3f46ad', borderBottomWidth: 2 },
HomeText:{ textAlign: 'center', fontSize: 28, color: '#3f46ad', fontWeight: 'bold' },
flatlist1outview:{ marginTop: hp(2), },
flatlist1inview:{ borderColor: '#3f46ad', borderRadius: 15, marginHorizontal: wp(1), borderWidth: 2, padding: wp(2), },
flatlist2outview:{ marginTop: hp(2), flex: 1, alignSelf: 'center' },
flatlist2inview:{ borderColor: 'white', borderRadius: 10, borderWidth: 2, margin: wp(4) },
imageview:{ width: wp(40), height: hp(30), borderRadius: 10 },
nameview:{ backgroundColor: '#3f46ad', borderRadius: 10, borderColor: '#3f46ad', borderWidth: 2 },
nameText:{ fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center' },
priceView:{ backgroundColor: 'black', marginTop: wp(1), borderRadius: 10, borderColor: 'black', borderWidth: 2 },
PricesText:{ textAlign: 'center', marginLeft: wp(1), fontSize: 11, width: wp(30), color: 'white' },
// Details Screen
DetailView:{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 },
DetailText:{ textAlign: 'center', fontSize: 28, color: '#3f46ad' ,fontWeight:'bold'},
View1:{ borderColor: 'white',  borderRadius: 10, borderWidth: 2 ,margin:wp(4),alignSelf:'center'},
image:{ width: wp(40), height: hp(30), borderRadius: 10 },
textView:{ backgroundColor: '#3f46ad', borderRadius: 10, borderColor: '#3f46ad', borderWidth: 2 },
text:{ fontSize: 20, fontWeight: 'bold', color: 'white',textAlign:'center' },
textView2:{ backgroundColor: 'black',marginTop:wp(1) ,borderRadius: 10, borderColor: 'black', borderWidth: 2 },
prices:{textAlign:'center',marginLeft:wp(4),fontSize: 15,  width: wp(40), color: 'white' },
descriptionView:{ borderColor: '#E2E5DE',  borderRadius: 10, borderWidth: 2,backgroundColor:' #B2BEB5' },
descriptionText:{fontSize:20,fontWeight:'bold',color:'#3f46ad',marginBottom:hp(1)},
TouchView:{alignSelf:'center',bottom:20,position:'absolute',zIndex:1,flexDirection:'row',},
touch1:{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,marginRight:wp(10)},
touchText1:{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)},
touch2:{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,},
touchText2:{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)},
// Shopping Cart
cartView:{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 },
cartText:{ textAlign: 'center', fontSize: 28, color: '#3f46ad' ,fontWeight:'bold'},
Viewmain:{flexDirection:'row',margin:wp(2),flex:1},
Image:{width:wp(30),height:hp(20)},
nameTExt:{fontSize:20,fontWeight:'bold',color:'#3f46ad',marginLeft:wp(3),marginTop:hp(1),width:wp(100)},
priceText:{fontSize:20,fontWeight:'bold',color:'black',marginLeft:wp(3),marginTop:hp(1),width:wp(100)},
TouchView1:{flexDirection:'row',margin:wp(2)},
Touch1:{backgroundColor:'#3f46ad',borderRadius:20,marginRight:wp(3)},
plusText:{color:'white',margin:wp(2)},
num:{fontSize:20,color:'black',marginRight:wp(3)},
Touch2:{backgroundColor:'#3f46ad',borderRadius:20,},
minusText:{color:'white',margin:wp(2),},
ButttonView:{alignSelf:'center',bottom:20,position:'absolute',zIndex:1,},
Buttontouch:{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,},
buttonText:{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)}

});
export default styles;
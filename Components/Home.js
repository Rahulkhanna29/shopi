import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA = [
    {
        title: 'electronics'
    },
    {
        title: 'furnitures'
    },
    {
        title: 'mens-clothings'
    },
    {
        title: 'womens-clothings'
    },
    {
        title: 'accessories'
    }
];

const DATA1 = [
    {
        createdAt: "2022-03-08T15:30:01.252Z",
        name: "New",
        avatar: "https://dazedimg-dazedgroup.netdna-ssl.com/1080/azure/dazed-prod/1290/5/1295031.jpg",
        description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",

        price: 97,
        category: "womens-clothings",
        id: "1"
    },
    {
        createdAt: "2022-03-09T01:09:01.787Z",
        name: "iPhone 13 Pro Max",
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSXKvQOAlBX2pWEYKv4xqkBl1C2Dtm9bJvQ&usqp=CAU',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        price: 53,
        category: "electronics",
        id: "2"
    },
    {
        createdAt: "2022-03-09T01:24:49.758Z",
        name: "Macbook Pro M1 512 gb",
        avatar: "https://m.xcite.com/media/catalog/product/cache/1/thumbnail/550x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_template_2_-_2020-11-23t132253.196.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        price: 24,
        category: "electronics",
        id: "3"
    },
    {
        createdAt: "2022-03-08T12:26:00.464Z",
        name: "Sofa new",
        avatar: "https://designidentity.com.au/wp-content/uploads/2018/08/pv_P82_jan17-107.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rating": {
            "rate": 4.9,
            "count": 30
        },
        price: 98,
        category: "furnitures",
        id: "4"
    },
    {
        createdAt: "2022-03-08T14:15:20.956Z",
        name: "Denim jean",
        avatar: "https://5.imimg.com/data5/FE/TO/NH/SELLER-7374997/phillip-plein-men-denim-jeans-500x500.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch.",
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        price: 85,
        category: "mens-clothings",
        id: "5"
    },
    {
        createdAt: "2022-03-09T06:39:57.631Z",
        name: "Tripod",
        avatar: "https://cdn.gitzo.com/pub/media/catalog/product/cache/50294efa952a939bca81e4365dc1e09d/t/r/traveler-alpha-gitzo-traveler-tripod-gk1545ta-camera.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .",
        "rating": {
            "rate": 4.2,
            "count": 44
        },
        price: 76,
        category: "accessories",
        id: "6"
    },
    {
        createdAt: "2022-03-13T21:29:11.837Z",
        name: "Apple TV",
        avatar: "https://productimages.hepsiburada.net/s/33/1500/10403090595890.jpg",
        id: "7",
        price: "500",
        description: "This tv is really amazing ",
        category: "electronics"
    },
    {
        createdAt: "2022-03-13T16:16:57.701Z",
        name: "est",
        avatar: "https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lim.size_625x365.v1632764534.jpg",
        id: "8",
        price: "20",
        description: "test",
        category: "electronics"
    },
    {
        createdAt: "2022-03-14T07:45:19.745Z",
        name: "Symbol Men's Regular Shirt",
        avatar: "https://m.media-amazon.com/images/I/71Ga6S4898L._UY500_.jpg",
        id: "12",
        description: "Classic Twill Fabric in Semi cut away collar\nPerfect wardrobe essential in 100% Cotton for power dressing.\nSolid",
        category: "mens-clothings",
        price: "10"
    },
{
        createdAt: "2022-03-14T02:38:07.997Z",
        name: "Samsung S21 Ultra",
        avatar: "https://cdn.dxomark.com/wp-content/uploads/medias/post-73910/samsung_galaxy_s21_ultra-1024x768.jpg",
        id: "18",
        category: "electronics",
        price: 500,
        description: "This is an Android Phone made by Samsung"
    },
    {
        createdAt: "2022-03-14T01:47:14.139Z",
        name: "Apple MacBook Air Laptop",
        avatar: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
        id: "19",
        description: "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.\nPowerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.\nSuperfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.\nStunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.\nWhy Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.\nSimply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store.\nEasy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.",
        category: "electronics",
        price: "700"
    },


    {
        createdAt: "2022-03-14T12:08:19.666Z",
        name: "2021 Apple MacBook Pro",
        avatar: "https://m.media-amazon.com/images/G/31/img21/Laptops/Apple-NPI/OCT21/r1464_r1465_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_01._CB637671236_.jpg",
        id: "21",
        description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance\nUp to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever\nUp to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games\n16-core Neural Engine for up to 11x faster machine learning performance\nLonger battery life, up to 17 hours\nUp to 64GB of unified memory so everything you do is fast and fluid\nUp to 8TB of super-fast SSD storage launches apps and opens files in an instant",
        category: "electronics",
        price: "1000"
    },
    {
        createdAt: "2022-03-13T14:15:53.211Z",
        name: "Nike Shoes",
        avatar: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-g-golf-shoe-gTpCFg.png",
        id: "22",
        price: 100,
        category: "mens-clothings",
        description: "One pair of shoes form Nike Store"
    },

    {
        createdAt: "2022-03-08T15:30:01.252Z",
        name: "Kurti",
        avatar: "https://i.pinimg.com/736x/61/37/f7/6137f74b0ba4aef7a1b989e1439e6d8a.jpg",
        description: "A beautiful kurti",
        "rating": {
            "rate": 4.1,
            "count": 120
        },
        price: 97,
        category: "womens-clothings",
        id: "32"
    }
]



const Home = ({navigation}) => {
    const [key, setKey] = useState(0)

    const selected = (index) => {
        setKey(index)
    }
const goToWishList =()=>{
    navigation.navigate('Detail')
}
    return (
        <View style={{ flex: 1 }}>
           <View style={{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 }}>
                <Text style={{ textAlign: 'center', fontSize: 28, color: '#3f46ad',fontWeight:'bold' }}>Home</Text>
            </View>
            <View style={{ marginTop: hp(2), }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ borderColor: '#3f46ad', borderRadius: 15, marginHorizontal: wp(1), borderWidth: 2, padding: wp(2), backgroundColor: key === index ? '#3f46ad' : 'white' }}>
                                <TouchableOpacity onPress={() => selected(index)}>
                                    <Text style={{ color: key === index ? 'white' : '#3f46ad', fontSize: 16, }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{ marginTop: hp(2), flex:1,alignSelf:'center'}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={DATA1}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ borderColor: 'white',  borderRadius: 10, borderWidth: 2 ,margin:wp(4)}}>
                               <TouchableOpacity onPress={()=>goToWishList()}>
                                <Image resizeMode='contain' style={{ width: wp(40), height: hp(30), borderRadius: 10 }} source={{ uri: item.avatar }}></Image>
                                <View style={{ backgroundColor: '#3f46ad', borderRadius: 10, borderColor: '#3f46ad', borderWidth: 2 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white',textAlign:'center' }}>{item.name}</Text>
                                </View>
                                <View style={{ backgroundColor: 'black',marginTop:wp(1) ,borderRadius: 10, borderColor: 'black', borderWidth: 2 }}>
                                <Text style={{textAlign:'center',marginLeft:wp(4),fontSize: 11,  width: wp(30), color: 'white' }}>Prices: {item.price}</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                        )
                    }} />
            </View>

        </View>
    );
}
export default Home;
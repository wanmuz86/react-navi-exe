import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput , FlatList, SafeAreaView,TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    // const [name,setName] = useState('')
    const [reviews,setReviews] = useState([
        {'name':'John', 'rating':4,'review':'It is a good course', 'id':1},
        {'name':'Shelly', 'rating':3,'review':'I need more hours', 'id':2},
        {'name':'Peter', 'rating':5,'review':'Love it!', 'id':3},
        {'name':'James', 'rating':5,'review':'Love it!!!!', 'id':4},
        {'name':'Joe', 'rating':1,'review':'Worst', 'id':5}
    ])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>This is my home page</Text>
    <TextInput placeholder="What is your name?" onChangeText={(text)=>{ setName(text)}} value={name} 
    autoCorrect={false}></TextInput>
      <Button onPress={()=>{navigation.push('ReviewDetail',{'name':name})}} title="Open Review Page"/> */}
      <FlatList
      data={reviews}
    renderItem={({item})=> 
    <TouchableOpacity onPress={()=>{navigation.push('ReviewDetail',{'item':item})}}>
    <View style={styles.item}><Text>{item.name}</Text>
    <Text>{item.rating}</Text></View></TouchableOpacity>
    }
    keyExtractor={item=>item.id}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:   { backgroundColor:   '#f9c2ff', padding:   20, marginVertical:   8    },
});

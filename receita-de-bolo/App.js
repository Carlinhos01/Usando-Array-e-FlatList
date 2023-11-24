import { Text, SafeAreaView, StyleSheet, View, ScrollView, Dimensions, FlatList } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList 
        data={arrayDados}
        renderItem={({item})=>
        <SafeAreaView style={styles.containerBolo}>
        <Text style={styles.paragraph}> {item.bolo} </Text>
        </SafeAreaView>
        }
      />
      
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;



const styles = StyleSheet.create({
  container:{
    paddingTop:70,
  },
  containerBolo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#32CD32',
    marginTop: 30,
    borderRadius:50,
    padding: 1
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const arrayDados = [
  {bolo: '4 ovos'},
  {bolo: '2 xicaras de leite'},
  {bolo: 'Fermento'},
  {bolo: 'Barra de chocolate'},
  {bolo: 'Granulado'},
];

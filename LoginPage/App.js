import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./src/assets/images/SENAI.png')}/>

      <Text style={styles.text}>Login</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Senha'/>
        <TouchableOpacity style={styles.btn}>
          <Text>Entrar</Text> 
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20
  },
  text: {
    fontSize: 35,
    color: 'white'
  },
  image: {
    width: '80%',
    height: 51
  },
  input: {
    width: '70%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingLeft: 15
  },
  form: {
    flex: 0.6,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: '65%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8
  }
});

import SafeAreaView from "react-native-safe-area-view"
import { Card } from "react-native-paper"
import { Text, StyleSheet, TouchableOpacity } from "react-native"









export default function App3 () {
    return(
        <SafeAreaView>
             <Card style={styles.card}>
        <Card.Content>
        <Text style={styles.title1}>-Car Registration : </Text>
        <Text style={styles.title1}>-TimeSpent : </Text>
        <Text style={styles.title1}>-Parking Charges :</Text>
       
        </Card.Content>
        </Card>
        <SafeAreaView>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.title2}>PAYMENT TAKEN</Text>
          </TouchableOpacity>
           
         
           
        </SafeAreaView>
       
     
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#dcdcdc',
      alignItems: "center",
      justifyContent: "flex-start",
      
    },
    title1: {
      fontWeight: "500",
      fontSize: 18,
      padding:15,
      color: '#000000'
    },
    card: {
    backgroundColor:'#dcdcdc',
    borderColor:"#696969",
    borderWidth:3,
    borderRadius:10,
    marginTop:30,
    marginLeft: 10,
    paddingTop:10,
    width:340,
    height:220
    },
    button: {
    margin:12,
    borderRadius:12,
    alignItems: "center",
    backgroundColor: "#696969",
    padding: 10

    },
    title2: {
    fontWeight: "500",
    fontSize: 16,
    color: '#dcdcdc'

    }
      
});
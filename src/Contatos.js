import { FlatList, StyleSheet, Text, View, } from "react-native";
import ListaDeContatos from "./ListaDeContatos";



const dados = [
    {
        id: "01",
        nome: "Bruna",
        data: "01/12/2024"
    },
    {
        id: "02",
        nome: "Edivan",
        data: "01/12/2024"
    },
    {
        id: "03",
        nome: "Marisa",
        data: "01/12/2024"
    },
    {
        id: "04",
        nome: "Ivonete",
        data: "01/12/2024"
    },
    {
        id: "05",
        nome: "Angelica",
        data: "01/12/2024"
    },
    {
        id: "06",
        nome: "Fabrícia",
        data: "01/12/2024"
    },
]

export default function Itens()
{
    return(
       <View style={css.container}>
       <FlatList 
       data={dados}
       renderItem={ ({item} ) => <ListaDeContatos titulo={item.nome} preco={item.idade} categoria={item.telefone} data={item.data} /> }
       keyExtractor={ item => item.id}
       contentContainerStyle={css.categoria}
       horizontal={false}
       numColumns={2}
       />
       </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
})
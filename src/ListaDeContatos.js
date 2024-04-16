import { View, Text, StyleSheet } from "react-native";

export default function ListaDeContatos({nome, idade, telefone, data }) {
    return(
    <View style={css.caixa}>
        <Text style={css.nome}>{nome}</Text>
        <Text style={css.idade}>{idade}</Text>
        <Text style={css.telefone}>{telefone}</Text>
        <Text style={css.data}>{data}</Text>
    </View>
    )
}

const css = StyleSheet.create({
    caixa: {
        width: "50%",
        height: 80,
        backgroundColor: "lightgray",
        marginTop: "10%",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    telefone: {

    },
    data: {

    },
    idade: {
        
    },
    nome: {
        fontSize: 18,
        marginBottom: 10
    }

})
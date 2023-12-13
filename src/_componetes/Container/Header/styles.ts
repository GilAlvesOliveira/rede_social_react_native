import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../../app.json';

const {width, height} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.whiteColor,
        borderBottomColor: colors.grayColor01,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        paddingVertical: 20,
    },
    containerInputPesquisa: {
        flexDirection: 'row',
        width: width /1.8,
        height: 40,
        backgroundColor: colors.lightBlueColor,
        alignItems:'center',
        borderRadius: 4
    },
    imagem: {
        marginLeft: 9
    },
    input: {
        width: width / 2.1,
        paddingHorizontal: 12,
        fontFamily: 'Biennale.Regular',
        color: colors.grayColor04
    },
    inputAtivo: {
        width: width /2.1,
        paddingHorizontal: 12,
        fontFamily: 'Biennael.regular',
        color: colors.primaryColor
    }

});

export default styles;
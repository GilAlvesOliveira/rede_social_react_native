import { View, Image, ImageSourcePropType, TextInput } from "react-native";
import { IInput } from "./types";
import styles from "./styles";

const Input = (props: IInput) => {
    return (
        <View style={styles.containerInput}>
            <View style={styles.row}>
                {props.icone &&
                    <Image source={props.icone}/>
                }
                <TextInput
                    placeholder={props.placeholder}
                    style={[styles.input, props.style]}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onChangeText={props.onChange}
                    autoCapitalize="none"
                />
            </View>
        </View>
    )
}

export default Input
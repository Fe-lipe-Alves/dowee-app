import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    titleArea: {
        fontWeight: '600',
        fontSize: 18,
        icon: {
            fontSize: 15,
            paddingHorizontal: 8,
            lineHeight: 26,
        }
    },

    cover: {
        width: "50%",
        aspectRatio: 1,
        padding: 10,

        box: {
            width: '100%',
            height: '100%',
            backgroundColor: '#eee',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
    }
})
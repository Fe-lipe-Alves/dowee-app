import { Dimensions, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default StyleSheet.create({
    button: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    hr: {
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: '#999',
        height: 1,
        marginVertical: 10,
    },

    container: {
        flex: 1,
        paddingHorizontal: 8
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    titleArea: {
        fontWeight: '600',
        fontSize: 18,
        color: '#222',
    },
    titleAreaIcon: {
        fontSize: 15,
        paddingHorizontal: 8,
        color: '#222',
    },
    titleAreaIconBox: {
        justifyContent:'center',
    },

    cover: {
        width: Dimensions.get('window').width / 100 * 40,
        aspectRatio: 1,
        padding: 10,
    },
    coverBox: {
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
        borderRadius: 5,
        overflow: 'hidden'
    },
    coverImage: {
        flex: 1,
        resizeMode: 'cover', 
        borderRadius: 5,
        justifyContent: "center"
    },

    miniCollection: {
        width: '100%',
        paddingVertical: 3
    },
    miniCover: {
        width: 70,
        padding: 5,
        aspectRatio: 1,
    },
    miniCollectionLegend: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
        flex: 1,
        justifyContent: 'center'
    },
    miniCollectionTitle: {
        fontWeight: '700',
        fontSize: 14,
        paddingBottom: 4
    },
    miniCollectionSubtitle: {
        fontWeight: '300',
        fontSize: 13
    },
})
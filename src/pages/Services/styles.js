import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBar:{
        height: 60,
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex:4
    },
    tabBarIcon:{
        color:'#60f13b',
    }
})

export default styles;
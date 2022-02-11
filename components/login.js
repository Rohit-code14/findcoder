import React from "react"
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    Button
} from "react-native"


const Login = () =>{
    return(
        <View style={style.root}>
            <View style={style.subRoot}>
                <Text style={style.title}>FindCoder.io</Text>
                <Text style={style.subHeading}>Login to your account with</Text>
                <View style={style.oauthViewG}>
                    <TouchableOpacity style={style.oauthButton}>
                        <Image style={style.logo} source={require("../assets/images/google.png")} />
                        <Text style={style.oauthText}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.oauthView}>
                    <TouchableOpacity style={style.oauthButton}>
                        <Image style={style.logo} source={require("../assets/images/github.png")} />
                        <Text style={style.oauthText}>Github</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.oauthView}>
                    <TouchableOpacity style={style.oauthButton}>
                        <Image style={style.logo} source={require("../assets/images/linkedin.png")} />
                        <Text style={style.oauthText}>LinkedIn</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.explore}>
                    <TouchableOpacity>
                        <Text style={style.exploreText}>Explore Projects !</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image 
            style = {style.img}
            source={require("../assets/images/login.png")}
            />
        </View>
    )
}

export default Login;

const style = StyleSheet.create({
    root:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    subRoot:{
        marginTop:50
    },
    subHeading:{
        fontFamily: "Nunito-500",
        fontSize:16,
        color: '#333',
        textAlign: "center"
    },
    title:{
        fontFamily: "Nunito-VariableFont_wght",
        fontWeight:"bold",
        fontSize:30,
        color: '#333',
        textAlign:"center"
    },
    logo:{
        height:32,
        width:32,
        padding:0,
        marginRight:15
    },
    oauthButton:{
        width:300,
        height:50,
        flex:1,
        flexDirection: "row",
        marginBottom:12,
        paddingHorizontal:10,
        paddingVertical:10,
        flexWrap:"wrap",
        justifyContent: "flex-start",
    },
    oauthView:{
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius:10,
        height:50,
        width:300,
        marginVertical:12
    },
    oauthViewG:{
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius:10,
        height:50,
        width:300,
        marginVertical:12,
        marginTop:40
    },
    oauthText:{
        fontFamily: "Nunito-700",
        // fontWeight:"bold",
        color: '#333333',
        marginTop:0,
        fontSize:20
    },
    img:{
        width: 400,
        height:300,
        position: "absolute",
        bottom: 0,
        left:0
    },
    explore:{
        borderColor: '#333333',
        backgroundColor:linear-gradient(140,"#0d6ddf","#001ec1" ,80),
        borderWidth: 2,
        borderRadius:10,
        height:50,
        width:300,
        marginVertical:12
    },
    exploreText:{
        fontFamily:"Nunito-700"
    }
})
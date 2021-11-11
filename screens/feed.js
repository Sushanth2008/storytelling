import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,StatusBar,FlatList,Platform} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import *as Font from 'expo-font';
import StoryCard from "./storyCard";

let CustomFonts = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}

let stories = require("./tempStory.json");

export default class Feed extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(CustomFonts);
        this.setState({ fontsLoaded: true });
    }

    renderItem = ({ item: story }) => {
        return <StoryCard story={story} />;
      };

    keyExtractor = (item, index) => index.toString();

    componentDidMount() {
        this._loadFontsAsync()
    }

    render() {

        if (!this.state.fontsLoaded) {
            return <AppLoading />
        }

        else {

            return (
                <View style={styles.container}>

                    <View style={styles.container}>
                        <SafeAreaView style={styles.droidSafeArea} />
                        <View style={styles.appTitle}>
                            <View style={styles.appIcon}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={styles.iconImage}
                                />
                            </View>
                            <View style={styles.appTitleTextContainer}>
                                <Text style={styles.appTitleText}>Storytelling App</Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={stories}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#2f345d'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
        flex: 0.93
    }
})
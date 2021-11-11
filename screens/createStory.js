import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, TextInput,Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import *as Font from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker'
import { ScrollView } from 'react-native-gesture-handler';

let CustomFonts = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}

export default class CreateStory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
            previewImage: 'Image_1',
            dropDownHeight: 40,
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(CustomFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync()
    }

    render() {

        if (!this.state.fontsLoaded) {
            return <AppLoading />
        }

        else {
            let preview_Images = {
                "Image_1": require("../assets/story_image_1.png"),
                "Image_2": require("../assets/story_image_2.png"),
                "Image_3": require("../assets/story_image_3.png"),
                "Image_4": require("../assets/story_image_4.png"),
                "Image_5": require("../assets/story_image_5.png"),
            }

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
                                <Text style={styles.appTitleText}>New Story</Text>
                            </View>
                        </View>
                        <View style={styles.fieldsContainer}>
                            <ScrollView>
                                <Image
                                    source={preview_Images[this.state.previewImage]}
                                    style={styles.previewImage} />

                                <View style={{ height: RFValue(this.state.dropDownHeight) }}>
                                    <DropDownPicker
                                        items={[
                                            { label: "Image 1", value: "image_1" },
                                            { label: "Image 2", value: "image_2" },
                                            { label: "Image 3", value: "image_3" },
                                            { label: "Image 4", value: "image_4" },
                                            { label: "Image 5", value: "image_5" }
                                        ]}
                                        defaultValue={this.state.previewImage}
                                        containerStyle={{
                                            height: 40,
                                            borderRadius: 20,
                                            marginBottom: 10
                                        }}
                                        onOpen={() => {
                                            this.setState({ dropdownHeight: 170 });
                                        }}
                                        onClose={() => {
                                            this.setState({ dropdownHeight: 40 });
                                        }}
                                        style={{ backgroundColor: "transparent" }}
                                        itemStyle={{
                                            justifyContent: "flex-start"
                                        }}
                                        dropDownStyle={{ backgroundColor: "#2f345d" }}
                                        labelStyle={{
                                            color: "white",
                                            fontFamily: "Bubblegum-Sans"
                                        }}
                                        arrowStyle={{
                                            color: "white",
                                            fontFamily: "Bubblegum-Sans"
                                        }}
                                        onChangeItem={item =>
                                            this.setState({
                                                previewImage: item.value
                                            })
                                        }
                                    />
                                </View>

                                <TextInput
                                    style={[styles.inputFont,{height: RFValue(30),}]}
                                    onChangeText={title => this.setState({ title })}
                                    placeholder={"Title"}
                                    placeholderTextColor="white"
                                />

                                <TextInput
                                    style={[
                                        [styles.inputFont,{height: RFValue(70),}],
                                        styles.inputFontExtra,
                                        styles.inputTextBig
                                    ]}
                                    onChangeText={description => this.setState({ description })}
                                    placeholder={"Description"}
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholderTextColor="white"
                                />
                                <TextInput
                                    style={[
                                        [styles.inputFont,{height: RFValue(100),}],
                                        styles.inputFontExtra,
                                        styles.inputTextBig
                                    ]}
                                    onChangeText={story => this.setState({ story })}
                                    placeholder={"Story"}
                                    multiline={true}
                                    numberOfLines={20}
                                    placeholderTextColor="white"
                                />

                                <TextInput
                                    style={[
                                        [styles.inputFont,{height: RFValue(70),}],
                                        styles.inputFontExtra,
                                        styles.inputTextBig
                                    ]}
                                    onChangeText={moral => this.setState({ moral })}
                                    placeholder={"Moral of the story"}
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholderTextColor="white"
                                />

                            </ScrollView>
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
        resizeMode: "contain"
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
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: 'center',
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    inputFont: {
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        fontFamily: "Bubblegum-Sans",
        marginTop:RFValue(30)
    },
    inputFontExtra: {
        marginTop: RFValue(15)
    },
    inputTextBig: {
        textAlignVertical: "top",
        padding: RFValue(5)
    }
})
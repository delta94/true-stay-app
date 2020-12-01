import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonView from "../../components/Button";
import { LANDLORD_LISTINGS } from "../../routes";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

if (Dimensions.get("screen").height < 800) {
  screenHeight = Dimensions.get("screen").height + 100;
}

export const PostListingScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: screenHeight }}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.heading}>Post Listing</Text>
        </SafeAreaView>
        <View style={styles.body}>
          <View style={styles.main}>
            <TextInput style={styles.input} placeholder="Title" />
            <TextInput style={styles.input} placeholder="Description" />
            <TextInput style={styles.input} placeholder="Address" />
            <View style={styles.photoView}>
              <Text style={styles.texts}>Photos</Text>
              {/* <TouchableOpacity
                style={styles.PhotoButton}
                onPress={() => console.log("upload")}
              >
                <Text style={styles.buttonText}>Choose</Text>
              </TouchableOpacity> */}
              <Button
                title="Choose"
                containerStyle={styles.PhotoButton}
              ></Button>
            </View>
          </View>
          <View style={styles.footer}>
            <ButtonView
              title={"Submit"}
              onPress={() => navigation.navigate(LANDLORD_LISTINGS)}
            />
            {/* <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate(LANDLORD_LISTINGS)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgb(187, 122, 68)",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    color: "white",
  },
  body: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth - 30,
  },
  buttonText: {
    color: "white",
  },
  texts: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: screenWidth - 30,
    borderRadius: 15,
    borderColor: "rgb(187, 122, 68)",
    borderWidth: 1.5,
    padding: 12,
    margin: 20,
    fontSize: 15,
  },

  PhotoButton: {
    // backgroundColor: "rgb(187, 122, 68)",
    width: 100,
    borderRadius: 30,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  photoView: {
    fontSize: 20,
    width: screenWidth - 30,
  },
});
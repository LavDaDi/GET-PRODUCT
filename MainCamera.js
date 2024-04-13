import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import axios from 'axios'; 
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import styled from "styled-components";

export default function MainCamera() {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [image, setPhoto] = useState();
  
    useEffect(() => {
      (async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
      })();
    }, []);
  
    if (hasCameraPermission === undefined) {
      return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
      return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }
  
    let takePic = async () => {
      let options = {
        quality: 1,
        base64: true,
        exif: false
      };
  
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
    };
  
    if (image) {
      const sharePic = async () => { 
        try { 
          const useState = { 
           data: 
              {
                name:'test',
                password: 'teest',
                image: image.base64,
              } 
            }; 
          const response = await axios.post('http://77.91.87.98:5000/upload ', useState); 
          
          console.log(response.data); 
          setPhoto(undefined);
   
        } catch (error) { 
          console.error('Error signing up user: ', error); 
          setPhoto(undefined);
        } 

      }; 
  
      return (
        <SafeAreaView style={styles.container}>
          <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + image.base64 }} />
          <Button title="Share" onPress={sharePic} />
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </SafeAreaView>
      );
    }
  
    return (
      <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <ButtonContainer onPress={takePic}>
            <ButtonText><Image   
            source={require('./img/Circle.png')}
            style={{width: 60, height: 60}}/>
            </ButtonText>
         </ButtonContainer>
        </View>
        <StatusBar style="auto" />
      </Camera>
    );
  }
  const ButtonContainer = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #FD6F09;
  width: 100px;
  height: 100px;

`;

const ButtonText = styled.Text`
  height: 170px;
  text-align:center;
  margin: -5px  0 0 0
`;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttonContainer: {
      marginBottom:  55,     
    },
    preview: {
      alignSelf: 'stretch',
      flex: 1
    }
  });
  
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import Play from '../../assets/Play.svg';

const formatTime = (millis) => {
  const totalSeconds = Math.floor(millis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const AudioPlayer = ({ courseId, audioId, file }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState({});
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [isSeeking, setIsSeeking] = useState(false);

  const playAudio = async () => {
    try {
      const audioUrl = `https://psycho-ai.dev.developercup.tech/courses/${courseId}/audio/${audioId}`;
      const token = await AsyncStorage.getItem("x-token-access");

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl, headers: { 'Authorization': `Bearer ${token}` } },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
    } catch (error) {
      console.error('Ошибка при воспроизведении:', error);
    }
  };

  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    setStatus(status);
    if (!isSeeking && status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
    if (status.didJustFinish) {
      setIsPlaying(false);
    }
  };

  const seekTo = async (value) => {
    if (sound && status.isLoaded) {
      const seekMillis = value * duration;
      await sound.setPositionAsync(seekMillis);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View className="flex flex-col">
      <View className="flex flex-row items-center">
        {isPlaying ? 
          <TouchableOpacity onPress={pauseAudio} className="p-[14px] rounded-full border flex items-center justify-center">
            <Text>СТОП</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={playAudio} className="p-[14px] rounded-full border flex items-center justify-center">
            <Play width={12} height={12} />
          </TouchableOpacity>
        }

        <View className="ml-[20px] flex flex-col">
          <Text className="font-Comfortaa">{file.name}</Text>
          <Text className="font-Comfortaa">{file.duration} МИН</Text>
        </View>
      </View>

      <View className="mt-2">
        <Slider
          value={position / duration}
          onValueChange={() => setIsSeeking(true)}
          onSlidingComplete={(value) => {
            seekTo(value);
            setIsSeeking(false);
          }}
          minimumTrackTintColor="#1EB1FC"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#1EB1FC"
        />
        <View className="flex flex-row justify-between px-1 mt-1">
          <Text>{formatTime(position)}</Text>
          <Text>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default AudioPlayer;

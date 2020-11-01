import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,AsyncStorage } from 'react-native';
export const _storeData = async (data) => {    
    try {
        console.log(data);
        data.map( async(data)=>{

          await AsyncStorage.setItem(
            data.key,
            data.value
          );
        })
      
    } catch (error) {
      // Error saving data
    }
  };

export const _retrieveData = async (data) => {
    try {
      const value = await AsyncStorage.getItem(data);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
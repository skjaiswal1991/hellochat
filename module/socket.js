import React, { Component } from 'react';
import io  from  'socket.io-client'

const socket  = io('http://192.168.0.109:3020/');

export { socket }

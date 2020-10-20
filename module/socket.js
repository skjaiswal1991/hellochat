import React, { Component } from 'react';
import io  from  'socket.io-client'

const socket  = io('http://192.168.42.121:3020/');

export { socket }

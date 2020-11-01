import React, { Component } from 'react';
import io  from  'socket.io-client'

const socket  = io('http://192.168.137.30:3020/');

export { socket }

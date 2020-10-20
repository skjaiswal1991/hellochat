const express = require('express');
const app = express('');
const localStorage = require('localStorage');
const { emit } = require('nodemon');
const PORT = 3020;
const socket = require('socket.io');
const { Socket } = require('socket.io-client');
const server = app.listen(PORT);
const io = socket(server)

const tictic = require('./model/tictic');
app.use(express.static(__dirname+'/public'));

//const io = socket();
var cuntTime = [];
var room = [];
var ListUsers = {};
var users = {}


io.on('connection',(socket)=>{
    console.log('test');
    socket.emit('Welcome',{txt:'Welcome In Connection'});

    socket.on('sendfromclient',(data)=>{
        console.log(data);
    })
    socket.on('GroupJoin',(data)=>{ 
        console.log(data.txt);
        room.push({group:data.txt,user:data.userName}); 
        socket.join(data.txt);        
        socket.emit('GroupConfirm',{group:data.txt})
        //users.push(data.txt);
        console.log(room); 
    })

 
    socket.on('getGroup',(data)=>{
            io.emit('groupUser',{users:ListUsers})
    }) 
    
    socket.on('GetUserList',(data)=>{

            console.log(ListUsers);
            console.log('GetUserList');
            io.emit('listUser',{list:ListUsers});
    })

    socket.on('user',(data)=>{
        // let userName = ListUsers.find(
        //     (element,i) => {
        //         console.log(element);
        //         console.log("sss");
        //         element === data.txt
        //     }
            
        //     );
        //     console.log(userName);
           // uList[data.txt] =  socket.id;
           /// ListUsers.push(uList);
        // console.log(userName);
        // console.log(data);
        if(data.txt in ListUsers){
            io.emit('user',{txt:'user Already Exist',status:'fail'})
        
        }else{  

            socket.username = data.txt

            ListUsers[socket.username] = socket.id;
            // ListUsers.push({[data.txt]:socket.id});
            io.emit('user',{txt:'user Is created',status:'success'})
        }
    //    console.log(ListUsers[data.txt])   
    //     if(!ListUsers[data.txt]){
            
            
    //         //io.emit('listUser',{list:ListUsers});
    //     }else{
            
    //     }
        io.emit('listUser',{list:ListUsers});
        console.log(ListUsers);
        //io.sockets.in(data.txt).emit('roomData',{txt:`Welcome in Game Room ${data.txt}`});
    })

   // socket.in('games').emit('roomData',{txt:'Welcome in Game Room'});

    socket.on('event',(data)=>{
        console.log(data);
        let groupName = data.groupName;
        io.sockets.in(groupName).emit('serverEvent',{event:data.id})
        io.sockets.in(groupName).emit('count',{count: cuntTime.push(1)})        
    })

    // setInterval(()=>{
    //    // console.log('test');
    //     socket.emit('msgFromServer',{txt:'Welcome in Next Emmit'});
    // },3000)
    
    socket.on('disconnect',()=>{
        console.log(` disconnect  the connection${socket.id}`);
    })


    // Private message 

    socket.on('PrivateMsg',(data)=>{
        console.log(data);
        socket.to(data.username).emit('')
        
    })

})


// io.on("connection", function(socket) {
//     console.log("Connection established!");
  
//     socket.on("newChatMessage", data => {
//       io.emit("newChatMessage", data);
//     });
  
//     socket.on("disconnect", function() {
//       console.log("Disconnected!");
//     });
//   });

app.get('/',(req,res)=>{
    res.send('Test data will show');
})


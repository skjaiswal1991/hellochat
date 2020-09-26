const express = require('express');
const app = express('');
const localStorage = require('localStorage');
const PORT = 3020;
const socket = require('socket.io');
const server = app.listen(PORT);
const io = socket(server)

const tictic = require('./model/tictic');

app.use(express.static(__dirname+'/public'));
//const io = socket();
var cuntTime = Array();
var room = Array();
var ListUsers = Array(); 
io.on('connection',(socket)=>{
    
    // connect with the room
   // socket.emit('msgFromServer',{txt:'Welcome in my group'});

    // socket.on('msgFromClient',(data)=>{
    //   let groupName = localStorage.getItem('groupname');
    //   console.log(groupName);
    //    io.sockets.in(groupName).emit('msgFromServer',{txt:data.txt});

    //    // socket.join(data.txt);
    // })

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
             

    socket.on('user',(data)=>{
        let userName = ListUsers.find(element => element === data.txt);
        console.log(userName);
        if(!userName){
            ListUsers.push(data.txt);
            io.emit('user',{txt:'user Is created',status:'success'})
            io.emit('listUser',{list:ListUsers});
        }else{
            io.emit('user',{txt:'user Already Exist',status:'fail'})
        }
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


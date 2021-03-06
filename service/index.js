const express = require('express');
const app = express();
const PORT = 3020;
const socket = require('socket.io');
const server = app.listen(PORT);
const io = socket(server)

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
        //if(data.txt in ListUsers){
           // io.emit('user',{txt:'user Already Exist',status:'fail'})
            
       //}else{  

            socket.username = data.txt

            ListUsers[socket.username] = socket.id;
            // ListUsers.push({[data.txt]:socket.id});
            io.emit('user',{txt:'user Is created',status:'success',userid:socket.id,username:socket.username})
        //}
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
        console.log(ListUsers)
        Object.values(ListUsers).filter(function(emp) {
            console.log(emp);
            console.log("EMP");
            if (emp == socket.id) {
                return false;
            }
            return true;
        });
        console.log(` disconnect  the connection ${socket.id}`);

    })


    // Private message 

    socket.on('PrivateMsg',(data)=>{
        
        console.log(data);
        console.log(data.sendData.reiverId.id);
        io.to(data.sendData.reiverId.id).emit('privateRecive',{data})
        
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


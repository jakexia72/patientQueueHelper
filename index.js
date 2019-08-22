//load app server
const express = require('express');
const app = express();
const port = process.env.PORT ||  7123 ;
const ejs = require('ejs')
const cors = require('cors');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

const path = __dirname;

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/views/index.html")
});

app.get('/waitingRooms/:roomId', (req, res) => {
  const roomId = req.params.roomId;
  console.log(roomId);
    res.render(path + "/views/room", {roomId});
});

app.get('/noTimeStamp/:roomId', (req, res) => {
  const roomId = req.params.roomId;
    res.render(path + "/views/patientLeft",{roomId});
});

app.get('/waitingRooms/:roomId/:patientId', (req, res) => {
  const roomId = req.params.roomId;
  const patientId = req.params.patientId;
  console.log(roomId);
    res.render(path + "/views/patientView", {roomId,patientId});
});


app.listen(port, () => {
  console.log("server is up and listening on " + port);
});

# HAProxy-POC
A Small POC on layer4 and layer7 load balancing using local HAProxy

Layer-4 Demo
------------
First We need to Spin Up our application on different port on different terminals<br>
node server1.js  on port=4444 <br>
node server2.js  on port=5555<br>
$haproxy -f tcp.cfg --->Hit this Command in wsl terminal of project,As HAProxy in installed in ubuntu environment<br>
http://localhost:8888 ----->---->will route between port 4444 and 5555 in round robin manner<br>
then play with it..down one server and check if request  routing to other server and vise versa<br>

Layer-7 Demo<br>
------------
First We need to Spin Up our application on different ports on different terminals<br>
node server1.js  on port=4444<br>
node server2.js  on port=5555<br>
on bash terminal use the following command<br>
PORT=6666 node index.js<br>
PORT=7777 node index.js<br>
PORT=7778 node index.js<br>
$haproxy -f http.cfg --->Hit this Command in wsl terminal of project,As HAProxy in installed in ubuntu environment<br>
Here we need to specify route like<br>
http://localhost:9999/app1  ---->will route between port 4444 and 5555 in round robin manner<br>
http://localhost:9999/app2  ---->will route between port 6666,7777 and 7778 in round robin manner<br>
then play with it..down one server and check if request  routing to other server and vise versa<br>


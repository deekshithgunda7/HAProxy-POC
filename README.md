# HAProxy-POC
A Small POC on layer4 and layer7 load balancing using local HAProxy

Layer-4 Demo
------------
First We need to Spin Up our application on different port on different terminals
node server1.js  on port=4444
node server2.js  on port=5555
$haproxy -f tcp.cfg
http://localhost:8888 ----->---->will route between port 4444 and 5555 in round robin manner
then play with it..down one server and check if request  routing to other server and vise versa

Layer-7 Demo
------------
First We need to Spin Up our application on different ports on different terminals
node server1.js  on port=4444
node server2.js  on port=5555
on bash terminal use the following command
PORT=6666 node index.js
PORT=7777 node index.js
PORT=7778 node index.js
$haproxy -f http.cfg
Here we need to specify route like
http://localhost:9999/app1  ---->will route between port 4444 and 5555 in round robin manner
http://localhost:9999/app2  ---->will route between port 6666,7777 and 7778 in round robin manner
then play with it..down one server and check if request  routing to other server and vise versa


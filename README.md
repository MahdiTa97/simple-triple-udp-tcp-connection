# simple-triple-udp-tcp-connection
UDP and TCP connection between three points so that the middle connection point acts as a middleWare and has UDP and TCP connection with each of the two sides.

## Run
`yarn` ( in the root ) & `cd src` 

`node a-udp-server.js` & `node b-tcp-server-udp-client.js`

to send meesage: `node c-tcp-client.js`

from socket import *
from queue import Queue

import json


class socketServer:

    def __init__(self):
        self.serverSock = socket(AF_INET, SOCK_STREAM)
        # address family '' ==  INADDR_ANY
        self.serverSock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
        self.serverSock.bind(('', 8080))
        self.connectionSock = ""

        self.receive_data = ""

    def listen(self):
        self.serverSock.listen(1)
    
    def accept(self):
        self.connectionSock, addr = self.serverSock.accept()
        print(str(addr),'에서 접속이 확인되었습니다.')

    def receive(self):
        data = self.connectionSock.recv(1024)
        print('받은 데이터 : ', data.decode('utf-8'))
        print("받은 데이터 타입 :", type(data.decode('utf-8')))
        print('받은 데이터, no decode :', data)
        print('받은 데이터, no decode :', type(data))

        self.receive_data = data.decode('utf-8')
    
    def send(self):
        self.connectionSock.send('I got message.'.encode('utf-8'))
        print('메시지를 보냈습니다.')

    def get(self):
        return self.receive_data


# def socketConnect():
#     print("hihi")
#     socServer = socketServer()
#     socServer.listen()
#     print("listen")
#     socServer.accept()

#     while True:
#         socServer.receive()
#         data = socServer.get()
#         # 여기서는 쌓아두고
#         dto.dto_Process(data)
#         dto.put()
        
#         socServer.send()

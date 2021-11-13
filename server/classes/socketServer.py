from socket import *
from queue import Queue

import json
import sys, time

sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')


from classes.redisQueue import RedisQueue
from classes.cheating_detect import Pupil, Sound

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
        self.receive_data = data.decode('utf-8')
    
    def send(self):
        self.connectionSock.send('I got message.'.encode('utf-8'))
        print('메시지를 보냈습니다.')

    def get(self):
        return self.receive_data


class connect_socket_to_dto:

    def __init__(self):
        self.p = Pupil()
        self.s = Sound()
        self.socServer = socketServer()

    def run(self):
        self.socServer.listen()
        print("status : listen")
        self.socServer.accept()

        while True:
            time.sleep(5)
            self.socServer.receive()
            socket_data = self.socServer.get()
            # 여기서는 쌓아두고
            
            loads_data = self.parse(socket_data)
            
            if(loads_data['type'] == 0):
                self.p.pupil_dto_Process(loads_data)


            self.socServer.send()


    def parse(self, socket_data):

        print("dto_process value : ",socket_data)
        loads_data = json.loads(socket_data)

        return loads_data
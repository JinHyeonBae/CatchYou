from json.decoder import JSONDecodeError
from socket import *
from queue import Queue
from threading import Thread

import json
import sys, time
import traceback

sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')


from classes.redisQueue import RedisQueue
from classes.cheating_detect import Pupil, Sound


class socketServer:

    def __init__(self, name): 
        self.clientSock = socket(AF_INET, SOCK_STREAM)
        self.clientSock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
        self.connectionSock = ""

        self.receive_data = ""
        self.name = name

    def define(self, host, port):
        self.clientSock.bind((host,port))

    def listen(self):
        self.clientSock.listen(1)
    
    def accept(self):
        self.connectionSock, addr = self.clientSock.accept()
        print(str(addr),'에서 접속이 확인되었습니다.')

    def receive(self) -> None:
        data = self.connectionSock.recv(1024)
        self.receive_data = data.decode('utf-8')

    def send(self):
        self.connectionSock.send('I got message.'.encode('utf-8'))
        print('메시지를 보냈습니다.')

    # 받을 때마다 데이터가 변경되는데 값을 받는 사이에 데이터가 변경되면 데이터 손실이 발생됨
    # 데이터 손실이 발생하는걸 방지해서 데이터를 큐에 담아서 처리하자
    def get(self):
        return self.receive_data


class connect_socket_to_dto:

    def __init__(self):
        self.pupilSocket = socketServer('pupil')
        self.soundSocket = socketServer('sound')

        self.pupil = Pupil()
        self.sound = Sound()

    def listen(self):
        
        print("status : listen")
        self.pupilSocket.listen()
        self.soundSocket.listen()


    def define(self):
        self.pupilSocket.define('localhost', 8080)
        self.soundSocket.define('localhost', 8081)


    def parse(self, socket_data):
        loads_data = json.loads(socket_data)

        return loads_data    


    def accept(self):
        self.pupilSocket.accept()
        self.soundSocket.accept()

    def receive(self):
        self.pupilSocket.receive()
        self.soundSocket.receive()

    def run(self):
        self.define()
        self.listen()

        self.accept()
        
        # 데이터를 
        while True :
            try:
                self.receive()

                pupilValue = self.parse(self.pupilSocket.get())
                soundValue = self.parse(self.soundSocket.get())

                self.pupil.pupil_dto_Process(pupilValue)
                self.sound.sound_dto_Process(soundValue)


            except JSONDecodeError as e :
                print(traceback.format_exc())    

            except KeyboardInterrupt:
                print ('KeyboardInterrupt exception is caught')
                break

            except Exception as e :
                print(traceback.format_exc())


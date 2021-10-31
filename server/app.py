from queue import Empty
from flask import Flask,jsonify
from flask_sse import sse
from apscheduler.schedulers.background import BackgroundScheduler
from flask_cors import CORS
from multiprocessing import Queue
#from helper import get_data,get_schd_time

import threading, traceback, time
import logging, datetime, random, flask, sys

from classes.socketServer import socketServer
from classes.DTO import DTO
from globalValue import rd


app = Flask(__name__)
CORS(app)

# redis의 구성
app.config["REDIS_URL"] = "redis://redis"
log = logging.getLogger('apscheduler.executors.default')
log.setLevel(logging.INFO)
fmt = logging.Formatter('%(levelname)s:%(name)s:%(message)s')
h = logging.StreamHandler()
h.setFormatter(fmt)
log.addHandler(h)


# background

class factory:

    socQueue = Queue()
    dto = DTO()

    def productor(self):
        socServer = socketServer()
        socServer.listen()
        print("Wating for clientSocket. current status : listen")
        socServer.accept()

        while True:
            socServer.receive()
            data = socServer.get()
            # 여기서는 쌓아두고
            caliData = self.dto.dto_Process(data)
            
            self.socQueue.put(caliData)
            
            socServer.send()

    def consumer(self):
        
        data = []
        while not self.socQueue.empty():
            print("consumer herhe")
            time.sleep(1)
            caliData = self.socQueue.get()
            data.append(caliData)

        return data

    
f = factory()

@app.route('/')
def stream():
    print("localhost:5000/ enter")
    print("큐의 사이즈 : ", f.socQueue.qsize())
    return "hello"


if __name__ == '__main__':
    try:
        # 생산자 스레드
        prodThread = threading.Thread(target=f.productor)
        prodThread.start()

        consumerThread = threading.Thread(target=f.consumer)
        consumerThread.start()

        app.run(debug=True,host='localhost',port=5000)
        
    except Exception as e :
        print(traceback.format_exc())


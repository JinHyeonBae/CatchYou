from queue import Empty
from flask import Flask,jsonify, make_response, g
from apscheduler.schedulers.background import BackgroundScheduler
from flask_cors import CORS
from multiprocessing import Queue
#from helper import get_data,get_schd_time

import threading, traceback, time
import logging, datetime, random, flask, sys
import flask_cors

from werkzeug.datastructures import Headers

from classes.socketServer import socketServer
from classes.DTO import DTO
from classes.producer import Producer
from classes.consumer import Consumer
from classes.redis import Pubsub


app = Flask(__name__)
CORS(app)

# redis의 구성
app.config["REDIS_URL"] = "redis://localhost"
log = logging.getLogger('apscheduler.executors.default')
log.setLevel(logging.INFO)
fmt = logging.Formatter('%(levelname)s:%(name)s:%(message)s')
h = logging.StreamHandler()
h.setFormatter(fmt)
log.addHandler(h)



@app.route('/')
def stream():
    print("stream Enter")
    pub_data = pubsub.get()
 
    response = make_response(pub_data)
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    return response



if __name__ == '__main__':
    try:
        socket = socketServer()
        producer = Producer()
        consumer = Consumer()
        pubsub = Pubsub()
        
        pubsub.subscribe('calibration')

        socketThread = threading.Thread(target=socket.socketConnect)
        socketThread.start()


        app.run(debug=True,host='localhost',port=5000)
        
    except Exception as e :
        print(traceback.format_exc())


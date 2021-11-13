from queue import Empty
from flask import Flask,jsonify, make_response, g
from apscheduler.schedulers.background import BackgroundScheduler
from flask_cors import CORS
from multiprocessing import Queue
#from helper import get_data,get_schd_time

import threading, traceback, time
import logging, datetime, random, flask, sys
import flask_cors, json

from werkzeug.datastructures import Headers

from classes.socketServer import socketServer,connect_socket_to_dto
from classes.redisQueue import Pubsub
from classes.cheating_detect import Pupil, Sound


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



@app.route('/pupil')
def pupil_stream():
    print("pupil stream")
    
    pub_data = pupil.get()
    # channel 부분의 값 byte

    response = make_response(pub_data)
    response.headers['Access-Control-Allow-Origin'] = '*'
    print(response)
    return response

@app.route('/sound')
def sound_stream():
    print("sound stream")

    # queue_data = sound.get()
    # response = make_response(queue_data)
    # response.headers['Access-Control-Allow-Origin'] = '*'
    
    # return response
    



if __name__ == '__main__':
    try:
        classify = connect_socket_to_dto()
        pupil = Pupil()
        sound = Sound()

        pupil.pubsub.subscribe('pupil')
        
        socketThread = threading.Thread(target=classify.run)
        socketThread.start()

        app.run(debug=True, host='localhost',port=5000)
        
    except Exception as e :
        print(traceback.format_exc())


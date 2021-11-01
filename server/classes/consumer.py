
from classes.redisQueue  import RedisQueue

import json
import time as pytime
import sys
sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')


class Consumer:

    def __init__(self):
        self.redisQueue = RedisQueue('socketQueue', host='localhost', port=6379, db=0)
        self.user_env = {}

    def get(self):
        return self.user_env

    def run(self):

        # 큐가 비어있을 때는 대기
        msg =  self.redisQueue.get(isBlocking=True)
        if msg is not None:
            msg_json = json.loads(msg.decode('utf-8'))
            print("msg_json :", msg_json)
            self.user_env.update(msg_json)
            pytime.sleep(3)
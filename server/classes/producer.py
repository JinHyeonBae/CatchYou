from classes.redisQueue  import RedisQueue

import json, traceback
import time as pytime


class Producer():

    def __init__(self):
        super().__init__()
        self.redisQueue = RedisQueue('socketQueue', host='localhost', port=6379, db=0)
    
    def dump(self, element):
        # 왜 dump를..?
        element_str = json.dumps(element)
        return element_str

    def put(self, element_str):
        self.redisQueue.put(element_str)

    # 큐의 사이즈를 확인하여 데이터를 얻어옴
    def update(self):
        try :
            pytime.sleep(0.1)
            print("update function")
            return self.redisQueue.get()
        except Exception :
            print(traceback.format_exc())
            print("현재 queue에 아무것도 들어있지 않습니다.")


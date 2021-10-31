import sys
sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')

from queue import Queue
from globalValue import rd

import json, traceback, time



# productor 클래스
class DTO:

    def __init__(self):
        self.user_env = {
            "width" : 0,
            "height" : 0,
            "vertical" : 0,
            "horizontal" : 0
        }
    
        self.dataQueue = Queue()


    # 데이터를 받아와서 집어넣는다
    # def put(self, data):
    #     self.pupilQueue.put()

    # 여기서 데이터를 받아와서 화면의 크기 비율을 계산한다
    def calc_screen(self):
        pass
    
    def update(self):
        try :
            time.sleep(0.1)
            print("update function")
            print(self.dataQueue.qsize())
            return self.dataQueue.get()
        except Exception :
            print(traceback.format_exc())
            print("현재 queue에 아무것도 들어있지 않습니다.")
            
    
    def put(self):
        self.dataQueue.put_nowait(self.user_env)

    def dto_Process(self, value):
        try:
            print("dto_process value :", value)
            caliData = json.loads(value)
            print("calidate Json :", caliData)
            print("calidate type :", type(caliData))
            # calc_screen 이후
            #self.set_screen(caliData['width'], caliData['height']) 
            self.set_screen(480, 720) 
            self.set_pupil_ratio(caliData['vertical'], caliData['horizontal'])

            return self.user_env
            
        except Exception as e:
            print(traceback.format_exc())

    def set_screen(self, width, height):
        user_info = self.user_env
        
        user_info['width'] = width
        user_info['height'] = height
        
    
    def set_pupil_ratio(self, ver, hor):
        user_info = self.user_env

        user_info['vertical']   = ver
        user_info['horizontal'] = hor


    def get(self):
        return self.user_env

    # def giveBack(self):
    #     return self.user_env

    # def send(self):
    #     self.Send.


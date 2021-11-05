import sys

sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')
from classes.producer import Producer


from queue import Queue
import json, traceback, time

from classes.redis import RedisQueue, Pubsub

# productor 클래스
class DTO(Producer):

    def __init__(self):
        super().__init__()
        self.pubsub = Pubsub()

        self.user_env = {
            "width" : 0,
            "height" : 0,
            "vertical" : 0,
            "horizontal" : 0
        }


    # 여기서 데이터를 받아와서 화면의 크기 비율을 계산한다
    def calc_screen(self):
        pass
    

    def dto_Process(self, value):
        try:
            caliData = json.loads(value)           
            
            # calc_screen 이후
            #self.set_screen(caliData['width'], caliData['height']) 
            self.set_screen(480, 720) 
            self.set_pupil_ratio(caliData['vertical'], caliData['horizontal'])

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


    def run(self, socket_data):
        
        self.dto_Process(socket_data)
        
        element_str = self.dump(self.user_env)
        self.put(element_str)
        self.pubsub.publish('calibration', element_str)


            
from queue import Queue
from Send import Send


class DTO:

    def __init__(self):
        self.user_env = {
            "width" : 480,
            "height" : 720,
            "vertical" : 0,
            "horizontal" : 0
        }

        self.dataQueue = Queue()
        self.send = Send()

    # 데이터를 받아와서 집어넣는다
    # def put(self, data):
    #     self.pupilQueue.put()

    # 여기서 데이터를 받아와서 화면의 크기 비율을 계산한다
    def calc_screen(self):
        pass
    
    def put(self, value):
        self.dataQueue.put(value)

    def take(self):
        #caliData의 type은 아마 json
        caliData = self.dataQueue.get() 
        print("caliData type :", type(caliData))

        # calc_screen 이후
        self.set_screen(caliData['width'], caliData['height']) 
        self.set_pupil_ratio(caliData['vertical'], caliData['horizontal'])

    def set_screen(self, width, height):
        user_info = self.user_env
        
        user_info['width'] = width
        user_info['height'] = height
        
    
    def set_pupil_ratio(self, ver, hor):
        user_info = self.user_env

        user_info['vertical']   = ver
        user_info['horizontal'] = hor

    def giveBack(self):
        return self.user_env

    # def send(self):
    #     self.Send.

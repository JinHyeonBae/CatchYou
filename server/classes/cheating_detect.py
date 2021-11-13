

import traceback, json
#from classes.DTO import DTO
from classes.redisQueue import RedisQueue,Pubsub

class Pupil():

    def __init__(self):
        super().__init__()
        self.pubsub = Pubsub('pupil')

        self.data_count = 0
        self.true_count = 0
        self.pupil_data = {
            "width" : 0,
            "height" : 0,
            "left_x" : 0,
            "left_y" : 0,
            "right_x" : 0,
            "right_y" : 0,
            "cheat" : None,
            "cheat_percentage" : 0
        }

    # 여기서 데이터를 받아와서 화면의 크기 비율을 계산한다
    def calc_screen(self):
        pass
    
    def pupil_dto_Process(self, pupil_value):
        try:

            print("pupil_value :",pupil_value)
            # calc_screen 이후
            #self.set_screen(caliData['width'], caliData['height']) 
            self.set_screen(480, 720)
            self.set_pupil_ratio(pupil_value["left_x"], pupil_value["left_y"], pupil_value["right_x"], pupil_value["right_y"])

            self.check_cheating(pupil_value["cheat"])
            self.count()
            self.set_cheating_ratio()
            self.put()

        except Exception as e:
            print(traceback.format_exc())

    def set_screen(self, width, height):
        user_info = self.pupil_data
        
        user_info['width'] = width
        user_info['height'] = height
        
    def set_pupil_ratio(self, l_x, l_y, r_x, r_y):
        user_info = self.pupil_data

        user_info['left_x'] = l_x
        user_info['left_y'] = l_y
        user_info['right_x'] = r_x
        user_info['right_y'] = r_y

    def set_cheating_ratio(self):
        user_info = self.pupil_data

        true_pcent = self.true_count / self.data_count
        print("true_pcent :", true_pcent)
        user_info['cheat_percentage'] = round(true_pcent, 2)
        print("cheat_percentage :", user_info['cheat_percentage'])
        
    # data count
    def count(self):
        self.data_count+=1

    def check_cheating(self, isCheating):
        if isCheating:
            self.true_count+=1

    def put(self):
        element_str = json.dumps(self.pupil_data)
        self.pubsub.publish('pupil', element_str)

    def get(self):
        gen = self.pubsub.pubsub.listen()
        print("gen type :",type(gen))
        print("hello")

        for pub_data in gen:
            for key in pub_data:
                if isinstance(pub_data[key], bytes):
                    pub_data.update({key : pub_data[key].decode()})
                    print("pubsub :", pub_data)
            
        return pub_data
        
        



class Sound():

    def __init__(self):
        super().__init__()

        self.pubsub = Pubsub('sound')
        self.sound_data = {
            "success": True,
            "error": None,
            "transcription": None                
        }

    def sound_dto_Process(self, sound_value):
        sound = self.sound_data

        try:
            sound['suceess'] = sound_value['success']
            sound['error'] = sound_value['error']
            sound['transcription'] = sound_value['transcription']

        except Exception :
            print(traceback.exec())

    # 큐에 저장
    def put(self):
        element_str = json.dumps(self.sound_data)
        self.pubsub.put(element_str)

    def run(self, loads_data):
        self.sound_dto_Process(loads_data)

    def get(self):
        gen = self.pubsub.pubsub.listen()


        for pub_data in gen:
            return pub_data


#class personRecognition()
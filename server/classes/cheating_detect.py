

import traceback, json, ast
#from classes.DTO import DTO
from classes.redisQueue import RedisQueue
import random
import time
# 

class CheatingSystem:

    def __init__(self,name):
        self.name = name


class Pupil:

    def __init__(self):
        self.pupil_q = RedisQueue(name='pupil')
        self.data_count = 0
        self.true_count = 0

    def counting(self):
        self.data_count += 1

    def update(self, data) -> None : 
        self.pupil_q.put(data)


    def isCheating(self, data : dict):
        if data['cheat'] :
            self.true_count +=1


    def calculate(self, data):
        try:
            cheat_percentage = self.true_count / self.data_count
            data['cheat_percentage'] = cheat_percentage
            return data
        except ZeroDivisionError as e:
            print(e)
            pass

    def pupil_get(self):
        for element in self.yield_data():
            print("pupil get :", element)

            return element


    def yield_data(self):
        while self.pupil_q.isEmpty() is False :
            print(self.pupil_q.size())
            element = self.pupil_q.get()
            
            yield element


class Sound:

    def __init__(self):
        self.sound_q = RedisQueue(name='sound')


    def update(self, data : str) -> None :
        self.sound_q.put(data)


    def sound_get(self):
        for element in self.yield_data():
            print("pupil get :", element)
            return element


    def yield_data(self):
        while self.sound_q.isEmpty() is False :
            time.sleep(3)
            element = self.sound_q.get()
            yield element


class Person:

    def __init__(self):
        self.person_q = RedisQueue(name='person')


    def update(self, data : str) -> None :
        self.person_q.put(data)


    def person_get(self):
        for element in self.yield_data():
            print("pupil get :", element)
            return element


    def yield_data(self):
        while self.person_q.isEmpty() is False :
            time.sleep(3)
            print("yield_data")
            element = self.person_q.get()
            yield element


class CheatingSystem:

    def __init__(self):
        self.pupil_q = RedisQueue(name='pupil')
        self.sound_q = RedisQueue(name='sound')
        self.person_q = RedisQueue(name='person')

    def create_queue(self, name):
        return RedisQueue(name)

    def update_queue(self, name : str):
        pass

    def typeToStr(self, type):
        pass

    def update(self, data : str, type : int) -> None : 
        # print("how many data in pupil_queue f:", self.pupil_q.size())
        # print("how many data in sound_queue f:", self.sound_q.size())
        # print(self.sound_q.isEmpty()) # False
        # print(self.pupil_q.isEmpty()) # False

        # 시간 때문인건가
        if type == 0:
            self.pupil_q.put(data)
        
        if type == 1:
            self.sound_q.put(data)

    def pupil_get(self):
        for element in self.yield_data():
            print("pupil get :", element)
            return element

    def yield_data(self):

        while self.pupil_q.isEmpty() is False :
            print(self.pupil_q.size())
            time.sleep(5)
            element = self.pupil_q.get()
            yield element


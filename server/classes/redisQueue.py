import redis
import sys

sys.path.append('C:\\Users\\BJH\\Desktop\\CatchYou\\server')

class RedisQueue(object):

    def __init__(self,name, **redis_kwargs):

        self.key = name
        self.rq = redis.Redis(**redis_kwargs)

    # 큐 크기 확인
    def size(self):
        return self.rq.llen(self.key)
    
    def isEmpty(self):
        return self.size() == 0

    def put(self, element):
        self.rq.lpush(self.key, element)

    # 데이터 꺼내기
    def get(self,isBlocking = False, timeout=None):
        if isBlocking:
            element = self.rq.brpop(self.key, timeout=timeout)
            element = element[1]
        else:
            element = self.rq.rpop(self.key) #right pop

        return element
    
    # 꺼낼 데이터 조회
    def get_without_pop(self):
        if self.isEmpty():
            return None
        
        element = self.rq.lindex(self.key, -1)
        return element
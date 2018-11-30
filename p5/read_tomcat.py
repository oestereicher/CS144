import sys, random
from locust import HttpLocust, TaskSet

def read(locust):
	postid = random.randint(1, 500)
	url_pref = "/editor/post?action=open"
	req_url = url_pref + "&username=cs144&postid=" + str(postid)
	locust.client.get(req_url, name=url_pref)

class MyTaskSet(TaskSet):
	tasks = [read]

class MyLocust(HttpLocust):
	task_set = MyTaskSet
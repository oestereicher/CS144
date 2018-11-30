import sys, random
from locust import HttpLocust, TaskSet

def read(locust):
	postid = random.randint(1, 500)
	url_pref = "/editor/post?action=open"
	req_url = url_pref + "&username=cs144&postid=" + str(postid)
	locust.client.get(req_url, name=url_pref)

def write(locust):
	postid = random.randint(1, 500)
	url_pref = "/editor/post?action=save"
	req_url = url_pref + "&username=cs144&postid=" + str(postid) + "&title=Loading%20Test&body=***Hello%20World!***"
	locust.client.post(req_url, name=url_pref)

class MyTaskSet(TaskSet):
	tasks = {read: 9, write: 1}

class MyLocust(HttpLocust):
	task_set = MyTaskSet
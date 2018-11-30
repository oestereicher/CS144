import sys, random
from locust import HttpLocust, TaskSet

def write(locust):
	postid = random.randint(1, 500)
	url_pref = "/api/cs144"
	req_url = url_pref + "/" + str(postid)
	post = {"title": "Loading%20Test", "body": "***Hello%20World!***"}
	locust.client.put(req_url, post, name=url_pref)

class MyTaskSet(TaskSet):
	tasks = [write]
	def on_start(locust):
		data = {"username": "cs144", "password": "password"}
		locust.client.post("/login", data=data, name="/login")

class MyLocust(HttpLocust):
	task_set = MyTaskSet
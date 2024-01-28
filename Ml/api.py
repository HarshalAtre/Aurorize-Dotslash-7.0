
from flask import Flask, render_template, request, redirect, session
import model
app = Flask(__name__)


# To render a login form 
@app.route('/')
def view_form():
	return render_template('login.html')

# For handling get request form we can get
# the form inputs value by using args attribute.
# this values after submitting you will see in the urls.
# e.g http://127.0.0.1:5000/handle_get?username=kunal&password=1234
# this exploits our credentials so that's 
# why developers prefer POST request.
@app.route('/handle_get', methods=['GET'])
def handle_get():
	if request.method == 'GET':
		input = request.args['input']
		print(input)
		return model.final(input)

# For handling post request form we can get the form
# inputs value by using POST attribute.
# this values after submitting you will never see in the urls.
@app.route('/handle_post', methods=['POST'])
def handle_post():
	if request.method == 'GET':
		input = request.args['input']
		print(input)
		return model.final(input)

if __name__ == '__main__':
	app.run()

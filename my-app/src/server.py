# server.py
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

counter = 0;
temperature = 10; 
@app.route("/")
def default():
    print("Hello flask");
    return "Hello Flask";

@app.route("/", methods=["POST"])
def index():
    counter = request.json['counter']
    counter += 1;
    print('Inside server', counter);
    return jsonify({'counter': counter, 'temperature':  temperature});
    #return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='5000')             
# Flask server
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
api_key = "L5GjKNSPN6HN9Lbqz2NytOnKc1qs0JZk"

cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/giphy")
@cross_origin()
def giphy_api():
    q = request.args.get("q")
    url = "http://api.giphy.com/v1/gifs/search?q={}&api_key={}&limit=5".format(q, api_key)
    data = requests.get(url)
    return jsonify(data.json())


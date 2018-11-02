# Flask server
from flask import Flask, jsonify
import requests

app = Flask(__name__)

api_key = "L5GjKNSPN6HN9Lbqz2NytOnKc1qs0JZk"
url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key={}&limit=5".format(
        api_key
    )

data = requests.get(url)


@app.route("/giphy")
def giphy_api():
    return jsonify(data.json())


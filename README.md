# Giphy Search

Simple giphy search with React.js and Flask. Only for demo purpse.

# Installation

First clone the repository.

```
git clone https://github.com/feat7/giphy-search.git
cd giphy-search
```
Now follow the steps:

1. Create a virual environment and activate it.

```
python3 -m virtualenv venv
source venv/bin/activate
```

2. Install dependencies.

```
pip install -r requirements.txt
```

3. Run flask server

```
FLASK_APP=app.py
flask run
```

4. Install React dependencies and start server

```
cd frontend
yarn    OR    npm install (if you use npm)
yarn start  OR  npm start
```

You're good to go!

Flask server will be available at http://localhost:5000
React server will be available at http://localhost:3000

# Giphy Server API

Flask server has only end point [GET] http://localhost:5000/giphy which calls giphy API from serverend.

# License

The MIT License

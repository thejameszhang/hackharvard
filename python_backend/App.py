from flask import Flask, jsonify, request
from t5model import T5Model
from flask_cors import CORS, cross_origin

app = Flask(__name__)
model = T5Model()
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@cross_origin()
# creates a route for a javascript chrome extension to access the T5Model class using a POST request
# @app.route("" , methods=["GET","POST"])
@app.route("/get_summary", methods=["POST"])
def get_summary():
    data = request.json
    text = data['text']
    summary = model.summarize(text)
    print(summary)
    return summary
if __name__ == '__main__':
    app.run(debug=True)
    

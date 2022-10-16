from flask import Flask, jsonify, request
from t5model import T5Model

app = Flask(__name__)
model = T5Model()

# creates a route for a javascript chrome extension to access the T5Model class using a POST request
# @app.route("" , methods=["GET","POST"])
@app.route("/get_summary", methods=["POST"])
def get_summary():
    data = request.get_json()
    text = data['text']
    summary = model.get_summary(text)
    return jsonify(summary)
if __name__ == '__main__':
    app.run(debug=True)
    

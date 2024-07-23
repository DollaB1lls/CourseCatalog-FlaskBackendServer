

from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)
db = client['iupcosc']
collection = db['iupcosc']


@app.route('/get_data', methods=['GET'])
def get_data():
    result = []
    # Use an empty query {} to retrieve all documents
    for doc in collection.find({}):
        result.append({
            'course_number': doc['course_number'],
            'course_name': doc['course_name']
        })
    return jsonify({'data': result})

if __name__ == '__main__':
    app.run(debug=False)

#!/usr/bin/env python37

from flask import Flask, request, jsonify
import json

app = Flask(__name__)


@app.route('/api/v1/store/')
def store():
    with open('data.json', 'w') as f:
        f.write(json.dumps(request.get_json()))
    
    return jsonify(request.get_json())


@app.route('/api/v1/retrieve/')
def retrieve():
    try:
        with open('data.json', 'r') as f:
            return jsonify(json.loads(f.read()))
    except Exception:
        return jsonify([])


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8889)
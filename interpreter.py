from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/receive_dictionary', methods=['POST'])
def receive_dictionary():
    data = request.get_json()
    print(data)  # Prints the received dictionary
    return jsonify({'message': 'Received dictionary'}), 200

if __name__ == '__main__':
    app.run(debug=True)

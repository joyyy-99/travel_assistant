from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')

    # Update to the new OpenAI API syntax
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": user_input}
        ]
    )

    # Extract the assistant's reply
    bot_reply = response['choices'][0]['message']['content']

    # Return the reply as JSON
    return jsonify({'reply': bot_reply}), 200

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify
import pandas as pd
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import csv
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 
# File 1
symptom_data = {'Symptom': [], 'Description': []}

with open('description.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        symptom_data['Symptom'].append(row[0])
        symptom_data['Description'].append(row[1])

symptom_df = pd.DataFrame(symptom_data)

vectorizer = TfidfVectorizer(stop_words=stopwords.words('english'))

tfidf_matrix = vectorizer.fit_transform(symptom_df['Description'])

# File 2
medicine_data = pd.read_csv('medicine.csv')

medicine_data = medicine_data.assign(Main_Indications=medicine_data['Main Indications'].str.split(',')).explode('Main Indications')

medicine_data['Main Indications'] = medicine_data['Main Indications'].str.strip()

indication_to_medicine = medicine_data.groupby('Main Indications')['Name of Medicine'].apply(list).to_dict()

def recommend_symptom(user_description):
    user_description_tfidf = vectorizer.transform([user_description])
    cosine_similarities = cosine_similarity(user_description_tfidf, tfidf_matrix).flatten()
    most_similar_index = cosine_similarities.argmax()
    return symptom_df.loc[most_similar_index, 'Symptom']

def recommend_medicines_partial(indications):
    indications = [indication.strip() for indication in indications.split(',')]
    medicines = {}
    for indication in indications:
        medicines[indication] = [medicine for key, medicine in indication_to_medicine.items() if indication in key]
    return medicines

def final(indication):
    data = recommend_medicines_partial(recommend_symptom(indication))
    first_items = [item[0][0] for item in data.values()]
    return first_items[0]

# Flask API endpoint with GET request and query string parameters
@app.route('/test', methods=["GET"])
def test():
    return "FUC YOU"

@app.route('/recommend_medicine', methods=['GET'])
def recommend_medicine():
    try:
        user_input = request.args.get('user_input')
        result = final(user_input)
        return jsonify({'CURE': result})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5002)

from flask import Flask, request, redirect
import sqlite3
import string
import random

app = Flask(__name__)
app.config['DATABASE'] = 'url_shortener.db'


def generate_short_url():
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(6))


def create_table():
    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS urls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original_url TEXT NOT NULL,
            short_url TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


@app.route('/')
def index():
    return '<h1>Bienvenido al acortador de URL</h1>'


@app.route('/shorten', methods=['POST'])
def shorten_url():
    data = request.get_json()
    original_url = data.get('original_url')

    if not original_url:
        return 'URL original no proporcionada', 400

    short_url = generate_short_url()

    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute(
        'INSERT INTO urls (original_url, short_url) VALUES (?, ?)', (original_url, short_url))
    conn.commit()
    conn.close()

    return {'short_url': short_url}


@app.route('/<short_url>')
def redirect_to_original(short_url):
    conn = sqlite3.connect(app.config['DATABASE'])
    cursor = conn.cursor()
    cursor.execute(
        'SELECT original_url FROM urls WHERE short_url = ?', (short_url,))
    result = cursor.fetchone()
    conn.close()

    if result:
        return redirect(result[0])
    else:
        return 'URL no encontrada', 404


if __name__ == '__main__':
    create_table()
    app.run(debug=True)

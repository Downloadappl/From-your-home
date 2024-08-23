from flask import Flask, request, jsonify, render_template
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE email = ? AND password = ?', (email, password)).fetchone()
    conn.close()
    if user:
        return jsonify({'status': 'success'})
    else:
        return jsonify({'status': 'error'})

@app.route('/submit-product', methods=['POST'])
def submit_product():
    user_id = 1  # يجب تحديد المستخدم الحالي بطريقة مناسبة
    name = request.form['name']
    description = request.form['description']
    image = request.files['image'].filename
    phone = request.form['phone']
    conn = get_db_connection()
    conn.execute('INSERT INTO products (user_id, name, description, image, phone) VALUES (?, ?, ?, ?, ?)',
                 (user_id, name, description, image, phone))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success'})

@app.route('/get-users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users WHERE is_verified = FALSE').fetchall()
    conn.close()
    return jsonify({'users': [dict(user) for user in users]})

@app.route('/verify-user/<int:user_id>', methods=['POST'])
def verify_user(user_id):
    conn = get_db_connection()
    conn.execute('UPDATE users SET is_verified = TRUE WHERE id = ?', (user_id,))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success', 'message': 'User verified successfully'})

if __name__ == '__main__':
    app.run(debug=True)

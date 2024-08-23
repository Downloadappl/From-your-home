// pages/post-product.js
import { useState } from 'react';

export default function PostProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !description || !image) {
      alert('يرجى ملء جميع الحقول');
      return;
    }
    // إرسال البيانات للإدارة للموافقة
    alert(`تم إرسال المنتج ${productName} للمراجعة`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>نشر منتج</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder="اسم المنتج" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={styles.input} 
        />
        <textarea 
          placeholder="وصف المنتج" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea} 
        />
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input} 
        />
        <button type="submit" style={styles.button}>نشر المنتج</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    height: '100px',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

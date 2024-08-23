// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [province, setProvince] = useState('');

  const provinces = [
    'بغداد', 'البصرة', 'نينوى', 'الأنبار', 'بابل', 'كربلاء', 
    'النجف', 'ذي قار', 'ديالى', 'دهوك', 'أربيل', 'السليمانية',
    'واسط', 'ميسان', 'المثنى', 'القادسية'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (province) {
      alert(`عرض المنتجات في ${province}`);
      // هنا يتم عرض المنتجات بناءً على المحافظة
    } else {
      alert('يرجى اختيار المحافظة');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>موقع عرض المنتجات</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>اختر المحافظة:</label>
        <select 
          value={province} 
          onChange={(e) => setProvince(e.target.value)} 
          style={styles.select}
        >
          <option value="">اختر المحافظة</option>
          {provinces.map((prov) => (
            <option key={prov} value={prov}>{prov}</option>
          ))}
        </select>
        <button type="submit" style={styles.button}>عرض المنتجات</button>
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
    backgroundColor: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  label: {
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

// pages/dashboard.js
import { useState } from 'react';

export default function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'منتج 1', description: 'وصف المنتج 1', image: '/images/product1.jpg', approved: false },
    { id: 2, name: 'منتج 2', description: 'وصف المنتج 2', image: '/images/product2.jpg', approved: false },
  ]);

  const handleApproval = (id, approve) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, approved: approve } : product
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>لوحة الإدارة</h1>
      <div style={styles.products}>
        {products.map(product => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div style={styles.details}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p style={styles.status}>
                {product.approved ? 'موافق عليه' : 'غير موافق عليه'}
              </p>
              <button
                onClick={() => handleApproval(product.id, true)}
                style={styles.button}
              >
                الموافقة
              </button>
              <button
                onClick={() => handleApproval(product.id, false)}
                style={styles.button}
              >
                الرفض
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  products: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: 'white',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '15px',
  },
  details: {
    flex: 1,
  },
  status: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '0.9rem',
  },
};

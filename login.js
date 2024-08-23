// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    // تحقق من صحة تسجيل الدخول (هنا يمكن الربط بقاعدة بيانات)
    if (phone === '07701234567' && password === 'password') {
      router.push('/dashboard');
    } else {
      alert('رقم الهاتف أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>تسجيل الدخول</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input 
          type="text" 
          placeholder="رقم الهاتف" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input} 
        />
        <button type="submit" style={styles.button}>تسجيل الدخول</button>
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

import React, { useState } from 'react';

export default function App() {
  const [title, setTitle] = useState("HARİKA VİDEO!");
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>ThumbGenius Thumbnail Düzenleyici</h1>
      <div style={{ 
        width: '100%', 
        aspectRatio: '16/9', 
        background: 'linear-gradient(135deg, #ff416c, #ff4b2b)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        marginBottom: '20px',
        padding: '20px'
      }}>
        <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
      </div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Başlık yazın..."
        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '16px' }}
      />
    </div>
  );
}


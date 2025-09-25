import React, { useEffect, useState } from 'react';

export default function Home() {
  const [health, setHealth] = useState<string>('Carregando...');

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then(res => res.json())
      .then(data => setHealth(data.status))
      .catch(() => setHealth('Erro ao conectar ao backend'));
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h1>Phoenix-86 Neural Hub</h1>
      <p>Status do backend FastAPI: <b>{health}</b></p>
      <p>Deploy automático pronto para Vercel!</p>
    </main>
  );
}

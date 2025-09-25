# Deploy Phoenix-86 na Vercel

## Passos rápidos

1. Faça push do projeto para o GitHub.
2. Acesse [vercel.com](https://vercel.com/) e crie um novo projeto.
3. Selecione a pasta `frontend/React` como root do projeto.
4. Vercel detecta Next.js automaticamente.
5. Configure variáveis de ambiente conforme `.env.example` do backend.
6. O arquivo `vercel.json` já faz o proxy para o backend FastAPI.
7. Backend deve estar acessível (Vercel Serverless ou Docker).
8. Acesse a URL do projeto para ver o status do backend e o hub online.

## Teste local

```bash
npm run dev
```

Acesse: http://localhost:3000

---

Se precisar de integração extra, dashboard customizado ou deploy do backend, só pedir!
// ============================================================
// CONFIGURAÇÃO DO FIREBASE — Matrículas COAP
// ============================================================
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto gratuito (plano "Spark", sem custo)
// 3. Dentro do projeto: Build > Firestore Database > Criar banco
//    - Escolha "Iniciar em modo de produção"
//    - Região: southamerica-east1 (São Paulo)
// 4. Vá em Configurações do projeto (ícone de engrenagem) > Geral
//    > "Seus apps" > ícone "</>" (Web) > registre um app
// 5. Copie os valores que o Firebase mostrar e cole abaixo,
//    substituindo cada "COLE_AQUI"
// 6. Depois, vá em Firestore Database > Regras e cole o conteúdo
//    do arquivo firestore.rules (veja LEIA-ME.md)
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyCsTb8LFNphKinkpXe7eiCK8e6cD-P8Ers",
  authDomain: "matriculas-coap.firebaseapp.com",
  projectId: "matriculas-coap",
  storageBucket: "matriculas-coap.firebasestorage.app",
  messagingSenderId: "1079507612170",
  appId: "1:1079507612170:web:68354ceaa737132da765f3"
};

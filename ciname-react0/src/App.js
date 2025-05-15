import { useState } from 'react';
import Button from './components/Button/';
import Modal from './components/Modal/';

function App() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Testando Componentes</h1>
      <Button onClick={() => setMostrarModal(true)}>Abrir Modal</Button>

      <Modal isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
        <h2>Conteúdo do Modal</h2>
        <p>Este é um modal de exemplo.</p>
      </Modal>
    </div>
  );
}

export default App;

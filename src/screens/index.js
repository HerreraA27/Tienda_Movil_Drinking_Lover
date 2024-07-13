const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Aquí puedes manejar la lógica de autenticación
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).send({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).send({ message: 'Credenciales incorrectas' });
  }
});

app.listen(PORT, () => {
  console.log(Servidor corriendo en http://localhost:${PORT});
});
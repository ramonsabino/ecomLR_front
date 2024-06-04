import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Link,
  CircularProgress,
} from "@mui/material";
import api from "../../axiosConfig"; // Importando a instância do Axios
import { useAuth } from "../../context/AuthContext"; // Importando o contexto de autenticação

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Adicionando estado para nome
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para controle do spinner
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e registro
  const navigate = useNavigate();
  const { authToken, login, logout } = useAuth(); // Usando o contexto de autenticação

  useEffect(() => {
    if (authToken) {
      setSuccessMessage("Você já está logado!");
    }
  }, [authToken]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);
  
    try {
      const response = await api.post("/api/auth/login", { email, password });
      if (response.status === 200) {
        const { token, userId } = response.data; // Extrai token e userId da resposta
        login(token, userId); // Chama a função de login do contexto com token e userId
        setSuccessMessage("Login realizado com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);
  
    try {
      const response = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        const { token, userId } = response.data; // Extrai token e userId da resposta
        login(token, userId); // Chama a função de login do contexto com token e userId
        setSuccessMessage("Registro realizado com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError("Erro ao registrar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout(); // Chama a função de logout do contexto
    setSuccessMessage('Você foi deslogado com sucesso!');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            {isLogin ? "Entrar" : "Registrar"}
          </Typography>
          {authToken ? (
            <Typography variant="h6" align="center" color="green">
              Você já está logado!
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </CardActions>
            </Typography>
          ) : (
            <form onSubmit={isLogin ? handleLogin : handleRegister}>
              {!isLogin && (
                <TextField
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Box mt={2} color="red">
                  {error}
                </Box>
              )}
              {successMessage && (
                <Box mt={2} color="green">
                  {successMessage}
                </Box>
              )}
            </form>
          )}
        </CardContent>
        {!authToken && (
          <>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={isLogin ? handleLogin : handleRegister}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} />
                ) : isLogin ? (
                  "Entrar"
                ) : (
                  "Registrar"
                )}
              </Button>
            </CardActions>
            <Box textAlign="center" mt={2} mb={2}>
              <Link
                component="button"
                variant="body2"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                  ? "Não tem cadastro? Se registre"
                  : "Já tem uma conta? Entre"}
              </Link>
            </Box>
          </>
        )}
      </Card>
    </Container>
  );
};

export default LoginPage;

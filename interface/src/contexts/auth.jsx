import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { connect, supabase } from "../services/api";

export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [atualizar, setAtualizar] = useState(false);

  const signIn = async (usuario, senha, setRedirect) => {

    if (!usuario || !senha) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: usuario,
        password: senha
      });

      if (error) {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
        console.error("Erro de autenticação:", error);
        return;
      }
      setRedirect(true);
      setUser(usuario);

      toast.success(`Login bem-sucedido! Bem-vindo, ${usuario}!`);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login. Verifique o console para mais detalhes.");
    }
  };

  const signUp = async (usuario, senha) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: usuario,
        password: senha,
      })

      if (error) {
        toast.error("Erro ao inserir usuário.");
        console.error("Erro de autenticação:", error);
        return;
      }

      toast.success(`Usuário ${usuario} inserido com sucesso, favor confirmar conta no email cadastrado!`)
    } catch (error) {
      console.log("Erro ao inseir usuário: ", error)
    }
  };

  const signout = () => {
    setUser(null);
  };

  const getParticipantes = async () => {
    try {
      const response = await fetch(`${connect}/participantes`);

      if (!response.ok) {
        throw new Error(`Erro ao buscar participantes. Status: ${response.status}`)
      }

      const data = await response.json();

      return data;

    } catch (error) {
      console.error(`Erro ao buscar dados dos participantes. Status: ${error}`)
      throw error;
    }
  };

  const InsertParticipantes = async (edit, data) => {
    try {

      const method = edit ? 'PUT' : 'POST';

      const response = await fetch(`${connect}/participantes`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error(`Erro ao inserir participante. Status: ${error}`)
    }
  };

  const getProjetos = async () => {
    try {
      const response = await fetch(`${connect}/projetos`);

      if (!response.ok) {
        throw new Error(`Erro ao buscar projetos. Status: ${response.status}`)
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao buscar dados dos projetos. Status: ${error}`)
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin: signIn,
        signout,
        signUp,
        getParticipantes,
        getProjetos,
        setAtualizar,
        atualizar,
      }}>
      {children}
    </AuthContext.Provider>
  );
}


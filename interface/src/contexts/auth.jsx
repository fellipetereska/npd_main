import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { supabase } from "../services/api";

export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const signIn = async (usuario, senha, setRedirect) => {

    console.log("Trying to sign in with:", usuario, senha);

    if (!usuario || !senha) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      const { error } = supabase.auth.signInWithPassword({
        email: usuario,
        password: senha
      })

      if (error) {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
        console.error("Erro de autenticação:", error);
        return;
      }
      console.log("Login bem-sucedido!");

      setRedirect(true);
      setUser(usuario);

      toast.success(`Login bem-sucedido! Bem-vindo, ${usuario}!`);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login. Verifique o console para mais detalhes.");
    }
  };

  const signout = () => {
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        signin: signIn,
        signout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}


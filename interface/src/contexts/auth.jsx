import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../services/api";

export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

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
    } catch(error) {
      console.log("Erro ao inseir usuário: ", error)
    }
  }

  const signout = () => {
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        signin: signIn,
        signout,
        signUp
      }}>
      {children}
    </AuthContext.Provider>
  );
}


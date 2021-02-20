import React, {useState, FormEvent} from 'react';
import { Link, useHistory } from "react-router-dom";
import Logo from "../../img/logo.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { RecoveryStyle } from'./style';
import { FiArrowRight } from 'react-icons/fi';

import api from "../../services/api";


const RecoveryPass: React.FC = () => {

  const history = useHistory(); 

  const [ cpf, setCpf ] = useState('');
  const [ password,setPassword ] = useState('');
  const [ confirmPass, setConfirmPass ] = useState('');

  function createAccount(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const postData = {
      cpf: cpf,
      senha: password,
      ConfirmaSenha: confirmPass
    
  }
  if(password != confirmPass){
    toast.error('As senhas não são compativeis');
    return ;
  } else{
    toast.success('A Nova senha foi definida');
  }
}
  return (
    <RecoveryStyle>
      <header>
        <ToastContainer />
        
      <Link to="/">
        <img className="logo-gama" src={Logo} alt=""/>
      </Link>
      </header>
      
      <main className="recovery-wrapper">
          <form onSubmit={createAccount}>
          <h3 className="title-recovery">
            Esqueci minha senha
          </h3>
          <p id="subtitle-recovery">
            Confirme seu CPF e escolha sua nova senha.
          </p>
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Confirme seu CPF"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua nova senha"/>
            <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} placeholder="Confirme sua nova senha"/>
            <button type="submit">Enviar<FiArrowRight size={20}/></button>
          </form>
      </main>
    </RecoveryStyle>
  );
  }


export default RecoveryPass;
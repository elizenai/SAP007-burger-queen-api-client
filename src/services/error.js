export const statusError = ({status}) => {

 switch (status) {
  case 400:
    return "Preencha todos os campos ou digite um email ou senha válidos";
  case 401:
    return "Usuário não autenticado";
  case 403:
    return "Você ja possui cadastro";
  case 404:
    return "Usuário não encontrado";
  default:
    return "Ocorreu algum erro";
 }
};
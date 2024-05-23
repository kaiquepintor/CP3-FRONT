let listaUsuarios = [
    {nomeCompleto: "José das Couve",emailUsuario:"jo@email.com",senhaUsuario:"123456"},
    {nomeCompleto: "Joaquim Neves",emailUsuario:"ju@email.com",senhaUsuario:"123456"}
  ];

  function validacao(inputEmail, inputSenha) {

    //Recuperar elemento de msgStatus
    let msgStatus = document.querySelector(".msg-status");
    
    for (let x = 0; x < listaUsuarios.length; x++) {
        
        if ((inputEmail.value == listaUsuarios[x].emailUsuario) && (inputSenha.value == listaUsuarios[x].senhaUsuario)) {
          //Redirect
            msgStatus.setAttribute("class","msg-status-sucess");
            msgStatus.innerText = "Login realizado com sucesso!";
    
            //Guardando o objeto validado no localStorage:
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));
  
            //Criar o token do usuário;
            const tokenUser = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
  
            //Gerando a autenticação colocando o token no sessionStorage:
            sessionStorage.setItem("token",tokenUser);
  
            setTimeout(function(){
                msgStatus.setAttribute("class","msg-status");
                msgStatus.innerText = "";
                window.location.href = "../index.html";
            }, 3000);
            return false;
        }
    }
        msgStatus.setAttribute("class","msg-status-error");
        msgStatus.innerText = "Login ou senha invalidos!";
        setTimeout(function(){
            msgStatus.setAttribute("class","msg-status");
            msgStatus.innerText = "";
        }, 3000);
        return false;
    }
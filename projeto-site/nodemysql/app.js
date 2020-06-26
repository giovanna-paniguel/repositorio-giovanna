//conexão com banco

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newhorizon',
  password: 'Senha1@123',
  database: 'projindividual'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

		function enviaContatoProBanco() {

			var erros = validaContato();
			mensagemErro.innerHTML = "";

			if (erros.length > 0) {
				for (var i = 0; i < erros.length; i++) {
					var erro = erros[i];
					var li = document.createElement("li");
					li.innerHTML = erro;
					mensagemErro.appendChild(li);
				}
			} else {
				console.log(conection);
				conection.query(`insert into cadastro(nome, email, senha, destino, preferencia) values ('${nome.value}','${email.value}','${senha.value}','${checkbox1.value}','${checkbox2.value}')`);
			}
		}

		function validaContato() {
			var erros = [];

			if (!nome.value) {
				erros.push("Prencher nome!");
			}

			if (!email.value ||
				(email.value.search("@") == -1) ||
				(email.value.search(".") == -1) ||
				(email.value.search(" ") >= '')) {
				erros.push("O formato do email é: usuario@dominio.com");
			}

			if (senha.value != confSenha.value) {
				erros.push("Coloque a mesma senha nos campos!");
			}

			return erros;
		}
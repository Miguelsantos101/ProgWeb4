/*
 *  Script com a lógica do relógio digital.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio.
 *  1. Utilizando o método Date() do javaScript para retorna um objeto de data com
 *     a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o HTML chamando o método timer(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo textContent dos elementos retornados.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval'.
 */

function time() {
  var tempo = new Date();

  let horas = tempo.getHours();
  let minutos = tempo.getMinutes();
  let segundos = tempo.getSeconds();

  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

/** Chamada da função de time para funcionar o relógio usando o método 'setInterval'*/
setInterval(time, 1000);

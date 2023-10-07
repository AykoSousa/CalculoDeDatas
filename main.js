document.getElementById("dataUltimoExame").addEventListener("change", calcularDatas);

function calcularDatas() {
  // Obter a data do último exame informada pelo usuário
  const dataUltimoExameInput = document.getElementById("dataUltimoExame");
  const dataUltimoExame = moment(dataUltimoExameInput.value);

  // Calcular a data de acerto de rescisão (10 dias corridos após a data atual)
  const data = document.getElementById("dataUltimoExame");
  const dataAtual = moment(data.value);
  const dataAcertoRescisao = dataAtual.clone().add((10-1), "days");

  // Calcular a data do exame médico de demissão (180 dias após o último exame)
  const dataExameDemissao = dataUltimoExame.clone().add(180, "days");

  // Fazer verificação se é necessário fazer exame médico
  if (dataUltimoExame <= dataUltimoExame.clone().add(180, "days")) {
    document.getElementById("verificar").textContent = "*Não é necessário fazer o exame demissional.";
  };

  // Exibir as datas calculadas no HTML
  document.getElementById("dataAcertoRescisao").textContent = dataAcertoRescisao.format("DD-MM-YYYY");
  document.getElementById("dataExameDemissao").textContent = dataExameDemissao.format("DD-MM-YYYY");
}
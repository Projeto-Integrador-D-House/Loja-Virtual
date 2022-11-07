
const getCep = (cep) => {

    
   if (cep?.length !== 8) {
    return "CEP Inválido";
  }

   const cepData =  fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((res) => res.json())
   


cepData();
}
export default class RegisterAPLV {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome= obj.nome;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.email = obj.email
    }

    modelValidForRegistration(){
        return !!this.nome;
    }

    modelValidToUpdate(){
        return !! (this.id && this.nome)
    }
}
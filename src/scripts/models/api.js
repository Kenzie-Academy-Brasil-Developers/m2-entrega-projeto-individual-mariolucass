import { instance, instance1 } from "./axios.js";
import { Toast } from "./toast.js";

export class Api {
  static async postLoginApi(data) {
    const user = await instance
      .post("/auth/login", data)
      .then((res) => {
        res.data;
        localStorage.setItem("@Hashy:token", res.data.token);
        localStorage.setItem("@Hashy:userId", res.data.uuid);
        if (res.data.is_admin) {
          window.location.assign("/src/pages/dashboardAdmin.html");
          localStorage.setItem("@Hashy:admin", "useradmin");
        } else {
          window.location.assign("/src/pages/dashboard.html");
        }
        this.messageSucessApi("o login");
      })
      .catch((err) => this.messageErrorApi(err));

    return user;
  }

  static async postRegisterApi(data) {
    const user = await instance
      .post("/auth/register/user", data)
      .then((res) => {
        res.data;
        this.messageSucessApi("o registro");
        window.location.assign("/index.html");
      })
      .catch((err) => this.messageErrorApi(err));

    return user;
  }

  static async getEmpresasApi() {
    const empresas = await instance
      .get("/companies")
      .then((res) => {
        return res.data;
      })
      .catch((err) => this.messageErrorApi(err));

    return empresas;
  }

  static async getEmpresasSetorApi(setor) {
    const empresas = await instance
      .get(`/companies/${setor}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => this.messageErrorApi(err));

    return empresas;
  }

  static async getFuncionariosLoggedApi() {
    const funcionarios = await instance1
      .get("/users/departments/coworkers")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return funcionarios;
  }

  static async getDepartamentsLoggedApi() {
    const departments = await instance1
      .get("/users/departments")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return departments;
  }

  static async getUserLoggedApi() {
    const user = await instance1
      .get("/users/profile")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return user;
  }

  static async getCoWorkersApi() {
    const coWorkers = await instance1
      .get("/users/departments/coworkers")
      .then((res) => res.data[0].users)
      .catch((err) => this.messageErrorApi(err));

    return coWorkers;
  }

  static async getAllSectorsApi() {
    const sectors = await instance1
      .get("/sectors")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return sectors;
  }

  static async getAllDepartamentsApi() {
    const departments = await instance1
      .get("/departments")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return departments;
  }

  static async getAllDepartamentsEmpresaApi(empresaId) {
    const empresa = await instance1
      .get(`/departments/${empresaId}`)
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return empresa;
  }

  static async getAllUsersApi() {
    const usuarios = await instance1
      .get("/users")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return usuarios;
  }

  static async getUsersOffWorkApi() {
    const users = await instance1
      .get("/admin/out_of_work")
      .then((res) => res.data)
      .catch((err) => this.messageErrorApi(err));

    return users;
  }

  static async attInfoLoggedApi(data) {
    const funcionario = await instance1
      .patch("/users", data)
      .then((res) => this.messageSucessApi("a edição dos seus dados"))
      .catch((err) => this.messageErrorApi(err));

    return funcionario;
  }

  static async attInfoFuncionarioApi(funcionarioId, data) {
    const funcionario = await instance1
      .patch(`/admin/update_user/${funcionarioId}`, data)
      .then(
        (res) => res.data,
        this.messageSucessApi("a edição dos dados do funcionário")
      )
      .catch((err) => this.messageErrorApi(err));
    return funcionario;
  }

  static async attContratarFuncionarioApi(data) {
    const contratar = await instance1
      .patch("/departments/hire/", data)
      .then(
        (res) => res.data,
        this.messageSucessApi("a contratação do funcionário")
      )
      .catch((err) => this.messageErrorApi(err));

    return contratar;
  }

  static async attDemitirFuncionarioApi(funcionarioId) {
    const demitir = await instance1
      .patch(`/departments/dismiss/${funcionarioId}`)
      .then(
        (res) => res.data,
        this.messageSucessApi("a demição do funcionário")
      )
      .catch((err) => this.messageErrorApi(err));

    return demitir;
  }

  static async attDepartamentoApi(departamentoId, data) {
    const departamento = await instance1
      .patch(`/departments/${departamentoId}`, data)
      .then((res) => this.messageSucessApi("a edição do departamento"))
      .catch((err) => this.messageErrorApi(err));

    return departamento;
  }

  static async createEmpresasApi(data) {
    const empresa = await instance1
      .post("/companies", data)
      .then((res) => this.messageSucessApi("a criação da empresa"))
      .catch((err) => this.messageErrorApi(err));

    return empresa;
  }

  static async createDepartamentoApi(data) {
    const departamento = await instance1
      .post("/departments", data)
      .then((res) => this.messageSucessApi("a criação do departamento"))
      .catch((err) => this.messageErrorApi(err));

    return departamento;
  }

  static async deleteDepartamentoApi(departamento) {
    const departamentoDelete = await instance1
      .delete(`departments/${departamento}`)
      .then(
        (res) => res.data,
        this.messageSucessApi("a exclusão do departamento")
      )
      .catch((err) => this.messageErrorApi(err));

    return departamentoDelete;
  }

  static async deleteUser(id) {
    const userDelete = await instance1
      .delete(`admin/delete_user/${id}`)
      .then((res) => res.data, this.messageSucessApi("a exclusão do usuário"))
      .catch((err) => this.messageErrorApi(err));

    return userDelete;
  }

  static messageErrorApi(message) {
    Toast.create(message);
    console.log(message);
  }

  static messageSucessApi(message) {
    Toast.create(`Parabéns você fez ${message} com sucesso`);
  }
}

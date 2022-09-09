import { instance, instance1 } from "./axios.js";

export class Api {
  static async postLoginApi(data) {
    const user = await instance
      .post("/auth/login", data)
      .then((res) => {
        res.data;
      })
      .catch((err) => console.log(err.response.data));

    return user;
  }

  static async postRegisterApi(data) {
    const user = await instance
      .post("/auth/register/user", data)
      .then((res) => {
        res.data;
      })
      .catch((err) => console.log(err.response.data));

    return user;
  }

  static async getEmpresasApi() {
    const empresas = await instance
      .get("/companies")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err.response.data));

    return empresas;
  }

  static async getEmpresasSetorApi(setor) {
    const empresas = await instance
      .get(`/companies/${setor}`)
      .then((res) => {
        res.data;
      })
      .catch((err) => console.log(err.response.data));

    return empresas;
  }

  static async getFuncionariosLoggedApi() {
    const funcionarios = await instance1
      .get("/users/departments/coworkers")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return funcionarios;
  }

  static async getDepartamentsLoggedApi() {
    const departments = await instance1
      .get("/users/departments")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return departments;
  }

  static async getAllSectorsApi() {
    const sectors = await instance1
      .get("/sectors")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return sectors;
  }

  static async getAllDepartaments() {
    const departments = await instance1
      .get("/departments")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return departments;
  }

  static async getAllDepartamentsEmpresa(empresaId) {
    const empresa = await instance1
      .get(`/departments/${empresaId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return empresa;
  }

  static async getAllUsersApi() {
    const usuarios = await instance1
      .get("/users")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return usuarios;
  }

  static async getUsersOffWorkApi() {
    const users = await instance1
      .get("/admin/out_of_work")
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return users;
  }

  static async attInfoLoggedApi(data) {
    const funcionario = await instance1
      .patch("/users", data)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return funcionario;
  }

  static async attInfoFuncionarioApi(funcionarioId, data) {
    const funcionario = await instance1
      .patch(`/admin/update_user/${funcionarioId}`, data)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return funcionario;
  }

  static async attContratarFuncionario(data) {
    const contratar = await instance1
      .patch("/departments/hire/", data)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return contratar;
  }

  static async attDemitirFuncionario(funcionarioId) {
    const demitir = await instance1
      .patch(`/departments/dismiss/${funcionarioId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return demitir;
  }

  static async attDepartamento(departamentoId) {
    const departamento = await instance1
      .patch(`/departments/${departamentoId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return departamento;
  }

  static async createEmpresasApi(data) {
    const empresa = await instance1
      .post("/companies", data)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return empresa;
  }

  static async createDepartamentoApi(data) {
    const departamento = await instance1
      .post("/departments", data)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return departamento;
  }

  static async deleteDepartamento(departamento) {
    const departamentoDelete = await instance1
      .delete(`departments/${departamento}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

    return departamentoDelete;
  }
}

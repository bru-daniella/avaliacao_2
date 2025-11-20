import axios from "axios";
import type Student from "~/models/student";

const api = axios.create({
    baseURL: 'https://proweb.leoproti.com.br/'
})
const studentsApi = {
    getAll: async (): Promise<Student[]> => {
        const response = (await api.get<any[]>('/alunos')).data;

        return response.map(student => {
            return { id: student.id, name: student.nome, team: student.turma, course: student.curso, registration: student.matricula }
        })
    },
    getOne: async (id: number) => {
        const student = (await api.get<any>('/alunos/' + id)).data;
        return { id: student.id, name: student.nome, team: student.turma, course: student.curso, registration: student.matricula }
    }
}

export default studentsApi;
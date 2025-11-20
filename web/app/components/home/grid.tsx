import { useEffect, useState } from 'react';
import studentsApi from '~/services/api'
import { Table } from 'react-bootstrap';
import type Student from '~/models/student';
export function Grid() {

  const [students, setStudents] = useState<Student[]>()

  useEffect(() => {
    const getAll = async () => {
      let students = await studentsApi.getAll()
      setStudents(students)
    }

    getAll();
  }, [])
  return (
    <div className='row'>
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Turma</th>
              <th>Curso</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          <tbody>
            {
              students?.map(({ id, name, team, course, registration }) => (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{team}</td>
                  <td>{course}</td>
                  <td>{registration}</td>
                  <td>
                    <a className='btn btn-success' href={'/students/' + id + '/details'}>Detalhes</a>
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </Table>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
}



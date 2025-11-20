import { useEffect, useState } from 'react';
import productsApi from '~/services/api'
import { Table } from 'react-bootstrap';
import type Student from '~/models/student';
import { useParams } from 'react-router';

export function Detail() {
  const [student, setStudent] = useState<Student>()
  
  const idStr = useParams().id;
  useEffect(() => {
    const get = async () => {
      const id = Number.parseInt(idStr!)
      let student = await productsApi.getOne(id)
      setStudent(student)
    }

    get();
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
                <tr>
                  <td>{student?.id}</td>
                  <td>{student?.name}</td>
                  <td>{student?.team}</td>
                  <td>{student?.course}</td>
                  <td>{student?.registration}</td>
                </tr>
            }
          </tbody>
        </Table>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
}



import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { ITeacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'

import './style.css'
import searchIcon from '../../assets/images/icons/procurar.svg'
import api from '../../services/api'

export default function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleSearchTeacher(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
        }
    });

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeacher}>
          <Select  
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciências', label: 'Ciências'},
                { value: 'Educação física', label: 'Educação física'},
                { value: 'Física', label: 'Física'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'História', label: 'História'},
                { value: 'Matemática', label: 'Matemática'},
                { value: 'Português', label: 'Português'},
                { value: 'Química', label: 'Química'}
              ]}
            />
            <Select  
              name="week_day" 
              label="Dia da semana" 
              value={week_day}
              onChange={e => setWeekDay(e.target.value)}
              options={[
                { value: '0', label: 'Domingo'},
                { value: '1', label: 'Segunda-feira'},
                { value: '2', label: 'Terça-feira'},
                { value: '3', label: 'Quarta-feira'},
                { value: '4 física', label: 'Quinta-feira'},
                { value: '5', label: 'Sexta-feira'},
                { value: '6', label: 'Sábado'}
              ]}
            />
          <Input name="time" type="time" label="Hora" value={time} onChange={e => setTime(e.target.value)} />
          <Button type="submit">
              <img src={searchIcon} alt="Procurar" />
          </Button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

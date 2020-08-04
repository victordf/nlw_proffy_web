import React from 'react'

import PageHeader from '../../components/PageHeader'

import './style.css'
import TeacherItem from '../../components/TeacherItem'
import TextField from '../../components/TextField'

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <TextField 
            id="subject"
            label="Matérias"
          />

          <TextField 
            id="week_day"
            label="Dia da Semana"
          />

          <TextField 
            id="time"
            label="Hora"
          />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './style.css'
import api from '../../services/api'

export default function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const history = useHistory()

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then((response) => {
      alert('Cadastro realizado com sucesso')
      history.push('/');
    }).catch(err => {
      alert('Erro ao cadastrar')
    })
  }

  function setScheduleItemsValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((item, index) => {
      if (index === position)
        return { ...item, [field]: value }
      return item
    })
    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form">
      <PageHeader 
        title="Que bom que você quer dar aulas"
        description="O primeiro passo, é preencher esse formulário"
      />

      <main>
        <form id="form-teacher" onSubmit={handleCreateClass}>
          <fieldset>
            <legend><span>Seus Dados</span></legend>

            <Input name="name" value={name} onChange={(e => setName(e.target.value))} label="Nome Completo" />
            <Input name="avatar" value={avatar} onChange={(e => setAvatar(e.target.value))} label="Link da sua foto (comece com //http)" />
            <Input name="whatsapp" value={whatsapp} onChange={(e => setWhatsapp(e.target.value))} label="Whatsapp (somente número)" />
            <Textarea name="biografia" value={bio} onChange={(e => setBio(e.target.value))} label="Biografia" rows={5} cols={12}
            />
          </fieldset>

          <fieldset>
            <legend><span>Sobre a aula</span></legend>

            <Select  
              name="subject" 
              label="Matéria" 
              value={subject} 
              onChange={(e => setSubject(e.target.value))}
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
            <Input value={cost} onChange={(e => setCost(e.target.value))} name="cost" label="Custo da sua hora por aula (em R$)" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select  
                    name="week_day" 
                    label="Dia da semana" 
                    value={scheduleItems[index].week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo'},
                      { value: '1', label: 'Segunda-feira'},
                      { value: '2', label: 'Terça-feira'},
                      { value: '3', label: 'Quarta-feira'},
                      { value: '4', label: 'Quinta-feira'},
                      { value: '5', label: 'Sexta-feira'},
                      { value: '6', label: 'Sábado'}
                    ]}
                  />
                  <Input onChange={e => setScheduleItemsValue(index, 'from', e.target.value)} name="from" value={scheduleItems[index].from} label="Das" type="time" />
                  <Input onChange={e => setScheduleItemsValue(index, 'to', e.target.value)} name="to" value={scheduleItems[index].to} label="Até" type="time" />
                </div>
              );
            })
            }

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

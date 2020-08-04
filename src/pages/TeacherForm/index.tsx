import React from 'react'
import PageHeader from '../../components/PageHeader'

import './style.css'
import TextField from '../../components/TextField'
import warningIcon from '../../assets/images/icons/warning.svg'

export default function TeacherForm() {
  return (
    <div id="page-teacher-form">
      <PageHeader title="Que bom que você quer dar aulas">
        <p>O primeiro passo, é preencher esse formulário</p>
      </PageHeader>

      <main>
        <form id="form-teacher">
          <fieldset>
            <legend><span>Seus Dados</span></legend>

            <TextField 
              id="name"
              label="Nome Completo"
            />

            <TextField 
              id="link-foto"
              label="Link da sua foto (comece com //http)"
            />

            <TextField 
              id="whatsapp"
              label="Whatsapp (somente número)"
            />

            <TextField 
              id="biografia"
              label="Biografia"
              type="textarea"
              rows={5}
              cols={12}
            />
          </fieldset>

          <fieldset>
            <legend><span>Sobre a aula</span></legend>

            <TextField 
              id="subject"
              label="Matéria"
            />

            <TextField 
              id="value-hora"
              label="Custo da sua hora por aula (em R$)"
            />
          </fieldset>

          <fieldset>
            <legend>
              <div>
                <span>Horários disponíveis</span>
                <button type="button">Novo horário</button>
              </div>
            </legend>

            <div id="grid-horarios">
              <div className="horarios-group">
                <TextField 
                  id="week-day"
                  className="horario-item"
                  label="Dia da semana"
                />

                <TextField 
                  id="time-init"
                  className="horario-item"
                  label="Das"
                />

                <TextField 
                  id="time-finish"
                  className="horario-item"
                  label="Até"
                />
              </div>
            </div>
          </fieldset>

          <footer>
            <div id="div-aviso">
              <img src={warningIcon} alt="Aviso"/>
              <div>
                <span>Importante!</span>
                <span>Preencha todos os dados</span>
              </div>
            </div>

            <button type="button">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

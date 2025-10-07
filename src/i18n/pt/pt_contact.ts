import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contato',
  description:
    'Se você quiser entrar em contato comigo, pode fazê-lo através das minhas redes sociais ou por e-mail.',
  social: 'Aqui estão minhas contas nas redes sociais e meu endereço de e-mail:',
  // Mantenha os colchetes e aspas ao redor do @ -> {'@'}
  email: "juvenciofigo{'@'}mail.com",
  copy: 'Copiar',
  copied: 'Copiado',
  form: 'Alternativamente, você pode usar este formulário para me enviar uma mensagem:',
  name_label: 'Nome',
  name_placeholder: 'Digite seu Nome',
  email_label: 'E-mail',
  email_placeholder: 'Digite seu E-mail',
  message_label: 'Mensagem',
  message_placeholder: 'Digite sua Mensagem',
  send: 'Enviar Mensagem',
  sending: 'Enviando...',
  restriction: 'Você pode enviar uma mensagem a cada 30 minutos, por favor aguarde.'
}

export default contact

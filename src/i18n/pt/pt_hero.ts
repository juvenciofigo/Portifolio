import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Olá, meu nome é Juvêncio Figo',
  subtitle:
    'Dominei a arte de transformar café em código e caos em ordem. Minha paixão por resolver problemas é igualada apenas pelo meu amor por fazer panquecas caseiras nas manhãs de domingo.',
  name: 'Juvêncio Figo',
  url: '',
  contact_button: 'Entrar em contato',
  // Se um perfil tiver uma string vazia '', o botão não será exibido
  profiles: {
    linkedin: 'https://linkedin.com/in/juvenciofigo',
    github: 'https://github.com/juvenciofigo',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Início'
}

export default hero

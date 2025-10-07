import type { About } from '@/types'

const about: About = {
  title: 'Sobre',
  summary:
    'Durante o dia ☀️, sou engenheiro de software com talento para transformar problemas complexos em soluções simples. À noite 🌙, atuo como apreciador de memes finos. Com gosto por trocadilhos e um profundo amor por tudo relacionado à tecnologia. \n\n Um experiente malabarista de tarefas e entusiasta da tecnologia, dominei a arte de transformar café ☕ em código e caos em ordem.',
  education: {
    title: 'Educação',
    list: [
      {
        title: 'Engengaria Eletrônica',
        institution: 'Universidade Eduardo Mondlane',
        url: '',
        description: '',
        startDate: '2024-01',
        endDate: undefined,
        courses: []
      },
      {
        title: 'Adminstação de Redes de Computadores',
        institution: 'Tecnicol',
        url: '',
        description: '',
        startDate: '2016-01',
        endDate: undefined,
        courses: []
      }
    ]
  },
  hardSkill: {
    title: 'Qualificações',
    list: {
      'Front-end': [
        'JavaScript (TypeScript)',
        'HTML5',
        'CSS3',
        'React',
        'Vue.js',
        'Quasar Framework',
        'Bootstrap',
        'Tailwind CSS'
      ],
      'Back-end': ['Node.js', 'Java (Spring Boot)'],
      'Bancos de Dados': ['MongoDB', 'MySQL', 'PostgreSQL'],
      ' Design & Prototipagem': ['Figma'],
      Testes: ['Unitários (JUnit)', 'End-to-End (Cypress, Playwright)'],
      'DevOps & Ferramentas': ['Docker', 'AWS'],
      'Boas Práticas & Qualidade': ['Testes Unitários', 'Princípios SOLID']
    }
  }
}

export default about

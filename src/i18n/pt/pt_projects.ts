import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projetos',
  source: 'GitHub',
  website: 'Site',
  main: [
    {
      name: 'Ecommerce',
      techstack: ['NodeJs (ts)', 'MongoDB', 'FireBase', 'Vuejs', 'TypeScript', 'Tailwind CSS'],
      image: 'providences.webp',
      description:
        'Desenvolvi uma aplicação de e-commerce completa, permitindo a compra de produtos com funcionalidades como autenticação de usuários, gerenciamento de carrinho e pagamentos com api do Mpesa. A aplicanção inclui dashboad do usuario para onde podem atualizar perfil, endereços, ver suas compras, etc. E dashboad para administradores onde podem ver produtos mais vistos, adicionar/remover produtos, gerir pedidos, etc.',
      src: '',
      url: 'https://providences.onrender.com/'
    },
    {
      name: 'Marketplace e gestão de eventos',
      techstack: ['Java 17 (spring-boot)', 'Postgress', 'FireBase', 'ReactJs (TypeScript)', 'Tailwind CSS'],
      image: 'evento.webp',
      description:
        'Projeto ainda em desenvolvimento, por isso não posso fazer descricao dele.',
      src: '',
      url: ''
    }
  ],
  // Você pode deixar este array vazio
  other: []
}

export default projects

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
      name: 'Levezza - Loja Florista (estático)',
      techstack: ['VueJs', 'Tailwind CSS'],
      image: 'levezza.webp',
      description:
        'Site estático de uma empresa de venda de flores e fornecimento de serviços de decoração de festas! ',
      src: 'https://github.com/juvenciofigo/levezza',
      url: 'https://levezza.vercel.app/'
    },
    {
      name: 'Gestao e Marketplace)',
      techstack: ['Java SpringBoot', 'ReactJs', 'Tailwind CSS'],
      image: 'evento.webp',
      description: 'App em desevolvimento '
    },
    {
      name: 'Clone do Spotify web (estático)',
      techstack: ['VueJs', 'Tailwind CSS'],
      image: 'spotify-clone.webp',
      description: 'Site estático de clone do spotify-web ',
      src: 'https://github.com/juvenciofigo/Spotify-clone',
      url: 'https://juvencio-spotify-clone.vercel.app/'
    }
  ],
  // Você pode deixar este array vazio
  other: []
}

export default projects

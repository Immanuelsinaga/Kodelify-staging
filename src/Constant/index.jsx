import { RiInboxUnarchiveFill } from "react-icons/ri";
import { TbWorldCode } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdThumbDownAlt } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";



// Image
import cpp from '../assets/img/cpp.png'
import struct from '../assets/img/struct.png'

export const Navbar = [
  {
    icon: <FaHome />,
    page:'Home',
    link: '/',
  },
  {
    icon: <IoBookSharp />,
    page:'Buku',
    link: '/books',
  },
  {
    icon: <CgCommunity />,
    page: 'Komunitas',
    link: '/comunnity',
  },
  {
    icon: <FaDiscord />,
    page: 'Discord',
    link: '',
  }
];

export const whatLearn = [
  {
    icon: <IoCodeSlash />,
    title: "Basic Programming C++",
    description: "mulai dari tutorial dasar-dasar pemrograman menggunakan C++",
    link: '',
  },
  {
    icon: <TbWorldCode />,
    title: "Pemprograman kompetitif dasar",
    description: "kamu akan belajar tentang materi-materi yang ada di competitive programming",
    link: '',
  },
  {
    icon: <RiInboxUnarchiveFill />,
    title: "Tutorial Lainnya",
    description: "Baca tutorial dalam kategori lainnya seperti Mobile programming, Web programming, IoT, Blockhain, dan masih banyak lagi.",
    link: '',
  }
];

export const newArticle = [
  {
    thumbnail: cpp,
    title:'Belajar C++ #13: Mengenal Tipe Data Union',
    shortDesc: 'Pada tutorial ini, kita akan belajar tentang tipe data union di C++. Mengapa kita butuh Union dan apa bedanya dengan Struct? Simak selengkapnya...',
    link:'',
  },
  {
    thumbnail: struct,
    title: 'Belajar C++ #12: Mengenal Tipe Data Struct',
    shortDesc: 'Pada tutorial ini, kita akan berkenalan dengan tipe data struct dan gimana cara menggunakan Struct di C++...',
    link: '',
  },
  
];

export const Rank = [
  {
    rank: 1,
    user: 'Immanuel',
    rating: 2506,
  },
  {
    rank: 2,
    user: 'Michiele',
    rating: 2404,
  },
  {
    rank: 3,
    user: 'Delyn',
    rating: 2304,
  },
  {
    rank: 4,
    user: 'Greesle',
    rating: 2204,
  },
  {
    rank: 5,
    user: 'Abilo',
    rating: 2104,
  }
];
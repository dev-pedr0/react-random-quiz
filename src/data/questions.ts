import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'Em média quantos litros de sangue uma pessoa adulta tem?',
        options:[
            'Entre 2 e 4 litros',
            'Entre 4 e 6 litros',
            '10 litros',
            '7 litros',
        ], 
        answer: 1
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        options:[
            'Platão',
            'Galileu Galilei',
            'Sócrates',
            'Descartes',
        ],
        answer: 3
    },
    {
        question: 'Qual o menor país do mundo?',
        options:[
            'Vaticano',
            'Nauru',
            'Mônaco',
            'Malta',
        ],
        answer: 0
    },
    {
        question: 'Qual o maior país do mundo?',
        options:[
            'China',
            'Canadá',
            'Rússia',
            'Índia',
        ],
        answer: 2
    },
    {
        question: 'Qual o livro mais vendido do mundo?',
        options:[
            'Dom Quixote',
            'Bíblia',
            'O Senhor dos Anéis',
            'O Pequeno Príncipe',
        ],
        answer: 1
    }
];
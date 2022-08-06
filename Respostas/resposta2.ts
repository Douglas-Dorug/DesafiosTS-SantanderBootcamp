
enum Job {
    Atriz,
    Padeiro
}

type People = {
    nome: string,
    idade: number,
    profissao: Job
}

let pessoa1: People = {
    nome: 'maria',
    idade: 29,
    profissao: Job.Atriz
};

let pessoa2: People = {
    nome: 'roberto',
    idade: 19,
    profissao: Job.Padeiro
};

let pessoa3: People = {
    nome: 'laura',
    idade: 32,
    profissao: Job.Atriz
};

let pessoa4: People = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro
}
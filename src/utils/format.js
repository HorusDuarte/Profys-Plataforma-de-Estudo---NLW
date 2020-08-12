const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química" , 
    ]
    
    const weekdays = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ]
       
    function getSubject(subjectNuber)
    {
        const position = +subjectNuber-1
        return subjects[position]
    }

    module.exports= {
        subjects,
        weekdays,
        getSubject

    }
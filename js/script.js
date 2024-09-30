const presentation = document.getElementById('main-apresentation');
const qualitiesForm = document.getElementById('qualities-form');
const imperfectionsForm = document.getElementById('imperfections-form');

function startQuiz(){
    transitionElements(presentation, qualitiesForm);
}

function goBackToApresentation(){
    transitionElements(qualitiesForm, presentation);
}

function goBackToQualities(){
    transitionElements(imperfectionsForm,qualitiesForm);
}

function goToImperfectionsForm(){
    transitionElements(qualitiesForm, imperfectionsForm);
}


function transitionElements(elementOut, elementIn){
    elementOut.style.opacity = 0;

    setTimeout(() => {
        elementOut.style.display = 'none';

        elementIn.style.display = 'flex';
        elementIn.style.opacity = 0; 

        setTimeout(() => {
            elementIn.style.opacity = 1;
        }, 10); 
    }, 500); 
}

// Characters
var scores = {
    joel: 0,
    ellie: 0,
    tess: 0,
    clicker: 0
};

function submitQualities(){

    const checkboxes = document.querySelectorAll('input[name="qualities"]:checked');
    
    checkboxes.forEach(checkbox => {

        switch (checkbox.value) {
            case "Corajoso":
                assignScoresToCharacters('joel', 'ellie', 'tess');
                break;
            case "Protetor":
                assignScoresToCharacters('joel', 'ellie', 'tess');
                break;
            case "Habilidoso(a)":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Sarcástico":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Resiliente":
                assignScoresToCharacters('ellie', 'joel', 'tess');
                break;
            case "Curioso(a)":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Independente":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Inteligente":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Leal":
                assignScoresToCharacters('joel', 'ellie', null);
                break;
            case "Forte":
                assignScoresToCharacters('joel', 'ellie', null);
                break;
            case "Empático":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            default:
                break;
        }
    });

    //console.log(scores.joel, scores.tess, scores.ellie, scores.clicker);
}

function submitImperfections(){
    const checkboxes = document.querySelectorAll('input[name="imperfections"]:checked');
    
    checkboxes.forEach(checkbox => {
        switch (checkbox.value) {
            case "Cínico":
                assignScoresToCharacters('joel', 'tess', 'ellie');
                break;
            case "Impaciente":
                assignScoresToCharacters('ellie', 'joel');
                break;
            case "Orgulhoso":
                assignScoresToCharacters('tess', 'joel', 'ellie');
                break;
            case "Desconfiado":
                assignScoresToCharacters('joel', 'ellie', 'tess');
                break;
            case "Controlador":
                assignScoresToCharacters('tess', 'joel');
                break;
            case "Teimoso":
                assignScoresToCharacters('ellie', 'joel');
                break;
            case "Frio":
                assignScoresToCharacters('clicker', 'tess', 'joel');
                break;
            case "Pessimista":
                assignScoresToCharacters('joel', 'tess', 'ellie');
                break;
            case "Raivoso":
                assignScoresToCharacters('clicker', 'joel');
                break;
            case "Ansioso":
                assignScoresToCharacters('ellie');
                break;
            case "Desesperado":
                assignScoresToCharacters('tess', 'ellie'); 
                break;
            case "Medroso(a)":
                assignScoresToCharacters('clicker', 'tess', 'joel');
                break;
            default:
                break;
        }
    });
}


function assignScoresToCharacters(character1, character2, character3){
    if (character1) scores[character1] += 5;
    if (character2) scores[character2] += 4;    
    if (character3) scores[character3] += 3;
}

function submitAndShowCharacter(){
    submitQualities();
    submitImperfections();

    console.log('Valores das pontuações:', scores);
    
    const scoreValues = Object.values(scores);
    const maxScore = Math.max(...scoreValues);
    
    console.log('Maior pontuação:', maxScore);
    
    const highestScoringCharacters = Object.keys(scores).filter(character => scores[character] === maxScore);
    console.log('Personagens com a maior pontuação:', highestScoringCharacters);
}

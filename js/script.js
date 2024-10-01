const presentation = document.getElementById('main-apresentation');
const qualitiesForm = document.getElementById('qualities-form');
const imperfectionsForm = document.getElementById('imperfections-form');
const characterResult = document.getElementById('character-result');

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
                assignScoresToCharacters('tess', 'joel', 'ellie');
                break;
            case "Habilidoso(a)":
                assignScoresToCharacters('ellie', 'joel', 'tess');
                break;
            case "Sarcástico":
                assignScoresToCharacters('ellie', 'joel', null);
                break;
            case "Resiliente":
                assignScoresToCharacters('ellie', 'joel', 'tess');
                break;
            case "Curioso(a)":
                assignScoresToCharacters('ellie', null, null);
                break;
            case "Independente":
                assignScoresToCharacters('tess', 'ellie', 'joel');
                break;
            case "Inteligente":
                assignScoresToCharacters('tess', 'ellie', 'joel');
                break;
            case "Leal":
                assignScoresToCharacters('joel', 'tess', 'ellie');
                break;
            case "Forte":
                assignScoresToCharacters('joel', 'ellie', 'tess');
                break;
            case "Empático":
                assignScoresToCharacters('ellie', 'tess', 'joel');
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
    displayResult();
}

function displayResult(){
    transitionElements(imperfectionsForm, characterResult);

    console.log('Valores das pontuações:', scores);
    
    const scoreValues = Object.values(scores);
    const maxScore = Math.max(...scoreValues);
    
    console.log('Maior pontuação:', maxScore);
    
    const highestScoringCharacters = Object.keys(scores).filter(character => scores[character] === maxScore);

    console.log('Personagens com a maior pontuação:', highestScoringCharacters);

    const resultName = document.getElementById('character-name');
    const characterDescription = document.getElementById('character-description');
    const resetBtn = document.getElementById('reset-form-btn');


    if (highestScoringCharacters.length > 0) {

        const characterImages = {
            joel: 'assets/images/joel-img.jpg',  
            ellie: 'assets/images/ellie-img.jpg',
            tess: 'assets/images/tess-img.jpg',  
            clicker: 'assets/images/clicker-img.jpg'
        };

        const characterDescriptions = {
            joel: "Joel é um homem marcado pela dor e pela perda. Sua vida foi devastada por tragédias pessoais, e ele se tornou um sobrevivente endurecido em um mundo cruel. Com uma força física impressionante, ele não é apenas um lutador; é alguém que carrega o peso do seu passado e a responsabilidade de proteger aqueles que ama. Joel é uma figura complexa, que luta para equilibrar a dureza da sobrevivência com os fragmentos de esperança que ainda restam em seu coração.",

            ellie: "Ellie é uma jovem cujo espírito indomável brilha mesmo nas circunstâncias mais sombrias. Com uma inteligência aguçada e uma coragem admirável, ela se recusa a ser definida pelas dificuldades ao seu redor. Seu senso de humor sarcástico serve como uma armadura, mas por trás das piadas, existe uma profunda vulnerabilidade. Ellie representa a esperança em um mundo devastado, mostrando que mesmo em meio ao caos, a conexão humana e a empatia são fundamentais para a sobrevivência.",

            tess: "Tess é a encarnação da força e da determinação. Uma mulher que sabe o que significa lutar todos os dias, ela é leal e corajosa, enfrentando os desafios do mundo com uma garra impressionante. Sua relação com Joel é baseada em confiança mútua e uma compreensão profunda do que significa sobreviver. Tess é uma personagem que mostra que, mesmo em tempos sombrios, a solidariedade e o apoio entre os seres humanos podem oferecer uma luz na escuridão.",

            clicker: "Clickers são o pesadelo personificado. Transformados pela infecção, eles são criaturas que perderam sua humanidade, tornando-se símbolos do que o mundo se tornou. Sem a capacidade de ver, mas com uma determinação brutal para atacar, eles representam os medos mais profundos da perda de controle e da transformação em algo que não se reconhece mais. Os Clickers são um lembrete constante de que o verdadeiro terror pode vir não apenas de ameaças externas, mas também da perda de nossa essência humana."
        };

        const characterToDisplay = highestScoringCharacters[0];

        document.body.style.backgroundImage = `url("${characterImages[characterToDisplay]}")`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';

        resultName.textContent = characterToDisplay.charAt(0).toUpperCase() + characterToDisplay.slice(1);

        characterDescription.textContent = characterDescriptions[characterToDisplay];
       
        resetBtn.style.display = 'flex';
    }
}



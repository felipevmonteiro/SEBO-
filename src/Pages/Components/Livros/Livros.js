import React from "react";
import "./Livros.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const livros = [
    {
        nome: "Livro: O Auto da Compadecida",
        autor: "Ariano Suassuna",
		categoria: "Clássicos da Literatura Brasileira",
        descricao: "O Auto da Compadecida consegue o equilíbrio perfeito entre a tradição popular e a elaboração literária ao recriar para o teatro episódios registrados na tradição popular do cordel. É uma peça teatral em forma de Auto em 3 atos, escrita em 1955 pelo autor paraibano Ariano Suassuna. Sendo um drama do Nordeste brasileiro, mescla elementos como a tradição da literatura de cordel, a comédia, traços do barroco católico brasileiro e, ainda, cultura popular e tradições religiosas.",
        pathName: "/images/livros/auto-da-compadecida.jpg",
    },
    {
        nome: "Livro: A Revolução dos Bichos",
        autor: "George Orwell",
        categoria: "Ficção",
        descricao: "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.",
        pathName: "/images/livros/revolucao-dos-bichos.jpg",
    },
    {
        nome: "Livro: Lolita",
        autor: "Vladimir Nabokov",
		categoria: "Clássicos da Literatura Mundial",
        descricao: "Polêmico, irônico e tocante, este romance narra o amor obsessivo de Humbert Humbert, um cínico intelectual de meia-idade, por Dolores Haze, Lolita, 12 anos, uma ninfeta que inflama suas loucuras e seus desejos mais agudos. Através da voz de Humbert Humbert, o leitor nunca sabe ao certo quem é a caça, quem é o caçador. A obra-prima de Nabokov, agora em nova tradução, não é apenas uma assombrosa história de paixão e ruína. É também uma viagem de redescoberta pela América; é a exploração da linguagem e de seus matizes; é uma mostra da arte narrativa em seu auge. Na literatura contemporânea, não existe romance como Lolita.",
        pathName: "/images/livros/lolita.jpg",
    },
	{
        nome: "Livro: A Casa das Belas Adormecidas",
        autor: "Yasunari Kawabata",
		categoria: "Literatura Oriental",
        descricao: "Imbuída de um erotismo inusitado, esta obra, escrita em 1961, demonstra a maturidade estilística do autor, que se utiliza de sua virtuose descritiva para contar a história de Eguchi, um senhor de 67 anos que frequenta a casa das belas adormecidas, uma espécie de bordel onde moças encontram-se em sono profundo, sob efeito de narcóticos.",
        pathName: "/images/livros/a-casa-das-belas-adormecidas.jpg",
    },
    {
        nome: "Livro: Vidas Secas",
        autor: "Graciliano Ramos",
		categoria: "Clássicos da Literatura Brasileira",
        descricao: "Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos, que não têm nome, sendo chamados apenas de “filho mais velho” e “filho mais novo”. São também acompanhados pela cachorrinha da família, Baleia, cujo nome é irônico, pois a falta de comida a fez muito magra.",
        pathName: "/images/livros/vidas-secas.jpg",
    },
	{
        nome: "Livro: Pequeno Manual Antirracista",
        autor: "Djamila Ribeiro",
        categoria: "Clássicos da Literatura Brasileira",
        descricao: "Neste pequeno manual, a filósofa e ativista Djamila Ribeiro trata de temas como atualidade do racismo, negritude, branquitude, violência racial, cultura, desejos e afetos. Em onze capítulos curtos e contundentes, a autora apresenta caminhos de reflexão para aqueles que queiram aprofundar sua percepção sobre discriminações racistas estruturais e assumir a responsabilidade pela transformação do estado das coisas.",
        pathName: "/images/livros/pequeno-manual-antirracista.jpg",
    },
    {
        nome: "Livro: A Vida Não é Útil",
        autor: "Ailton Krenak",
        categoria: "Biografia",
        descricao: "Se, em meio à terrível pandemia de covid-19, sentimos que perdemos o chão sob nossos pés, as palavras de Krenak despontam como os “paraquedas coloridos” descritos em seu livro Ideias para adiar o fim do mundo, que já vendeu mais de 50 mil cópias no Brasil e está sendo traduzido para o inglês, francês, espanhol, italiano e alemão. A vida não é útil reúne cinco textos adaptados de palestras, entrevistas e lives realizadas entre novembro de 2017 e junho de 2020.",
        pathName: "/images/livros/a-vida-nao-e-util.jpg",
    },
    {
        nome: "Livro: Vigadores - Guerra dos Reinos",
        autor: "Aaron McGuiness",
        categoria: "Ficção",
        descricao: "Veja os maiores heróis de Washington em ação quando a Guerra dos Reinos chega à capital dos Estados Unidos. Quem precisa dos Vingadores quando se tem o Esquadrão Supremo da América? Mas quem são esses misteriosos novos heróis, e de onde saíram? Apenas o Agente Culson sabe. E mais: confira dois contos inéditos de Namor e do Capitão América! (Avengers 18 e Marvel Comics Presents 1)",
        pathName: "/images/livros/vingadores-guerra-dos-reinos.jpg",
    },
    {
        nome: "Livro: A Ilha Perdida",
        autor: "Maria José Dupré",
        categoria: "Infantil",
        descricao: "Eduardo e Henrique resolvem explorar uma misteriosa ilha e descobrir se as histórias que ouvem sobre o lugar são reais. Acabam se envolvendo em uma grande aventura em que um velho sábio ensina o respeito e o amor à natureza. Um clássico da literatura juvenil brasileira, agora com novo formato e ilustrações coloridas. Com Suplemento de Atividades em cores.",
        pathName: "/images/livros/a-ilha-perdida.jpg",
    },
	{
        nome: "Livro: Os Últimos Melhores Dias",
        autor: "Gilberto Dimenstein",
        categoria: "Biografia",
        descricao: "Gilberto Dimenstein escolheu ser tema de sua última reportagem. É assim que descreve Os últimos melhores dias da minha vida: um relato autobiográfico sobre como enfrentou um grave câncer, narrando o processo a partir do olhar apurado dos mais de trinta anos de carreira no jornalismo. Anna Penido, no papel de ombudsman e parceira, esteve ao seu lado para produzir a obra a quatro mãos quando Gilberto já não tinha forças para fazer o trabalho sozinho.",
        pathName: "/images/livros/os-ultimos-melhores-dias-da-minha-vida.jpg",
    },
    {
        nome: "Livro: Hai Kai",
        autor: "Elza Tacko Doi",
        categoria: "Literatura Oriental",
        descricao: "Publicado em 1990, este livro constituiu a primeira exposição sistemática da poética do haikai em língua portuguesa, bem como a primeira publicação bilíngue de um conjunto significativo de poemas. Tornou-se assim, como o demonstram as inúmeras referências e as três seguidas edições, um clássico no estudo e na divulgação da poesia japonesa no Brasil. Passado quase um quarto de século, como ainda houvesse demanda de novas tiragens, surge esta nova edição, que mantém as partes centrais do livro e acrescenta, a título de atualização, dois ensaios diretamente decorrentes das pesquisas que conduziram à redação deste volume, dedicados à história do haikai no Brasil.",
        pathName: "/images/livros/hai-kai.jpg",
    },
	{
		nome: "Livro: O Cortiço",
        autor: "Aluísio Azevedo",
        categoria: "Clássicos da Literatura Brasileira",
		descricao: "Ambição e exploração se misturam nessa envolvente e sombria história de uma habitação coletiva da capital do Segundo império. De um lado, a burguesia gananciosa e interesseira, disposta a tudo para enriquecer e subir na vida. De outro, personagens estereotipados, cheios de vícios e patologias, comparados a animais e movidos pelo instinto e pela fome. Todas as existências entrelaçadas e cruzadas em torno do cortiço de São Romão.",
		pathName: "/images/livros/o-cortico.jpg",
	},
	{
		nome: "Livro: O Diário de Anne Frank",
        autor: "Anne Frank",
        categoria: "Biografia",
		descricao: "O retrato da menina por trás do mito. A única edição autorizada pelo Anne Frank Fonds.O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto.Lançado em 1947, O diário de Anne Frank tornou-se um dos livros mais lidos do mundo. ",
		pathName: "/images/livros/o-diario-de-anne-frank.jpg",
	},
	{
		nome: "Livro: Shinsetsu: O poder da gentileza",
        autor: "Clóvis Barros de Filho",
        categoria: "Literatura Oriental",
		descricao: "O que dizer de um livro que interpreta a sabedoria e a cultura japonesa pensando na alma ocidental? Que mistura filósofos como Sócrates, Kant e Rousseau; poetas como Hesíodo, Rilke e Oscar Wilde; escritores como Eça de Queiroz, Montaigne e Clarice Lispector e personagens como a Tieta de Jorge Amado? Que parte do conhecimento do mundo e de suas próprias experiências para falar de assuntos como gentileza e moral; humildade e amor; empatia e fraternidade; limites e consideração?",
		pathName: "/images/livros/o-poder-da-gentileza.jpg",
	},
	{
		nome: "Livro: Respostas de um astrofísico",
        autor: "Neil deGrasse Tyson",
        categoria: "Clássicos da Literatura Mundial",
		descricao: "Além de uma carta escrita por Neil deGrasse Tyson especificamente para a edição brasileira de Respostas de um astrofísico, este livro inspirador reúne em um só volume perguntas feitas ao autor sobre assuntos importantíssimos e que despertam a curiosidade de todas as pessoas: a origem do universo, o fim do mundo, vida, morte, vida após a morte, astronomia, alienígenas, teorias da conspiração, terrorismo, racismo, religião, fé, filosofia, cultura, educação, política, ciências, pseudociências e muito mais.",
		pathName: "/images/livros/respostas-de-um-astrofisico.jpg",
	},
	{
		nome: "Livro: Poesia Completa",
        autor: "João Cabral de Melo Neto",
        categoria: "Clássicos da Literatura Brasileira",
		descricao: "Um dos maiores poetas de língua portuguesa do século XX, João Cabral de Melo Neto ficou conhecido pelo estilo conciso, rigor formal e apurada crítica social ― numa comparação feita por ele mesmo, o poeta seria como um escultor, que incessantemente corta a pedra até que a escultura surja de dentro dela.",
		pathName: "/images/livros/poesia-completa.jpg",
	},
	{
		nome: "Livro: Minha História",
        autor: "Michelle Obama",
        categoria: "Biografia",
		descricao: "Com uma vida repleta de realizações significativas, Michelle Obama se consolidou como uma das mulheres mais icônicas e cativantes de nosso tempo. Como primeira-dama dos Estados Unidos — a primeira afro-americana a ocupar essa posição —, ela ajudou a criar a mais acolhedora e inclusiva Casa Branca da história. Ao mesmo tempo, se posicionou como uma poderosa porta-voz das mulheres e meninas nos Estados Unidos e ao redor do mundo, mudando drasticamente a forma como as famílias levam suas vidas em busca de um modelo mais saudável e ativo, e se posicionando ao lado de seu marido durante os anos em que Obama presidiu os Estados Unidos.",
		pathName: "/images/livros/minha-historia.jpg",
	},
	{
		nome: "Livro: Em louvor da sombra",
        autor: "Junichiro Tanizaki",
        categoria: "Literatura Oriental",
		descricao: "Neste breve ensaio sobre estética escrito em 1933, Junichiro Tanizaki analisa a arquitetura, o teatro, a comida, o vestuário, o papel e até o tom de pele para refletir sobre um elemento central da cultura japonesa: o contraste entre a penumbra e a claridade. Se os ocidentais têm por hábito polir a prata para que ela tenha um aspecto sempre brilhante e renovado, a tradição nipônica valoriza justamente o contrário. A gordura das mãos e a ferrugem acumuladas sobre os objetos mostram a passagem do tempo e representam, portanto, as histórias ali contidas.",
		pathName: "/images/livros/em-louvor-da-sombra.jpg",
	},
	{
		nome: "Livro: 1984",
        autor: "George Orwell",
        categoria: "Ficção",
		descricao: "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.",
		pathName: "/images/livros/1984.jpg",
	},
	{
		nome: "Livro: Bilionários por acaso",
        autor: "Bem Mezrich",
        categoria: "Biografia",
		descricao: "Ben Mezrich revela os detalhes picantes dos bastidores dessa verdadeira saga, em uma narrativa movida a altas doses de paranoia, sexo, bebida, talento, alguma droga e muita ambição, entre investidores poderosos, mulheres maravilhosas, a busca do estrelato social e muitas, mas muitas intrigas. Criado para unir as pessoas, a história do Facebook é de desavenças e separação.",
		pathName: "/images/livros/bilionarios-por-acaso.jpg",
	},
];

function Livros(){
    const history = useHistory();
    
    function handleClick(livro){
        history.push({
            position: window.scrollTo(0, 0),
            pathname: '/resumo',
            state: { livro },
        });
    }

    return (
        <>
            {livros.map((listItem) => {
                return(
                    <div className="livro">
                        <div className="hover03">
                            <img className="img-format" src={listItem.pathName}/>
                        </div>

                        <div className="titulo-livro">
                            {listItem.nome}
                        </div>

                        <div className="autor-livro">
                            {listItem.autor}
                        </div>

                        <div className="ver-livro">
                            <Button  className="botao format" variant="light" onClick = {
                            () => handleClick(listItem)}>
                                Ver Livro
                            </Button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Livros;

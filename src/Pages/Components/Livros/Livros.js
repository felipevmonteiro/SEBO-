import React from "react";
import "./Livros.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const livros = [
    {
        nome: "Livro: O Auto da Compadecida",
        autor: "Ariano Suassuna",
        descricao: "O Auto da Compadecida consegue o equilíbrio perfeito entre a tradição popular e a elaboração literária ao recriar para o teatro episódios registrados na tradição popular do cordel. É uma peça teatral em forma de Auto em 3 atos, escrita em 1955 pelo autor paraibano Ariano Suassuna. Sendo um drama do Nordeste brasileiro, mescla elementos como a tradição da literatura de cordel, a comédia, traços do barroco católico brasileiro e, ainda, cultura popular e tradições religiosas.",
        pathName: "/images/livros/promocao/auto-da-compadecida.jpg",
    },
    {
        nome: "Livro: A Revolução dos Bichos",
        autor: "George Orwell",
        descricao: "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.",
        pathName: "/images/livros/promocao/revolucao-dos-bichos.jpg",
    },
    {
        nome: "Livro: Lolita",
        autor: "Vladimir Nabokov",
        descricao: "Polêmico, irônico e tocante, este romance narra o amor obsessivo de Humbert Humbert, um cínico intelectual de meia-idade, por Dolores Haze, Lolita, 12 anos, uma ninfeta que inflama suas loucuras e seus desejos mais agudos. Através da voz de Humbert Humbert, o leitor nunca sabe ao certo quem é a caça, quem é o caçador. A obra-prima de Nabokov, agora em nova tradução, não é apenas uma assombrosa história de paixão e ruína. É também uma viagem de redescoberta pela América; é a exploração da linguagem e de seus matizes; é uma mostra da arte narrativa em seu auge. Na literatura contemporânea, não existe romance como Lolita.",
        pathName: "/images/livros/promocao/lolita.jpg",
    },
    {
        nome: "Livro: Vidas Secas",
        autor: "Graciliano Ramos",
        descricao: "Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos, que não têm nome, sendo chamados apenas de “filho mais velho” e “filho mais novo”. São também acompanhados pela cachorrinha da família, Baleia, cujo nome é irônico, pois a falta de comida a fez muito magra.",
        pathName: "/images/livros/promocao/vidas-secas.jpg",
    },
    {
        nome: "Livro: A Vida Não é Útil",
        autor: "Ailton Krenak",
        descricao: "Se, em meio à terrível pandemia de covid-19, sentimos que perdemos o chão sob nossos pés, as palavras de Krenak despontam como os “paraquedas coloridos” descritos em seu livro Ideias para adiar o fim do mundo, que já vendeu mais de 50 mil cópias no Brasil e está sendo traduzido para o inglês, francês, espanhol, italiano e alemão. A vida não é útil reúne cinco textos adaptados de palestras, entrevistas e lives realizadas entre novembro de 2017 e junho de 2020.",
        pathName: "/images/livros/promocao/a-vida-nao-e-util.jpg",
    },
    {
        nome: "Livro: Vigadores - Guerra dos Reinos",
        autor: "Aaron McGuiness",
        descricao: "Veja os maiores heróis de Washington em ação quando a Guerra dos Reinos chega à capital dos Estados Unidos. Quem precisa dos Vingadores quando se tem o Esquadrão Supremo da América? Mas quem são esses misteriosos novos heróis, e de onde saíram? Apenas o Agente Culson sabe. E mais: confira dois contos inéditos de Namor e do Capitão América! (Avengers 18 e Marvel Comics Presents 1)",
        pathName: "/images/livros/promocao/vingadores-guerra-dos-reinos.jpg",
    },
    {
        nome: "O Menino Maluquinho",
        autor: "Ziraldo",
        descricao: "Um menininho traquinas, diziam. Tinha macaquinhos no sótão, deitava e rolava, fazendo confusão. Um anjinho, um saci? Alegria da casa, liderava a garotada. Namorador, fazia versinhos, compunha canções, inventava brincadeiras. Era sabido, um amigão. “Menino Maluquinho”, diziam sorrindo as pessoas. Não era, não! Só mais tarde descobriram que tinha sido um garotinho muito amado e, por isso mesmo, muito feliz.",
        pathName: "/images/livros/o-menino-maluquinho.png",
    },
    {
        nome: "Hai Kai",
        autor: "Elza Tacko Doi",
        descricao: "Publicado em 1990, este livro constituiu a primeira exposição sistemática da poética do haikai em língua portuguesa, bem como a primeira publicação bilíngue de um conjunto significativo de poemas. Tornou-se assim, como o demonstram as inúmeras referências e as três seguidas edições, um clássico no estudo e na divulgação da poesia japonesa no Brasil. Passado quase um quarto de século, como ainda houvesse demanda de novas tiragens, surge esta nova edição, que mantém as partes centrais do livro e acrescenta, a título de atualização, dois ensaios diretamente decorrentes das pesquisas que conduziram à redação deste volume, dedicados à história do haikai no Brasil.",
        pathName: "/images/livros/hai-kai.jpg",
    }
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
                        <div>
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

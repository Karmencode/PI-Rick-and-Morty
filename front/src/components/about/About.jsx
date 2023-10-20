import style from './About.module.css';

function About() {
    return (
        <div >
            <div className={style.contenedorA}>

                <h1>About Rick and Morty</h1>

                <p>Rick Sánchez es la definición exacta de "científico loco". Es alcohólico, es un genio, es irresponsable y está loco. Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick.

                    Así, Rick y Morty comienzan a vivir aventuras intergalácticas a pesar de que la familia no quiere que lo sigan haciendo. Poco a poco tienen que intentar encontrar un equilibrio entre su vida familiar y sus viajes a través del espacio y por distintas realidades paralelas, algo que no es fácil para el pequeño Morty que es incapaz de tener una vida normal al margen de su abuelo.</p>

                <p>
                    Rick y Morty es una animación de ciencia ficción para adultos creada, producida y escrita por Justin Roiland (Hora de aventuras) y Dan Harmon (Community, Monster House) para Adult Swim. Justin Roiland's Solo Vanity Card Productions, Harmonious Claptrap y Williams Street son las empresas productoras junto a Starburns Industries (del año 2013 al 2014) y Rick and Morty, LLC. (de 2015 hasta el presente).
                </p>
            </div>

            <div className={style.contenedorB}>
                <h1>About me</h1>
                <p>My name is María del Carmen Mendez Aguirre. </p>
                <p>I'm 23 years old.</p>
                <p>I'm from México.</p>
                <p>My Github is KarmenCode</p>
            </div>

        </div>
    )
}

export default About;
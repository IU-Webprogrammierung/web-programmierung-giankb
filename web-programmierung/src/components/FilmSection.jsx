import "./FilmSection.css"
export default function FilmSection({film}){
    return (
        <section className="film-section">
            {film.position ? (
                <>
                    <img src={film.imgUrl} alt={film.alt} className="film-poster" height="" width=""/>
                    <div className="film-description">
                        <h2>{film.title}</h2>
                        <p className="film-description-p">{film.description}</p>
                        {film.link? (
                            <>
                                <a className="link" href={film.link} target="blank"
                                   rel="noopener noreferrer">Details <small>(starwars.com)</small>
                                </a>
                            </>
                        ) : (<></>)
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className="film-description">
                        <h2>{film.title}</h2>
                        <p className="film-description-p">{film.description}</p>
                        {film.link? (
                            <>
                                <a className="link" href={film.link} target="blank"
                                   rel="noopener noreferrer">Details <small>(starwars.com)</small>
                                </a>
                            </>
                        ) : (<></>)
                        }
                    </div>
                    <img src={film.imgUrl} alt={film.alt} className="film-poster" height="" width=""/>
                </>
            )}
        </section>
    )
}
import "./CuriositySection.css"
export default function CuriositySection({curiosity}){
    return (
        <>
            {curiosity.position? (
                <section className="curiosity-section-left">
                    <img src={curiosity.imgUrl} alt={curiosity.alt} className="curiosity-image-left" width="" height=""/>
                    <div className="text-left">
                        <h3>{curiosity.title}</h3>
                        <p>{curiosity.description}</p>
                    </div>
                </section>
            ) : (
                <section className="curiosity-section-right">
                    <img src={curiosity.imgUrl} alt={curiosity.alt} className="curiosity-image-right"  width="" height=""/>
                    <div className="text-right">
                        <h3>{curiosity.title}</h3>
                        <p>{curiosity.description}</p>
                    </div>
                </section>
            )}
        </>
    )
}
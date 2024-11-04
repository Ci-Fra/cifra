import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react"
import { useEffect, useState } from "react"
import * as API from "../API.js"

function Contatti() {
    const [contattaci, setContattaci] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        API.getHome().then((response) => {
            console.log(response)
            setContattaci({
                titoloContattaci: response.fields.titoloContattaci,
                sottotitoloContattaci: response.fields.sottotitoloContattaci,
                cardsPerContattaci: response.fields.cardsPerContattaci,
            })
        })
        .then(() => setLoading(false))
    },[])
    const contatti = contattaci
    const icon = [Phone, Mail, MapPin, MessageCircle]
    return (
        <>
            {
                loading ? <div className="bg-background text-foreground"></div> :
                    <section className="container mx-auto px-4 text-left my-8" id="contatti" name="contatti">
                        <h2 className="mb-8 text-3xl font-bold text-center">{contatti.titoloContattaci}</h2>
                        <p className="mb-10 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                            {contatti.sottotitoloContattaci}
                        </p>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                            {contatti.cardsPerContattaci.card.map((card, index) => {
                                const IconComponent = icon[index]
                                return (
                                    <Card key={index} className="shadow-lg ">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-xl">
                                                <IconComponent className="h-6 w-6 text-primary" />
                                                {card.title}
                                            </CardTitle>
                                            <CardDescription>{card.sottotitolo}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul>
                                                <li className="list-none list-inside flex align-middle justify-start gap-2">
                                                    {index === 3 ? <a href="https://www.instagram.com/associazionefrancescacaparelli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-3 w-3 md:h-4 md:w-4 mt-1" /> </a> : <IconComponent className="h-3 w-3 md:h-4 md:w-4" />}
                                                    {index === 1 ? <p className="font-normal text-xs lg:text-sm">{card.primaScrittaEvidenziata}</p> : <p className="font-normal text-sm md:text-base">{card.primaScrittaEvidenziata}</p>}
                                                </li>
                                                <li className="list-none list-inside flex align-middle justify-start gap-2">
                                                    {index === 3 ? <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> <Facebook className="h-3 w-3 md:h-4 md:w-4" /> </a> : <IconComponent className="h-3 w-3 md:h-4 md:w-4" />}
                                                    {index === 1 ? <p className="font-normal text-xs lg:text-sm">{card.secondaScrittaEvidenizata}</p> : <p className="font-normal text-sm md:text-base">{card.secondaScrittaEvidenizata}</p>}
                                                </li>
                                            </ul>
                                            <p className="text-sm text-muted-foreground">{card.ultimaScritta}</p>
                                        </CardContent>
                                    </Card>)

                            })}
                        </div>
                    </section>
            }
        </>

    )
}
export { Contatti }
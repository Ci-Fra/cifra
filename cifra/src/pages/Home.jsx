/* eslint-disable react/prop-types */
import { Logo } from "../components/Logo.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Phone, Mail, MapPin, MessageCircle, CreditCard, Wallet, DollarSign, PiggyBank, Instagram, Facebook } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Aos from "aos"
import qrcode from "../assets/qrcode.png"
import "aos/dist/aos.css"
import * as API from "../API.js"
import "../css/Home.css"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Markdown from 'marked-react'
import { HomeSkeleton } from "./HomeSkeleton.jsx"
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"




function FirstImage(props) {
    // console.log(props)
    return (
        <>
            <div className="w-full max-w-screen-xl m-auto xl:pt-2" >
                <div className="md:relative">
                    {/* Phrases section */}
                    <div className="m-auto md:absolute  md:top-0 md:left-0 md:w-1/2 md:h-full bg-background md:bg-black/50 md:backdrop-blur-sm z-10 xl:rounded-l-2xl ">
                        <div className="h-full flex flex-col items-center justify-center text-foreground md:text-primary-foreground p-2 md:p-4">
                            <h1 className="text-3xl font-extrabold text-center md:text-5xl lg:text-6xl pt-2">
                                {props.firstSection.title1}
                            </h1>
                            <p className="text-lg text-center pt-3 sm:text-xl md:text-2xl lg:text-3xl">
                                {props.firstSection.title2}
                            </p>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="aspect-video">
                        <img
                            src={props.firstSection.imageUrl}
                            alt={props.firstSection.imageAlt}
                            className="w-full h-full object-cover xl:rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

function Section2(props) {

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{props.secondSection.title}</h2>
            <div className="space-y-8">
                <div className="bg-pContainer text-pForeground p-6 rounded-xl shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="flex flex-col md:flex-row md:align-middle lg:flex-col gap-6 lg:order-first lg:w-1/3 lg:items-center">
                            <div className="aspect-video lg:aspect-square lg:w-[340px] lg:h-[340px]">
                                <img
                                    src={props.secondSection.immagineSezione2}
                                    alt={props.secondSection.immagineSezione2Alt}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center md:text-left lg:text-center md:mx-auto md:self-center lg:self-auto">
                                <p className="font-semibold">{props.secondSection.informazioniDiContorno1}</p>
                                <p className="text-sm">{props.secondSection.informazioniDiContorno2}</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 text-left ">
                            <h3 className="text-2xl font-semibold mb-3">{props.secondSection.titoloCosaFacciamo}</h3>
                            <Markdown value={props.secondSection.paragrafoSezione1} gfm="true" breaks="true"></Markdown>
                            {/* <a href="#" className="text-primary-foreground underline hover:text-accent-foreground">Learn more about John</a> */}
                        </div>
                    </div>
                </div>
                <div className="bg-sContainer text-sForeground p-6 rounded-xl shadow-xl ">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        <div className="flex flex-col md:flex-row md:align-middle lg:flex-col gap-6 lg:order-last lg:w-1/3 lg:items-center">
                            <div className="aspect-video lg:aspect-square lg:w-[340px] lg:h-[340px]">
                                <img
                                    src={props.secondSection.fotoFrancesca}
                                    alt={props.secondSection.fotoFrancescaAlt}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center md:text-left lg:text-center md:mx-auto md:self-center lg:self-auto">
                                <p className="font-semibold">{props.secondSection.informazioneDiContornoFrancesca1}</p>
                                <p className="text-sm">{props.secondSection.informazioneDiContornoFrancesca2}</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 text-left mx-auto">
                            <h3 className="text-2xl font-semibold mb-3">{props.secondSection.titoloChiEraFrancesca}</h3>
                            {/* <p className="mb-4">{props.secondSection.paragrafoChiEraFrancesca}</p> */}
                            <Markdown value={props.secondSection.paragrafoChiEraFrancesca} gfm="true" breaks="true"></Markdown>
                            {/* <a href="#" className="text-secondary-foreground underline hover:text-accent-foreground">Learn more about Jane</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ChiSiamoCerchio(props) {
    const avatars = props.avatars
    const team = props.team

    const [openPopover, setOpenPopover] = useState(null)
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Ecco chi siamo</h2>
            <div className="min-h-fit flex items-center justify-center bg-background">
                <div className="relative w-[calc(100vw-2rem)] h-[calc(100vw-2rem)] max-w-[600px] max-h-[600px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full md:hidden" data-aos="zoom-in">
                            <Logo width={100} />
                        </div>
                        <div className="w-40 h-40 hidden md:flex items-center justify-center rounded-full" data-aos="zoom-in">
                            <Logo width={200} />
                        </div>
                    </div>

                    {/* Avatars in a circle */}
                    {avatars.map((avatar, index) => {
                        const angle = (index / avatars.length) * 2 * Math.PI - Math.PI / 2
                        const x = 50 + 45 * Math.cos(angle)
                        const y = 50 + 45 * Math.sin(angle)

                        return (
                            <TooltipProvider key={avatar.name} delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild >
                                        <div
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                            }}
                                        >
                                            <Popover open={openPopover === index} onOpenChange={(open) => setOpenPopover(open ? index : null)}>
                                                <PopoverTrigger asChild>
                                                    <Avatar className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 border-2 border-primary cursor-pointer">
                                                        <AvatarImage src={avatar.image} alt={avatar.name} loading="lazy" />
                                                        <AvatarFallback>{avatar.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                    </Avatar>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-48 p-2 lg:hidden bg-background" side="top">
                                                    <p className="font-semibold pb-1">{avatar.name}</p>
                                                    <p className="text-sm text-muted-foreground pb-1">{avatar.info}</p>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="hidden lg:block bg-background">
                                        <p className="font-semibold pb-1">{avatar.name}</p>
                                        <p className="text-sm text-muted-foreground pb-1">{avatar.info}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })}
                </div>
            </div>
            <div className="mt-12 text-center ">
                <h2 className="text-lg font-semibold mb-4">{team.titoloParliamoDiNoi}</h2>
                <div className="text-justify md:mx-auto mx-4">
                    <Markdown value={team.paragrafoParliamoDelTeam} gfm="true" breaks="true"></Markdown>
                </div>
                {/* <p className="max-w-2xl mx-auto">
                    {team.paragrafoParliamoDiNoi}
                </p> */}
            </div>
        </div>
    )
}
function CarouselNews(props) {

    const nav = useNavigate()

    const articles = props.carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 2 }
        }
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    useEffect(() => {
        if (emblaApi) {
            const autoplay = setInterval(() => {
                emblaApi.scrollNext()
            }, 10000)

            return () => clearInterval(autoplay)
        }
    }, [emblaApi])

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{props.title}</h2>
            <div className="mx-auto relative max-w-72 sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex my-8">
                        {articles.map((article, index) => (
                            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2 ">
                                <Card className="h-full transition-all duration-300 ease-in-out transform hover:scale-105 max-w-[250px] mx-auto hover:cursor-pointer bg-background text-foreground"
                                    onClick={() => nav(`/articles/${article.slug}`, {preventScrollReset: {key:true}})} >
                                    <img src={article.miniatura} alt={article.titolo} className="w-full h-40 object-cover rounded-t-lg" />
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold mb-2 text-sm">{article.titolo}</h3>
                                        <div className="text-xs text-muted-foreground line-clamp-3 pb-0">
                                            <Markdown value={article.descrizione} gfm="true" breaks="true"></Markdown>
                                        </div>
                                    </CardContent>
                                    <CardHeader className="flex flex-row items-center gap-4 p-4 pt-0">
                                        <Avatar>
                                            <AvatarImage src={article.autore.fields.immagineFaccia.fields.file.url} alt={article.autore.fields.nome} />
                                            <AvatarFallback>{article.autore.fields.nome[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-xs font-medium">{article.autore.fields.nome}</CardTitle>
                                            <p className="text-xs text-muted-foreground pb-0">{dayjs(article.data).format("DD-MM-YYYY")}</p>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex justify-left  ml-4 lg:ml-20 gap-4 w-1/2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            className="transition-opacity duration-300 border-2 bg-background border-primary"
                            style={{ opacity: prevBtnEnabled ? 1 : 0.5 }}
                        >
                            <ChevronLeft className="h-4 w-4 text-primary lg:h-5 lg:w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            className="transition-opacity duration-300 border-2 bg-background border-primary"
                            style={{ opacity: nextBtnEnabled ? 1 : 0.5 }}
                        >
                            <ChevronRight className="h-4 w-4 text-primary lg:h-5 lg:w-5" />
                        </Button>
                    </div>
                    <div className="flex justify-end mt-4 w-1/2 mr-4 lg:mr-20">
                        {scrollSnaps.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className={`w-3 h-3 rounded-full mx-1 p-0 justify-end ${index === selectedIndex ? 'bg-border' : 'bg-gray-300'
                                    }`}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
function Contatti(props) {
    const contatti = props.contattaci
    const icon = [Phone, Mail, MapPin, MessageCircle]
    return (
        <section className="container mx-auto px-4 text-left" id="contatti" name="contatti">
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
    )
}
function Pagamenti(props) {
    const pagamenti = props.pagamenti
    return (
        <section className="container m-auto px-4 text-left">
            <h2 className="mb-8 text-3xl font-bold text-center">{pagamenti.titoloPagamenti
            }   </h2>

            <p className="mb-10 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                {pagamenti.sottotitoloPagamenti}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <PiggyBank className="h-6 w-6 text-primary " />
                            {pagamenti.cardPagamenti.saty.title}
                        </CardTitle>
                        <CardDescription>{pagamenti.cardPagamenti.saty.sottotitolo}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <img
                            src={qrcode}
                            alt="QR Code for Payment"
                            className="w-[200px] h-[200px] mx-auto"
                        />
                        <p className="text-center text-sm text-muted-foreground">
                            {pagamenti.cardPagamenti.saty.scritta}
                        </p>
                        <Button className="w-full bg-primary hover:bg-[#14a2c6] transition-colors text-primary-foreground rounded-3xl font-bold leading-5 h-10" onClick={() => window.location.href = 'https://www.satispay.com/download/qrcode/S6Y-SHP--2BA79B56-5FAD-445C-B2FE-3FAB51BF8CC8'} target="_blank">
                            {pagamenti.cardPagamenti.saty.bottone}
                        </Button>
                    </CardContent>
                </Card>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <CreditCard className="h-6 w-6 text-primary" />
                            {pagamenti.cardPagamenti.iban.title}
                        </CardTitle>
                        <CardDescription>{pagamenti.cardPagamenti.iban.sottotitolo}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="font-medium">{pagamenti.cardPagamenti.iban.primaScrittaEvidenziata}</p>
                        <p className="font-medium">{pagamenti.cardPagamenti.iban.secondaScrittaEvidenizata}</p>
                        <p className="text-sm text-muted-foreground">
                            {pagamenti.cardPagamenti.iban.ultimaScritta}
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Wallet className="h-6 w-6 text-primary" />
                            {pagamenti.cardPagamenti.tesseramento.title}
                        </CardTitle>
                        <CardDescription> {pagamenti.cardPagamenti.tesseramento.sottotitolo}</CardDescription>
                    </CardHeader>
                    <CardContent className=" grid space-y-2 justify-center items-center">
                        <form action="https://www.paypal.com/ncp/payment/WP49YR8ZLYDNQ" method="post" target="_blank" className="inline-grid justify-center content-start gap-2"  >
                            <input className="pp-WP49YR8ZLYDNQ bg-primary hover:bg-[#14a2c6] transition-colors text-primary-foreground mb-2 h-10" type="submit" value={pagamenti.cardPagamenti.tesseramento.bottone} />
                            <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                            <section> Con tecnologia <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-4 inline-flex pl-2" /></section>
                        </form>

                    </CardContent>
                </Card>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <DollarSign className="h-6 w-6 text-primary" />
                            {pagamenti.cardPagamenti.donazione.title}
                        </CardTitle>
                        <CardDescription>{pagamenti.cardPagamenti.donazione.sottotitolo}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid space-y-2 justify-center items-center align-bottom">
                        <form action="https://www.paypal.com/ncp/payment/T2E2G64R97UPJ" method="post" target="_blank" className="inline-grid justify-center content-start gap-2">
                            <input className="pp-WP49YR8ZLYDNQ bg-primary hover:bg-[#14a2c6] transition-colors text-primary-foreground mb-2 h-10" type="submit" value={pagamenti.cardPagamenti.donazione.bottone} />
                            <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                            <section> Con tecnologia
                                <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-4 inline-flex pl-2" />
                            </section>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>);
}

function Home() {
    // const [fields, setFields] = useState({});
    const [loading, setLoading] = useState(true)
    const [firstSection, setfirstSection] = useState({})
    const [secondSection, setSecondSection] = useState({})
    const [avatars, setAvatars] = useState([])
    const [team, setTeam] = useState([])
    const [contattaci, setContattaci] = useState([])
    const [pagamenti, setPagamenti] = useState([])
    const [carousel, setCarousel] = useState([])
    const [titleCarousel, setTitleCarousel] = useState('')


    useEffect(() => {
        API.getHome().then((response) => {
            // setFields(response.fields)
            console.log(response)
            // Get the first image and first section
            setfirstSection({
                title1: response.fields.title1,
                title2: response.fields.title2,
                title3: response.fields.title3,
                imageUrl: response.fields.firstImage.fields.file.url,
                imageAlt: response.fields.firstImage.fields.title
            })
            // Get the avatars
            setSecondSection({
                title: response.fields.titoloSecondaSezione,
                titoloCosaFacciamo: response.fields.titoloCosaFacciamo,
                immagineSezione2: response.fields.immagineSecondaSezioneN1.fields.file.url,
                immagineSezione2Alt: response.fields.immagineSecondaSezioneN1.fields.title,
                informazioniDiContorno1: response.fields.informazioniDiContorno[0],
                informazioniDiContorno2: response.fields.informazioniDiContorno[1],
                paragrafoSezione1: response.fields.paragrafoSezione1,
                titoloChiEraFrancesca: response.fields.titoloChiEraFrancesca,
                fotoFrancesca: response.fields.fotoFrancesca.fields.file.url,
                fotoFrancescaAlt: response.fields.fotoFrancesca.fields.title,
                informazioneDiContornoFrancesca1: response.fields.informazioniDiContornoFrancesca[0],
                informazioneDiContornoFrancesca2: response.fields.informazioniDiContornoFrancesca[1],
                paragrafoChiEraFrancesca: response.fields.paragrafoChiEraFrancesca
            })

            const avatar = []
            response.fields.chiSiamo.map((element) => {
                avatar.push({ name: element.fields.nome, info: element.fields.info, image: element.fields.immagineFaccia.fields.file.url })
                // setAvatars( avatars =>[...avatars, { name: element.fields.nome, info: element.fields.info, image: element.fields.immagineFaccia.fields.file.url }])
            })
            setAvatars(avatar)
            setTeam({
                titoloChiSiamo: response.fields.titoloChiSiamo,
                titoloParliamoDiNoi: response.fields.titoloParliamoDiNoi,
                paragrafoParliamoDelTeam: response.fields.paragrafoParliamoDelTeam
            })
            setContattaci({
                titoloContattaci: response.fields.titoloContattaci,
                sottotitoloContattaci: response.fields.sottotitoloContattaci,
                cardsPerContattaci: response.fields.cardsPerContattaci,
            })
            setPagamenti({
                titoloPagamenti: response.fields.titoloPagamenti,
                sottotitoloPagamenti: response.fields.sottotitoloPagamenti,
                cardPagamenti: response.fields.cardPagamenti
            })
            setTitleCarousel(response.fields.titoloCaroselloNews)
            const carousel = []
            response.fields.articoliPerCarosello.map((element) => {
                carousel.push({
                    titolo: element.fields.titoloDellarticolo,
                    data: element.fields.dataPubblicazione,
                    autore: element.fields.autore,
                    slug: element.fields.slug,
                    miniatura: element.fields.miniaturaFoto.fields.file.url,
                    descrizione: element.fields.descrizioneBreve
                })
            })
            setCarousel(carousel)

        }).then(() => setLoading(false))
            .then(() => {
                const hash = window.location.hash;
                console.log(hash)
                if (hash === "#contatti") {
                    console.log("ciao")
                    const element = document.getElementById("contatti");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
            )
        Aos.init({ duration: 1000, once: true })
    }, [])
    return (
        <>
            {loading ?
                <HomeSkeleton /> :
                <>
                    <FirstImage firstSection={firstSection} />
                    <Section2 secondSection={secondSection} />
                    <ChiSiamoCerchio avatars={avatars} team={team} />
                    <CarouselNews carousel={carousel} title={titleCarousel} />
                    <div className="w-full space-y-12 py-16 text-center text-pretty">
                        <Contatti contattaci={contattaci} />
                        <Pagamenti pagamenti={pagamenti} />
                    </div>
                </>
            }
        </>
    );
}

export { Home };
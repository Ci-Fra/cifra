/* eslint-disable react-hooks/exhaustive-deps */
import { Calendar, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import * as API from "../API.js"
import { useNavigate } from "react-router-dom"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import dayjs from "dayjs"
import 'dayjs/locale/it'
dayjs.locale('it')
import Markdown from "marked-react"
import { Skeleton } from "@/components/ui/skeleton"
import '../css/articles.css'

function ArticlePage() {
    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const options = {
        preserveWhitespace: true,
        renderText: (text) => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
        renderNode: {
            "embedded-asset-block": (node) => {
                const { title, file } = node.data.target.fields
                const mimeType = file.contentType
                const mimeGroup = mimeType.split('/')[0]
                if (mimeGroup === 'image') {
                    return (
                        <div className="flex flex-col justify-center align-center py-4">
                            <img
                                title={title ? title : null}
                                src={file.url}
                                alt={title ? title : null}
                                className="w-3/4 max-h-[300px] md:max-h-[400px] object-contain rounded-lg mx-auto align-center"
                                loading="lazy"
                            />
                            <h4 className="text-center text-lg text-foreground flex-1">{title}</h4>
                        </div>)
                }
            },
            "paragraph": (node, children) => {
                if (node.content[0].value === "") {
                    return <></>
                }
                return <p className="text-base leading-relaxed mb-2 pb-0 text-justify">{children}</p>
            },
            "heading-1": (node, children) => {
                return <h1 className="text-3xl font-bold mb-4 mt-2">{children}</h1>
            },
            "heading-2": (node, children) => {
                return <h2 className="text-2xl font-bold mb-4 mt-2">{children}</h2>
            },
            "heading-3": (node, children) => {
                return <h3 className="text-xl font-bold mb-4 mt-2">{children}</h3>
            },
            "heading-4": (node, children) => {
                return <h4 className="text-lg font-bold mb-4 mt-2">{children}</h4>
            },
            "heading-5": (node, children) => {
                return <h5 className="text-base font-bold mb-4 mt-2">{children}</h5>
            },
            "heading-6": (node, children) => {
                return <h6 className="text-sm font-bold mb-4 mt-2">{children}</h6>
            },
            "unordered-list": (node, children) => {
                return <ul className="list-item list-disc list-outside ml-8">{children}</ul>
            },
            "ordered-list": (node, children) => {
                return <ol className="list-item list-disc list-outside ml-8">{children}</ol>
            },
            "list-item": (node, children) => {
                return <li className="text-base leading-normal">{children}</li>
            },
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        const slug = location.pathname.split('/')[2]
        API.getArticles(slug).then((response) => {
            console.log(response)
            setArticle(response.items[0].fields)
        })
            .then(() => {
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                navigate('/not-found')
            })
    }, [])

    return (
        <>
            {loading ?
                <div className="bg-pContainer text-pForeground font-serif">
                    <header className="bg-background border-b border-gray-200">
                        <div className="container mx-auto px-2 py-8 md:flex md:flex-row md:justify-between">
                            <Skeleton className="h-10 w-3/4 md:w-1/2 mb-4 md:mb-0" />
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        </div>
                    </header>
                    <main className="bg-white container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                        <article className="lg:w-2/3">
                            <Skeleton className="w-full h-64 rounded-lg mb-6" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-5/6 mb-2" />
                            <Skeleton className="h-4 w-4/5 mb-6" />
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="mb-4">
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-11/12 mb-2" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>
                            ))}
                            <div className="border-t border-gray-200 mt-8 pt-4 flex items-start">
                                <Skeleton className="w-16 h-16 rounded-full mr-4" />
                                <div className="flex-1">
                                    <Skeleton className="h-6 w-1/4 mb-2" />
                                    <Skeleton className="h-4 w-full mb-1" />
                                    <Skeleton className="h-4 w-11/12 mb-1" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>
                            </div>
                        </article>
                        <aside className="lg:w-1/3">
                            <div className="bg-background p-6 rounded-lg mb-6">
                                <Skeleton className="h-8 w-1/2 mb-4" />
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                                            <Skeleton className="w-full h-36" />
                                            <div className="p-4">
                                                <Skeleton className="h-4 w-5/6 mb-2" />
                                                <Skeleton className="h-4 w-1/4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </main>
                </div> :
                <div className="bg-background text-foreground font-serif">
                    <header className="bg-pContainer text-pForeground border-b border-primary">
                        <div className="container mx-auto px-2 py-8 md:flex md:flex-row md:justify-between">
                            <h1 className="text-4xl font-bold items-center mb-4 md:mb-0 md:max-w-sm lg:max-w-lg">{article.titoloDellarticolo}</h1>
                            <div className="flex items-center text-sm text-pForeground space-x-4">
                                <div className="flex items-center">
                                    <img
                                        src={article.autore.fields.immagineFaccia.fields.file.url}
                                        alt={article.autore.fields.immagineFaccia.fields.description}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <span>{article.autore.fields.nome}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{dayjs(article.dataPubblicazione).format('DD MMMM YYYY')}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{article.tempoDiLettura} min</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className=" bg-background text-foreground container mx-auto py-8 flex flex-col lg:flex-row gap-8">
                        <article className="lg:w-2/3">
                            <img
                                src={article.fotoPrincipaleArticolo.fields.file.url}
                                alt={article.fotoPrincipaleArticolo.fields.description}
                                className="w-full h-auto rounded-lg mb-6"
                            />
                            <div className="flex-column text-start items-center justify-center">
                                {documentToReactComponents(article.corpoDellarticolo, options)}
                            </div>
                            <div className="border-t border-primary mt-8 pt-4 flex items-start">
                                <img
                                    src={article.autore.fields.immagineFaccia.fields.file.url}
                                    alt={article.autore.fields.immagineFaccia.fields.description}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div className="text-justify text-foreground text-sm font-normal">
                                    <h3 className="text-xl font-bold text-foreground mb-2">{article.autore.fields.nome}</h3>
                                    <Markdown value={article.autore.fields.info} gfm="true" breaks="true" className="text-sm text-muted-foreground text-justify" />
                                </div>
                            </div>
                        </article>
                        <aside className="lg:w-1/3">
                            <div className="bg-sContainer p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-bold mb-4">Articoli correlati</h3>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    {article.correlati.map((correlato, index) => {
                                        console.log(correlato.fields)
                                        return (
                                        <div key={index} className="rounded-lg mb-6">
                                            <div className="bg-background rounded-lg shadow overflow-hidden">
                                                <img
                                                    src={correlato.fields.miniaturaFoto.fields.file.url}
                                                    alt={correlato.fields.miniaturaFoto.fields.title}
                                                    className="aspect-video object-cover justify-center align-middle"
                                                />
                                                <div className="p-4">
                                                    <h4 className="font-bold mb-2">{correlato.fields.titoloDellarticolo}</h4>
                                                    <a href={`/articoli/${correlato.fields.slug}`} className="text-primary hover:underline text-sm">Leggi di più</a>
                                                </div>
                                            </div>
                                        </div>

                                    )})}
                                </div>
                            </div>

                            {/* <div className="bg-sContainer p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    <div className="bg-background rounded-lg shadow overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=150&width=300"
                                            alt="Machine Learning and Climate Change"
                                            className="w-full h-36 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="font-bold mb-2">The Role of Machine Learning in Climate Change Research</h4>
                                            <a href="#" className="text-primary hover:underline text-sm">Read more</a>
                                        </div>
                                    </div>
                                    <div className="bg-background rounded-lg shadow overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=150&width=300"
                                            alt="Ethical AI Development"
                                            className="w-full h-36 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="font-bold mb-2">Ethical Considerations in AI Development</h4>
                                            <a href="#" className="text-primary hover:underline text-sm">Read more</a>
                                        </div>
                                    </div>
                                    <div className="bg-background rounded-lg shadow overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=150&width=300"
                                            alt="AI in Healthcare"
                                            className="w-full h-36 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="font-bold mb-2">AI in Healthcare: Transforming Patient Care</h4>
                                            <a href="#" className="text-primary hover:underline text-sm">Read more</a>
                                        </div>
                                    </div>
                                    <div className="bg-background rounded-lg shadow overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=150&width=300"
                                            alt="AI in Healthcare"
                                            className="w-full h-36 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="font-bold mb-2">AI in Healthcare: Transforming Patient Care</h4>
                                            <a href="#" className="text-primary hover:underline text-sm">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </aside>
                    </main>
                </div >}
        </>
    )
}

export { ArticlePage }
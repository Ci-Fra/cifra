/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as API from "../API.js"
import Markdown from 'marked-react'
import { Skeleton } from "@/components/ui/skeleton"
import dayjs from "dayjs"
import 'dayjs/locale/it'
dayjs.locale('it')
// import { data } from "autoprefixer"


function AboutUs() {
  const [about, setAbout] = useState({})
  const navigate = useNavigate();
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.getAbout().then((response) => {
      setAbout(response.fields)
      console.log(response.fields)
      const memb = []
      response.fields.founder.map((member) => {
        console.log(member.fields)
        memb.push({
          nome: member.fields.nome,
          ruolo: member.fields.ruolo,
          descrizione: member.fields.descrizioneLunga,
          immagine: member.fields.immagineFaccia.fields.file.url,
          data: member.fields.dataDiNascita,
          info: member.fields.info
        })
        setMembers(memb)
      })
    })
    .then(() => setLoading(false))
    .catch((error) => {
      console.error(error)
      navigate('/not-found')
    })
  }, [])

  return (<>
    {
      loading ?
        <div className="bg-background text-foreground">
          < section className="pt-8 pb-2 px-4 max-w-6xl mx-auto" >
            <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
            <div className="mb-12">
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="mb-2">
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </section >

          <section className="mt-12">
            <Skeleton className="h-10 w-1/2 mx-auto mb-12" />
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center py-12 px-4 ${index % 2 === 0 ? 'bg-card' : 'bg-background'
                  }`}
              >
                <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                  <Skeleton className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto" />
                </div>
                <div className="w-full md:w-1/2 md:px-12">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </section>
        </div > :
        <div className="bg-background text-foreground ">
          {/* <section className="pt-8 pb-2 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">{about.titoloChiSiamo}</h1>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{about.titoloSezione1}</h2>
              <Markdown value={about.sezione1ChiSiamo}></Markdown>
            </div>

            <div className="mb-2">
              <h2 className="text-2xl font-semibold mb-4">{about.titoloLaNostraMissione}</h2>
              <Markdown value={about.sezioneLaNostraMissione} ></Markdown>
            </div>
          </section> */}


          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{about.titoloChiSiamo}</h2>
            <div className="space-y-8">
                <div className="bg-pContainer text-pForeground p-6 rounded-xl shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="flex flex-col md:flex-row md:align-middle lg:flex-col gap-6 lg:order-first lg:w-1/3 lg:items-center">
                            <div className="aspect-video lg:aspect-square lg:w-[340px] lg:h-[340px]">
                                <img
                                    src={about.fotoSezione1.fields.file.url}
                                    alt={about.fotoSezione1.fields.title}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 text-left ">
                            <h3 className="text-2xl font-semibold mb-3">{about.titoloSezione1}</h3>
                            <Markdown value={about.sezione1ChiSiamo} gfm="true" breaks="true"></Markdown>
                            {/* <a href="#" className="text-primary-foreground underline hover:text-accent-foreground">Learn more about John</a> */}
                        </div>
                    </div>
                </div>
                <div className="bg-sContainer text-sForeground p-6 rounded-xl shadow-xl ">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="flex flex-col md:flex-row md:align-middle lg:flex-col gap-6 lg:order-last lg:w-1/3 lg:items-center">
                            <div className="aspect-video lg:aspect-square lg:w-[340px] lg:h-[340px]">
                                <img
                                    src={about.fotoSezione2.fields.file.url}
                                    alt={about.fotoSezione1.fields.title}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 text-left mx-auto">
                            <h3 className="text-2xl font-semibold mb-3">{about.titoloLaNostraMissione}</h3>
                            {/* <p className="mb-4">{props.secondSection.paragrafoChiEraFrancesca}</p> */}
                            <Markdown value={about.sezioneLaNostraMissione} gfm="true" breaks="true"></Markdown>
                            {/* <a href="#" className="text-secondary-foreground underline hover:text-accent-foreground">Learn more about Jane</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <section className="">
            <h2 className="text-3xl font-bold mb-12 text-center">{about.titoloIlNostroTeam}</h2>
            {members.map((member, index) => (
              <div
                key={member.nome}
                className={`flex flex-col md:flex-row items-center py-12 px-4 ${index % 2 === 0 ? 'bg-pContainer' : 'bg-background'}`}
              >
                <div className={`w-full md:w-1/2 mb-8 md:mb-0 mx-auto ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                  <img
                    src={member.immagine}
                    alt={member.nome}
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 md:px-12 text-pretty">
                  <h3 className="text-2xl font-semibold mb-2">{member.nome}</h3>
                  <h4 className="text-muted-foreground mb-4">{dayjs(member.data).format('DD MMMM YYYY')}</h4>
                  <div className="text-start text-lg ">
                    {member.descrizione ? <Markdown value={member.descrizione} gfm="true" breaks="true" />
                      : <Markdown value={member.info} gfm="true" breaks="true" className="text-sm text-muted-foreground text-justify" />}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
    }
  </>
  )
}
export { AboutUs }
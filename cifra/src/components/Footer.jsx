import { Facebook, Instagram, Mail, Phone, MapPin, Globe, Clock, Scale, FileText } from 'lucide-react'
import { useState, useEffect } from "react"
import * as API from "../API.js"
import { Skeleton } from "@/components/ui/skeleton"

function Footer() {
  const [footer, setFooter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.getFooter()
      .then((data) => {
        setFooter(data.fields)
        console.log(data.fields)
      }).then(() => setLoading(false))
      .catch((error) => {
        console.error(error)
      })
  }, [])


  return (
    <>
      {loading ?
        <footer className="bg-white text-gray-800 shadow-xl inset-x-0 bottom-10 border-t-2 text-center lg:text-left">
          <div className="mx-auto p-6 m-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="space-y-4 mt-4 md:mt-2">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="pt-2">
                  <Skeleton className="h-6 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex space-x-4 justify-center">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
              <div className="space-y-4 mt-4 md:mt-2">
                <Skeleton className="h-6 w-1/3 mb-4" />
                <ul className="space-y-2">
                  {[Mail, Mail, Phone, MapPin, Globe, Clock].map((Icon, index) => (
                    <li key={index} className="flex items-center">
                      <Icon className="mr-2 text-gray-400" size={20} />
                      <Skeleton className="h-4 w-3/4" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 mt-4 md:mt-2">
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <form className="space-y-2">
                  <Skeleton className="h-10 w-2/3 mb-2" />
                  <Skeleton className="h-10 w-2/3" />
                </form>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                <Skeleton className="h-4 w-full md:w-3/4" />
                <Skeleton className="h-4 w-full md:w-1/2" />
              </div>
            </div>
          </div>
        </footer>
        :
        // console.log("footer: ", footer),
        <footer className=" bg-background text-foreground shadow-xl inset-x-0 bottom-10 border-t-2 text-center lg:text-left">
          <div className="mx-auto p-6 m-6 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="space-y-4 mt-4 md:mt-2">
                <h2 className="text-2xl font-bold text-foreground">{footer.titolo}</h2>
                <p className="text-sm">{footer.sottotitolo}</p>
                <div className="pt-2">
                  <h4 className="text-lg font-semibold text-gray-800">{footer.seguiciSuiSocial}</h4>
                  <p className="text-sm">{footer.sottoseguicisuisocial}</p>
                </div>
                <div className="flex space-x-4 justify-center xl:justify-start">
                  <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/associazionefrancescacaparelli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div className="space-y-4 mt-4 md:mt-2 ">
                <h3 className="text-xl font-semibold text-gray-800">Contattaci</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail className="mr-2 text-gray-500" size={20} />
                    <a href={`mailto:${footer.contattaci.mail1}`} className="hover:text-gray-800 transition-colors duration-300 text-sm">
                      {footer.contattaci.mail1}</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className='mr-2 text-gray-500' size={20} />
                    <a href={`mailto:${footer.contattaci.mail2}`} className="hover:text-gray-800 transition-colors duration-300 text-sm">{footer.contattaci.mail2}</a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 text-gray-500" size={20} />
                    <a href={`tel:${footer.contattaci.tel}`} className="hover:text-gray-800 transition-colors duration-300">{footer.contattaci.tel}</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 text-gray-500" size={20} />
                    <span>{footer.contattaci.posizione}</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="mr-2 text-gray-500" size={20} />
                    <a href={footer.contattaci.sito} className="hover:text-gray-800 transition-colors duration-300 text-sm">{footer.contattaci.sito}</a>
                  </li>
                  <li className="flex items-center">
                    <Scale className="mr-2 text-gray-500" size={20} />
                    <span>{footer.contattaci.cf}</span>
                  </li>
                </ul>
              </div>
              {/* <div className="space-y-4 mt-4 md:mt-2">
                <h3 className="text-xl font-semibold text-gray-800">{footer.newsletter}</h3>
                <p className="text-sm">{footer.sottoNewsletter}</p>
                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="email-input" className="sr-only">Indirizzo mail</label>
                  <input
                    id="email-input"
                    type="email"
                    placeholder={footer.inserisciLaTuaMail}
                    className="w-2/3 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="w-2/3 px-3 py-2 bg-primary text-white rounded-md hover:bg-[#14a2c6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm transition-colors duration-300"
                    aria-label="Iscriviti alla newsletter"
                  >
                    {footer.bottoneIscriviti}
                  </button>
                </form>
              </div> */}
              <div className="space-y-4 mt-4 md:mt-2">
                <h3 className="text-xl font-semibold text-gray-800">{footer.titoloAtti}</h3>
                {/* <p className="text-sm">{footer.sottoOrari}</p> */}
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FileText className="mr-2 text-gray-500" size={20} />
                    <a href={footer.attoCostitutivo.fields.file.url} download={footer.attoCostitutivo.fields.file.fileName} target='_blank' className="hover:text-gray-800 transition-colors duration-300">{footer.testoAttoCostitutivo}</a>
                  </li>
                  <li className="flex items-center">
                    <FileText className="mr-2 text-gray-500" size={20} />
                    <a href={footer.statuto.fields.file.url} download={footer.statuto.fields.file.fileName} target='_blank' className="hover:text-gray-800 transition-colors duration-300">{footer.testoStatuto}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch md:justify-between">
                <div className="text-sm">
                  <p>&copy; {new Date().getFullYear()} {footer.associazioneDirittiRiservati}</p>
                </div>
                <div className="text-sm md:text-right">
                  <span>{footer.creatoDa}</span>
                </div>
              </div>
            </div>
          </div>

        </footer>
      }
    </>)
}

export { Footer }
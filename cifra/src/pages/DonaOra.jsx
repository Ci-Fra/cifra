import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CreditCard, Wallet, DollarSign, PiggyBank, FileText, Percent } from "lucide-react"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import qrcode from "../assets/qrcode.png"
import * as API from "../API.js"
import Markdown from "marked-react";

function Pagamenti() {
    const [pagamenti, setPagamenti] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        API.getDonaOra().then((response) => {
            console.log(response)
            setPagamenti({
                titoloPagamenti: response.fields.titoloPagamenti,
                sottotitoloPagamenti: response.fields.sottotitoloPagamenti,
                cardPagamenti: response.fields.cardPerPagamenti,
                lascito: response.fields.lascito,
                lascitoSottotitolo: response.fields.lascitoSottotitolo,
                testoLascito: response.fields.testoLascito,
                cinqueMille: response.fields.cinqueMille,
                cinqueMilleTitolo: response.fields.cinqueMilleTitolo,
                testoCinqueMille: response.fields.testoCinqueMille,
                codiceFiscale: response.fields.codiceFiscale
            })
        }).then(() => setLoading(false))
    },[])
    return (
            <>
            {loading ? <div className="bg-background text-foreground"></div> :
                <section className="container m-auto px-4 text-left mb-8">
                    <h2 className="my-8 text-3xl font-bold mb-8 text-center">{pagamenti.titoloPagamenti
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
                        <Card className="shadow-lg ">
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
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <FileText className="h-6 w-6 text-primary" />
                                    {pagamenti.lascito}
                                </CardTitle>
                                <CardDescription>{pagamenti.lascitoSottotitolo}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Markdown value={pagamenti.testoLascito} gfm="true" breaks="true" />
                                {/* <Button className="w-full mt-4" variant="outline">Richiedi Informazioni</Button> */}
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg mb-8">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Percent className="h-6 w-6 text-primary" />
                                    {pagamenti.cinqueMille}
                                </CardTitle>
                                <CardDescription>{pagamenti.cinqueMilleTitolo}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Markdown value={pagamenti.testoCinqueMille} gfm="true" breaks="true" />
                            </CardContent>
                        </Card>
                    </div>
                </section>}
            </>
        )
    }

            export {Pagamenti}
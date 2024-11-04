import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Phone, Mail, CreditCard, Wallet,DollarSign,PiggyBank,MapPin,MessageCircle } from "lucide-react"
function HomeSkeleton() {
    const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <div className="max-w-screen-lg m-auto xl:pt-4">
                <Skeleton className="aspect-video w-screen max-w-screen-lg" />
            </div>

            <section className="container mx-auto px-4 py-8">
                <Skeleton className="h-10 w-48 mx-auto mb-8" />
                <div className="grid md:grid-cols-2 gap-8">
                    <Skeleton className="h-[300px] w-full rounded-lg" />
                    <div>
                        <Skeleton className="h-8 w-48 mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div>
                        <Skeleton className="h-8 w-48 mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                    <Skeleton className="h-[300px] w-full rounded-lg" />
                </div>

            </section>

            {/* Team Section */}
            <section className="container mx-auto py-10">
                <Skeleton className="h-10 w-48 mx-auto mb-8" />
                <div className="min-h-fit flex items-center justify-center bg-background">
                    <div className="relative w-[calc(100vw-2rem)] h-[calc(100vw-2rem)] max-w-[600px] max-h-[600px]">
                        {/* {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="w-16 h-16 rounded-full" />
                    ))} */}
                        {avatars.map((avatar, index) => {
                            const angle = (index / avatars.length) * 2 * Math.PI - Math.PI / 2
                            const x = 50 + 45 * Math.cos(angle)
                            const y = 50 + 45 * Math.sin(angle)
                            return (
                                <div key={index}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                    }}
                                >
                                    <Skeleton key={index} className="w-16 h-16 rounded-full" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* News Carousel */}
            <section className="container mx-auto px-4 pb-12">
                <Skeleton className="h-10 w-48 mx-auto mb-8" />
                <div className="relative">
                    <div className="flex overflow-x-auto gap-4 pb-4">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="flex-shrink-0 w-[250px]">
                                <Skeleton className="w-full h-[150px]" />
                                <CardContent className="mt-4">
                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-full mb-1" />
                                    <Skeleton className="h-4 w-5/6" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 gap-2">
                        <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                        <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4 pb-12">
                <Skeleton className="h-10 w-64 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-32" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-40" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-32" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-32" />
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Payment Section */}
            <section className="container mx-auto px-4 pb-12">
                <Skeleton className="h-10 w-64 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <PiggyBank className="h-5 w-5" />
                                <Skeleton className="h-6 w-32" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-48" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-40" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-40" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Wallet className="h-5 w-5" />
                                <Skeleton className="h-6 w-24" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-40" />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}
export { HomeSkeleton } 
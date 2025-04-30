import { Card, CardContent } from "@/components/ui/card";
import { Calculator, CheckCircle, ClipboardList, CreditCard, FileText, RefreshCcw } from "lucide-react";

const services = [
    { title: "Blok Plan Estimate ( Cost/M2 )", desc: "Perhitungan biaya awal per meter persegi.", icon: ClipboardList },
    { title: "Elemental Cost Estimate", desc: "Estimasi biaya berdasarkan elemen proyek.", icon: Calculator },
    { title: "Dokumen Administrasi Tender / Kontrak", desc: "Penyusunan dokumen kontrak proyek.", icon: FileText },
    { title: "Prepared Sertifikat Of Payment", desc: "Penyusunan sertifikat pembayaran proyek.", icon: CreditCard },
    { title: "Prepared Variation Order", desc: "Penyesuaian biaya untuk pekerjaan tambahan atau pengurangan.", icon: RefreshCcw },
    { title: "Prepared Final Account", desc: "Perhitungan akhir biaya proyek.", icon: CheckCircle },
];

export default function Menu2Section() {
    return (
        <section className="relative justify-items-center w-screen min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="relative h-full flex ">
                <div className="relative z-10 text-center text-white pt-20">
                    <h1 className="text-4xl font-extrabold drop-shadow-xl text-indigo-950">
                        Siapa Kami?
                    </h1>
                    <p className="text-lg pt-7 opacity-90 text-black text-justify max-w-4xl mx-auto">
                        PT. Graha Estimatika Pradana adalah salah satu perusaahaan swasta nasional yang bergerak di bidang jasa 
                        konsultan biaya bangunan atau yang dikenal dengan sebutan Quantity Surveyor, didirikan dengan akte notaris
                        Irma Sri Rahayu, SH, Mkn pada tanggal 12 Juni 2013.
                    </p>

                    <p className="text-lg pt-7 opacity-90 text-black text-justify max-w-4xl mx-auto">
                        PT. Graha Estimatika Pradana Perusahaan yang didirikan oleh Drs. Didik Dwi Hantoro,MM 
                        yang sebelumnya pernah bekerja diperusahaan Quantity Surveyor yang cukup ternama hampir 23 tahun.

                    </p>
               
                   
                    
                </div>
            </div>

            <div className="relative h-full flex pt-10">
                <div className="relative z-10 text-center text-white pt-20">
                                    
                    {/* Card Section */}
                    <h1 className="text-4xl font-extrabold drop-shadow-xl text-indigo-950">
                        Lingkup Jasa yang ditangani oleh PT. Graha Estimatika Pradana
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
                        {services.map((service, index) => (
                            <Card 
                                key={index} 
                                className="p-5 text-center transition duration-300 transform hover:scale-105 hover:bg-indigo-600 hover:text-white shadow-lg rounded-xl flex flex-col items-center"
                            >
                                <service.icon className="w-12 h-12 text-indigo-700 hover:text-white mb-3 transition duration-300" />
                                <CardContent>
                                    <h2 className="text-xl font-semibold">{service.title}</h2>
                                    <p className="text-sm opacity-90 mt-2">{service.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        
    )
}
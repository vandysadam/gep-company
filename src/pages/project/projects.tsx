import DashboardLayout from "@/layout/dashboerd-layout";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import "./perproject/gallery-styles.css";  

import GalleryCiumbeluit from "../../../src/assets/images/Data Foto Proyek/Proyek-Apartemen-Galeri-Ciumbuleuit-3-Bandung.webp";
import PacificGardenStyle from "../../../src/assets/images/Data Foto Proyek/Proyek-Apartement-Pacific-Gardeb-Style-Tangerang.webp";
import ReginaMaris from "../../../src/assets/images/Data Foto Proyek/Proyek-RS-Reginamaris-Medan.webp";
import BudiLestariBekasi from "../../../src/assets/images/Data Foto Proyek/Proyek-Budi-lestari-bekasi2.webp";
import Hegarmanah from "../../../src/assets/images/Data Foto Proyek/Proyek-Hegarmanah-Residence-Bandung.webp";
import Queencity from "../../../src/assets/images/Data Foto Proyek/Proyek-Queen-City-semarang.webp";
import BaliInternasinalHospital from "../../../src/assets/images/Data Foto Proyek/Proyek-Bali-international-Hospital.webp";
import CordelaJakarta from "../../../src/assets/images/Data Foto Proyek/Proyek-Cordela-1-CROP.webp";
import Dannaya from "../../../src/assets/images/Data Foto Proyek/Proyek-D'Anaya.webp";
import NovotelYogya from "../../../src/assets/images/Data Foto Proyek/Proyek-Novotel-Yogya.webp";
import Poris88 from "../../../src/assets/images/Data Foto Proyek/Proyek-Poris-88-Apartement-Tangerang.webp";
import Princenton from "../../../src/assets/images/Data Foto Proyek/Proyek-Princenton-boutique.webp";
import RsiaGraciaMaris from "../../../src/assets/images/Data Foto Proyek/Proyek-RSIA-Gracia-Nias.webp";
// import SheratonYogya from "../../../src/assets/images/Data Foto Proyek/Proyek-Sheraton-Hotel2.webp";
import TheManhattanMedan from "../../../src/assets/images/Data Foto Proyek/Proyek-The-Manhattan-Mall-&-Condominium-Medan.webp";
import UniversitasIntBatam from "../../../src/assets/images/Data Foto Proyek/Proyek-UIB-Batam.webp";
import TigerMandiriHeadOffice from "../../../src/assets/images/Data Foto Proyek/Proyek-Tigermandiri-head-office.webp";
import HotelKampiBintaro from "../../../src/assets/images/Data Foto Proyek/Proyek-kampi-hotel-bintaro.webp";
import MercureHotel from "../../../src/assets/images/Data Foto Proyek/Proyek-hotel-mercure-jakarta.webp";

const projects = [
  { title: "Proyek Gallery Ciumbeluit 3 - Bandung", image: GalleryCiumbeluit, tanggalSpk:'21/10/2013',grossArea: '31.179 m2' },
  { title: "Apartemen Pacific Garden Style - Alam Sutera", image: PacificGardenStyle, tanggalSpk:'06/03/2017', grossArea: '150.822 m2' },
  { title: "Rumah Sakit Regina Maris - Medan", image: ReginaMaris, tanggalSpk:'09/12/2019', grossArea: '42.000 m2' },
  { title: "RSIA Budi Lestari - Bekasi", image: BudiLestariBekasi, tanggalSpk:'11/08/2023', grossArea: '5.140 m2' },
  { title: "Apartemen Hegarmanah Residence - Bandung", image: Hegarmanah, tanggalSpk:'09/06/2014', grossArea: '49.812 m2' },
  { title: "Queen City Mall, Hotel & Promenada Apartement - Semarang", image: Queencity, tanggalSpk:'07/10/2019', grossArea: '80.374 m2' },
  { title: "Bali International Hospital - Bali", image: BaliInternasinalHospital, tanggalSpk:'24/05/2022', grossArea: '60.000 m2' },
  { title: "Hotel Cordela - Jakarta", image: CordelaJakarta, tanggalSpk:'03/12/2014', grossArea: '6.300 m2' },
  { title: "Hotel D'Anaya", image: Dannaya, tanggalSpk:'16/09/2014', grossArea: '19.000 m2' },
  { title: "Hotel Novotel - Yogyakarta", image: NovotelYogya, tanggalSpk:'25/06/2018', grossArea: '626 m2' },
  { title: "Apartemen Poris 88 - Tangerang", image: Poris88, tanggalSpk:'01/07/2014', grossArea: '16.600 m2' },
  { title: "Pricenton - Medan", image: Princenton, tanggalSpk:'14/06/2021', grossArea: '20.804 m2' },
  { title: "RSU Gracia Maris - Nias", image: RsiaGraciaMaris, tanggalSpk:'30/10/2023', grossArea: '11.536 m2' },
  // { title: "Hotel Sheraton - Yogyakarta", image: SheratonYogya, tanggalSpk:'21/10/2013', grossArea: ' m2' },
  { title: "The Manhattan Mall - Medan", image: TheManhattanMedan, tanggalSpk:'19/05/2014', grossArea: '118.995 m2' },
  { title: "Gedung Rektorat Universitas International - Batam", image: UniversitasIntBatam, tanggalSpk:'01/08/2016', grossArea: '27.857 m2' },
  { title: "Tiger Mandiri Head Office - Jakarta", image: TigerMandiriHeadOffice, tanggalSpk:'08/05/2017', grossArea: '3.000 m2' },
  { title: "Hotel Kampi - Bintaro", image: HotelKampiBintaro, tanggalSpk:'03/10/2024', grossArea: '11.000 m2' },
  { title: "Renovasi Hotel Ibis Budged Menjadi Mercure Hotel - Jakarta", image: MercureHotel, tanggalSpk:'27/11/2023', grossArea: '220 Kamar / 95 Kamar' },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<{ title: string; image: string; tanggalSpk: string; grossArea: string;  } | null>(null);

  return (
    <DashboardLayout>
      <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">Galeri Proyek</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lihat berbagai proyek yang telah kami kerjakan di berbagai sektor.
          </p>
        </div>

        {/* Grid Project Gallery dengan animasi */}
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="gallery-image"
              />
              <div className="overlay">
                <h3 className="overlay-text">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Image Preview */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="w-[90vw] max-w-[screen] max-h-[95vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={() => setSelectedProject(null)}
            >
              
            </button>
            {selectedProject && (
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <img src={selectedProject.image} alt="Preview" className="w-full h-full object-cover rounded-lg col-span-2" />
                </div>
                <div className="pt-20">
                  <h3 className="text-xl font-semibold text-gray-900 mt-4">{selectedProject.title}</h3>
                  <p className="pt-5 text-gray-600">Gross Area : {selectedProject.grossArea}</p>
                  <p className=" text-gray-600">Tanggal SPK : {selectedProject.tanggalSpk}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </DashboardLayout>
  );
}

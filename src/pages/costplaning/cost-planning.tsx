import DashboardLayout from "@/layout/dashboerd-layout";
import { useEffect } from "react";
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import gambar1 from '@/assets/svg/undraw_qa-engineers_kgp8.svg';
import gambar2 from '@/assets/svg/undraw_investing_kncz.svg';

export default function CostPlanningScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <DashboardLayout>
      <section className="w-full py-16 bg-gray-50 overflow-hidden px-8 md:px-16 lg:px-80">
        <h1 className="text-5xl sm:text-4xl text-center font-extrabold text-indigo-900 mb-10">
          Cost Planning
        </h1>
        <div className="text-2xl font-bold mb-16 text-gray-800 text-center" data-aos="fade-down">
          TARGET BIAYA PROYEK EKONOMIS
        </div>  
          <img src="src/assets/svg/undraw_investing_kncz.svg" className="h-[200px] w-[200px] object-cover rounded-xl shadow-md mb-10" data-aos="fade-up"></img>
        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4" data-aos="fade-up">
          Hal-hal yang paling utama dan prinsip didalam rencana pembangunan suatu proyek seyogianya diputuskan pada tahap perencanaan konsep (Concept Design Stage).
          Alokasi dana dan biaya proyek pada umumnya ditentukan pada tahap Awal Design, oleh karenanya sangat penting sekali bahwa perencanaan estimasi biaya dimulai dan diterapkan pada tahap Awal design, agar sasaran dan target pelaksanaan dan penyelesaian proyek dari segi biaya konstruksi, desain, mutu dan waktu dapat terpenuhi.
          Jasa yang diberikan oleh Quantity Surveyor seharusnya melalui pendekatan-pendekatan secara konprehensip, menyajikan informasi mengenai biaya secara detail.
          Agar Owner ( Pemberi Tugas ) memperoleh suatu gambaran mengenai Biaya Proyek secara jelas dan realistis hingga fungsi perencanaan biaya ( Elemental Cost Estimate ) didalam tahap design awal menjadi efektif.
        </div>     
        <div>

        </div>
      </section>
    </DashboardLayout>
  );
}

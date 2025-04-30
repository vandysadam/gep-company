"use client"

import { useEffect, useState } from "react"
import DashboardLayout from "@/layout/dashboerd-layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import AOS from "aos"
import '../../../node_modules/aos/dist/aos.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);

  return (
    <DashboardLayout>
      <div className="relative w-screen h-screen py-12 px-7" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-900">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-[500px]">
          {/* Info Kontak */}
          <div className="flex flex-col justify-center space-y-6 ">


            {/* Formulir Kontak */}
            <div className="bg-white shadow-md rounded-lg p-6 h-[500px]"  data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px] max-h-[200px] resize-none"
                />
                <Button type="submit" >
                  Send Message
                </Button>
              </form>
            </div>
          
          </div>

          {/* Peta */}
          <div className="w-full h-[350px] md:h-auto flex justify-center items-center" data-aos="fade-left">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1591946611748!2d106.68821767442577!3d-6.242740161127689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa479cc57d03%3A0x6a4f7c11ac23337!2sPT.%20Graha%20Estimatika%20Pradana!5e0!3m2!1sen!2sid!4v1739422754599!5m2!1sen!2sid" 
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Contact

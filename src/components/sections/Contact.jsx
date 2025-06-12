import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import emailjs from 'emailjs-com';


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        //upon submitting form, website WON'T refresh
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Message Sent!");
            setFormData({name: "", email: "",message: ""})
        }).catch(() => alert("Oops! Something went wrong. Please try again."))
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-transparent overflow-hidden w-full">
            <RevealOnScroll>
                <div className="px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6 max-w-xl mx-auto" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Name..." 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required 
                                    className="block w-full px-6 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                                    
                                </input>
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="example@email.com" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required 
                                    className="block w-full px-6 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                                    
                                </input>
                            </div>
                        </div>
                        
                        <div className="w-full">   
                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Your Message..." 
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows={5}
                                    required 
                                    className="block w-full px-6 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">                    
                                </textarea>
                            </div>
                        </div>

                        <button type="submit" className="max-w-xl bg-cyan-950 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>                
            </RevealOnScroll>
        </section>
        
    )
}
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Nous répondons à toutes vos questions !</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Votre nom" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="votre@email.com" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Votre message" 
                  rows="4" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Envoyer un message
              </button>
            </form>
          </div>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">Newsletter</h3>
              <p className="mb-6 text-gray-600">Restez informé des dernières opportunités via nos newsletters.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                />
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  S&apos;abonner à la newsletter
                </button>
              </form>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone size={20} className="mr-3 text-blue-500" />
                  <p>77 779 83 83 / 33 867 80 43</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={20} className="mr-3 text-blue-500" />
                  <p>karack - amitié 3</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={20} className="mr-3 text-blue-500" />
                  <p>contact@weokomkom.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

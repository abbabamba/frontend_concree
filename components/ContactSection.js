import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Nous répondons à toutes vos questions !</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <input type="text" placeholder="Nom" className="w-full p-2 rounded" />
              <input type="email" placeholder="Adresse email" className="w-full p-2 rounded" />
              <textarea placeholder="Message" className="w-full p-2 rounded" rows="4"></textarea>
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Envoyer un message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Restez informé des dernières opportunités via nos newsletters.</p>
              <form className="space-y-4">
                <input type="email" placeholder="Adresse email" className="w-full p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">S'abonner à la newsletter</button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>77 779 83 83 / 33 867 80 43</p>
              <p>karack - amitié 3</p>
              <p>contact@weokomkom.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
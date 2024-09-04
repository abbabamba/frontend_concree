import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Wekomkom</h2>
          <p className="text-sm">
            Wekomkom est une plateforme digitale dédiée à l'accompagnement et à la valorisation de l'entrepreneuriat en Afrique. Nous connectons les entrepreneurs à des investisseurs et des ressources pour les aider à propulser leurs entreprises vers le succès.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/opportunities" className="hover:underline">Opportunités</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">Boutique</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:underline">Conditions générales d'utilisation</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
            </li>
            <li>
              <Link href="/documentation" className="hover:underline">Documentation utile</Link>
            </li>
            <li>
              <Link href="/partners" className="hover:underline">Devenir partenaire</Link>
            </li>
          </ul>
        </div>

        {/* Mobile App and Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Wekomkom est disponible sur mobile</h3>
          <div className="flex space-x-4 mb-6">
            <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/playstore.png" alt="Google Play" width={120} height={40} />
            </Link>
            <Link href="https://apple.com" target="_blank" rel="noopener noreferrer">
              <Image src="/appstore.png" alt="App Store" width={120} height={40} />
            </Link>
          </div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous sur nos réseaux</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">
        <p>© 2024 Wekomkom. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

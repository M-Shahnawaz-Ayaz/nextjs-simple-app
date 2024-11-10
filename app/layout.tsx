import Link from "next/link";
import "./globals.css"
import '@fortawesome/fontawesome-free/css/all.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="flex justify-between items-center bg-emerald-300 px-6 py-4">
        <div>
      <h1 className="text-2xl font-bold text-gray-800 font-extralight">Shah.Com</h1>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:text-indigo-500 hover:bg-red-400">Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-400">About 
        </Link>
        <Link href="/services"  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-400">Services
        </Link>
        <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
        </Link>
        <Link href="/sign-in" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Sign In
        </Link>
      </nav>
    </header>
        {children}

        <footer className="bg-blue-300 text-white py-8">
      <div className="container mx-100px px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Company Name</h3>
            <p className="mt-2">123 Street Name, City, Country</p>
            <p>info@example.com</p>
            <p>+1234567890</p>
          </div>
          <div className="mb-4 md:mb-0 justify-normal">
            <h3 className="text-xl font-bold">Links</h3>
            <ul className="mt-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
        </body>
    </html>
  );
}

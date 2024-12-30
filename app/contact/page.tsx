import Navbar from '../../components/Navbar';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Contact Me</h1>
        <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg mb-6">
            I'd love to connect with you! Whether you have a question about my work, want to discuss a potential project, or just say hi, feel free to reach out on any of the platforms below.
          </p>
          <div className="flex justify-around mt-4">
            <a href="https://in.linkedin.com/in/vishesh-sachan-0277ba32a?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={32} />
            </a>
            <a href="https://x.com/visheshsachan21" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={32} />
            </a>
            <a href="https://www.instagram.com/visheshsachan01" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={32} />
            </a>
            <a href="https://github.com/vishesh-sachan" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

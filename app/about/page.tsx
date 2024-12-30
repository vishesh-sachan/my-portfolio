import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">About Me</h1>
        <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            Hello! I'm <span className="font-bold text-blue-600">Vishesh Sachan</span>, currently pursuing a B.Tech in CSE. I am experienced in the MERN stack and proficient with Next.js.
          </p>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
             My goal is to continuously improve, learn new technologies, and contribute to impactful projects.
          </p>
          <p className="text-gray-700 text-lg md:text-xl">
            Let's connect and collaborate. Check out my work on GitHub, and feel free to reach out on LinkedIn or Twitter!
          </p>
        </div>
      </div>
    </>
  );
}

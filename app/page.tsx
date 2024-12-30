import Navbar from '../components/Navbar';
import { projects } from '../constants/projects';
import { blogs } from '../constants/blogs';

export default function Home() {
  const latestProject = projects[0];
  const latestBlog = blogs[0];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <section className="text-center max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Vishesh Sachan</h1>
          <p className="text-base md:text-lg mb-6">Software Engineer</p>
        </section>

        <section className="my-10 w-full max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Most Recent Project</h2>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-lg md:text-xl font-bold text-blue-500">{latestProject.title}</h3>
            <p className="mt-2 text-gray-700">{latestProject.description}</p>
            {latestProject.liveLink && (
              <a href={latestProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">Live Demo</a>
            )}
            {latestProject.blogLink && (
              <a href={latestProject.blogLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block text-xs">More About Project</a>
            )}
          </div>
        </section>

        <section className="my-10 w-full max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Latest Blog</h2>
          {latestBlog && !latestBlog.isProjectDoc? (
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
              {latestBlog.link ? (<a href={latestBlog.link}>
                  <h3 className="text-lg md:text-xl font-bold text-blue-500">{latestBlog.title}</h3>
                  <p className="mt-2 text-gray-700">{latestBlog.description}</p>
                  <span className="text-gray-500 text-sm">Published on: {latestBlog.date}</span>
                </a>) : (
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-500">{latestBlog.title}</h3>
                    <p className="mt-2 text-gray-700">{latestBlog.description}</p>
                    <span className="text-gray-500 text-sm">Published on: {latestBlog.date}</span>
                  </div>
                )
              }
            </div>
            ) : (
              <div>No Recent Blog</div>
            )
          }
        </section>
      </div>
    </>
  );
}

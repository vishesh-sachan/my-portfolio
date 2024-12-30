import Navbar from '../../components/Navbar';
import { blogs } from '../../constants/blogs';

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Blog</h1>
        {blogs.filter(blog => !blog.isProjectDoc).length === 0 ? (
          <p className="text-lg text-gray-700">No blog yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.filter(blog => !blog.isProjectDoc).map((blog, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                {blog.link ? (
                  <a href={blog.link}>
                    <h3 className="text-lg md:text-xl font-bold text-blue-500">{blog.title}</h3>
                    <p className="mt-2 text-gray-700">{blog.description}</p>
                    <span className="text-gray-500 text-sm">Published on: {blog.date}</span>
                  </a>
                ) : (
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-500">{blog.title}</h3>
                    <p className="mt-2 text-gray-700">{blog.description}</p>
                    <span className="text-gray-500 text-sm">Published on: {blog.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 bg-gray-100 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Project Docs</h1>
        {blogs.filter(blog => blog.isProjectDoc).length === 0 ? (
          <p className="text-lg text-gray-700">No project docs yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.filter(blog => blog.isProjectDoc).map((blog, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                {blog.link ? (
                  <a href={blog.link}>
                    <h3 className="text-lg md:text-xl font-bold text-blue-500">{blog.title}</h3>
                    <p className="mt-2 text-gray-700">{blog.description}</p>
                    <span className="text-gray-500 text-sm">Published on: {blog.date}</span>
                  </a>
                ) : (
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-500">{blog.title}</h3>
                    <p className="mt-2 text-gray-700">{blog.description}</p>
                    <span className="text-gray-500 text-sm">Published on: {blog.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

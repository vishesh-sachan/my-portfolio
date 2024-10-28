import Navbar from '../../components/Navbar';
import { blogs } from '../../constants/blogs';

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-lg md:text-xl font-bold text-blue-500">{blog.title}</h2>
              <p className="mt-2 text-gray-700">{blog.description}</p>
              <span className="text-gray-500 text-sm">Published on: {blog.date}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

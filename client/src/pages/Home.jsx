function Home() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-white mb-6">
        Your AI-powered music hub 🎧
      </h1>
      <p className="text-xl text-gray-300 max-w-xl">
        Discover, generate, and share music with the power of AI. 
        Built for creators, by creators.
      </p>
      <button className="mt-8 bg-[#4169E1] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
        Get Started
      </button>
    </div>
  );
}

export default Home;


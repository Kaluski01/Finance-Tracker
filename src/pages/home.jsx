export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-black to-[#111827] text-white">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-orange-500">Welcome to Crypto Tracker 🚀</h1>
      </header>

      <main className="p-6 text-center">
        <h2 className="text-3xl font-semibold text-white">Track Your Crypto & Forex in Real-Time</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          As promised, we’re kicking off the journey of building this tracker. Stay tuned for daily progress updates!
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-bold rounded-lg shadow-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </main>
    </div>
  );
}

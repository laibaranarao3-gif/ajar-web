export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="grid gap-4 justify-items-center text-red-800 w-full">
        <h1 className="text-900 text-3xl">Login Admin</h1>
        <div className="text-blue-800">
          <input type="text" placeholder="Email" className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-gray-800" />
        </div>
        <input type="password" placeholder="Password" className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-gray-800" />
        <button className="bg-red-300 p-3 font-semibold rounded text-gray-900">Login</button>
      </div>
    </main>
  );
}
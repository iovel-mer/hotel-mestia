export default function Home() {
  return (
    <div className="relative bg-blue-600 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center">
          {/* Hotel Name */}
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
            [Your Hotel Name]
          </h1>
          {/* Slogan */}
          <p className="mt-4 text-xl text-white opacity-80">
            Comfort and luxury at your doorstep.
          </p>
          {/* Quick Description */}
          <p className="mt-8 text-lg text-white opacity-90 max-w-3xl mx-auto">
            Experience a peaceful stay with world-class amenities. Whether you're here for a weekend getaway or a long vacation, we offer the perfect place to relax and recharge.
          </p>
          {/* Link to Rooms Page */}
          <div className="mt-12">
            <a
              href="/rooms"
              className="inline-block px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition"
            >
              Explore Our Rooms
            </a>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/villa/1.jpg')" }}>
      </div>
    </div>
  );
}

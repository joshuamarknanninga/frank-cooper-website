export default function HeroSection() {
  return (
    <section className="hero">
      <img 
        src="/hero-bg.jpg" 
        alt="Church congregation" 
        className="absolute w-full h-full object-cover"
      />
      <div className="hero-content">
        <h1>Welcome to Frank Cooper Ministries</h1>
        <p className="text-xl mb-8">Living Faith, Sharing Hope, Building Community</p>
        <div className="flex gap-4 justify-center">
          <button className="btn-ministry">
            Join Us Sunday
          </button>
          <button className="btn-ministry bg-secondary text-dark">
            Watch Live
          </button>
        </div>
      </div>
    </section>
  );
}
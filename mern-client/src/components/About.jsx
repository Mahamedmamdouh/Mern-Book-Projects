import OurTeam from "../assets/about-img-1.jpg";

const About = () => {
  return (
    <section className="py-3 py-md-5 flex items-center justify-center min-h-screen">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-end mb-8 md:mb-0">
            <img className="rounded-md w-full h-auto max-w-md" loading="lazy" src={OurTeam} alt="About 1" /> {/* Set max-width to control size */}
          </div>
          <div className="md:col-span-1">
            <div className="w-full md:w-11/12">
              <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold">Who Are We?</h2>
              <p className="lead text-lg md:text-xl text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
              <p className="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
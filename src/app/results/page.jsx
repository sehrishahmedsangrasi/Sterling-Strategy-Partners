const projectsData = [
    {
      title: "E-commerce Redesign",
      description:
        "Redesigning an online store to improve user experience and increase conversions.",
      image: "ee.jpeg",
      result: "Increased sales by 35% within the first quarter.",
      clientTestimonial:
        "The redesign transformed our business. Sales skyrocketed, and customers love the new look and feel of the site.",
      clientName: "John Doe, CEO of ShopTech",
    },
    {
      title: "Mobile App Development",
      description:
        "Developing a custom mobile app for a fitness startup to engage users and track their fitness goals.",
      image: "appdev.jpeg",
      result: "Over 50,000 downloads in the first month.",
      clientTestimonial:
        "The app exceeded all expectations. Our user engagement is through the roof!",
      clientName: "Jane Smith, Founder of FitLife",
    },
    {
      title: "Branding for a Startup",
      description:
        "Creating a unique and memorable brand identity for a new tech startup.",
      image: "srtr.png",
      result: "Brand awareness doubled in six months.",
      clientTestimonial:
        "The branding was spot-on! It truly represents who we are as a company, and it's resonated with our audience.",
      clientName: "Michael Lee, Co-Founder of StartTech",
    },
  ];
  
  const Portfolio = () => {
    return (
      <div className="bg-[#1b2a41] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[#d4af37] mb-8">
            Our Portfolio
          </h1>
  
          {/* Project List */}
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h2 className="text-2xl font-semibold text-[#1b2a41]">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-[#36454f]">{project.description}</p>
                  <p className="mt-4 text-[#d4af37] font-semibold">{project.result}</p>
  
                  {/* Client Testimonial */}
                  <div className="mt-6 border-t border-[#b5a642] pt-4">
                    <p className="text-[#36454f] font-medium">Client Testimonial</p>
                    <p className="italic text-[#36454f] mt-2">
                      "{project.clientTestimonial}"
                    </p>
                    <p className="mt-2 text-[#1b2a41] font-semibold">
                      - {project.clientName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
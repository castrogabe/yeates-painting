export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chuck Kaplan',
      role: 'DHL',
      text: "Yeates Painting did a great job from start to finish for DHL Supply Chain in Victorville. Would definitely recommend if you're looking for a professional job at a reasonable cost.",
    },
    {
      name: 'Joe Guasti',
      role: 'Guasti Solar.com',
      text: 'Mike Yeates did a great job. I will use them again.',
    },
    {
      name: 'Matt Huber',
      role: 'Huber Construction',
      text: "I've worked with Mike on several jobs and he is an experienced painter that does excellent work. I would recommend him for sure.",
    },
    {
      name: 'Diana Davis',
      role: 'Homeowner',
      text: "Yeates Painting is an excellent choice for any painting job, big or small, interior or exterior. I've had his crew do multiple jobs at multiple houses over the years and have been satisfied with the product every time.",
    },
    {
      name: 'Tom Chaco',
      role: 'Homeowner',
      text: 'Yeates Painting did an excellent job for two of our properties. I made a referral to one of my friends and he was very complimentary of the work and the price. I will recommend this company to any of my friends.',
    },
    {
      name: 'Sue and Alan Butcher',
      role: 'Homeowners — Portland, Oregon',
      text: 'Mike and Heather are amazing. Heather helped make the color choosing process easy and was great to bounce design ideas off of. Mike neatly, quickly and efficiently completed the job. We are thrilled with the transformation! We recommend them highly.',
    },
    {
      name: 'Collin James',
      role: 'Homeowner & Business Owner',
      text: 'Mike Yeates Painting has been around for years! I have used their services for family, friends, and most recently my business. They are some of the most honest people when it comes to bidding. I will continue to use them for any painting needs because of the quality and consistency of their work.',
    },
    {
      name: 'Neva',
      role: 'Homeowner',
      text: 'I had dark stained cabinets in my kitchen. Yeates Painting painted them white and it opened up my kitchen. It looks so much bigger and brighter. I love it!',
    },
    {
      name: 'Gabriel',
      role: 'Homeowner Neighbor',
      text: "Mike Yeates painted our home's interior and tool shed. His work was flawless to say the least. His attention to detail exceeded our expectations. Happy with the quality!",
    },
    {
      name: 'Rob',
      role: '',
      text: 'Mike Yeates Painting is an established, reputable painting contractor that prides itself on presentation, quality work, and follow-through communication, leaving their customer with peace of mind and a great job!',
    },
    {
      name: 'James and Linda',
      role: '',
      text: "Yeates Painting painted the stucco on our house for the previous owner well over 9 years ago and it still looks great and repels water. Mike did very fine work. We later hired him to paint the wood areas of our house and again he and his crew did very good work. They were quick, professional, priced fairly and cleaned up nicely after themselves. When it's time to paint again we will be calling Yeates Painting to do the work.",
    },
    {
      name: 'Perry Taylor',
      role: '',
      text: 'Mike has done several painting jobs for us both inside and outside our house. We have always been able to count on Mike to be honest, dependable, and do quality work. We would highly recommend Mike to anyone needing painting done.',
    },
    {
      name: 'Carolyn and Butch',
      role: '',
      text: 'Professional service with a personal touch. Listened to my wants, needs, and concerns from the phone call to estimate to completion. Easy to work with! Attention to detail, prep, clean up, and pride in the completed job. We have used Yeates Painting a second time with the same great service and same great results.',
    },
    {
      name: 'Linda Cwiak',
      role: 'Different By Design',
      text: "I have known and worked with Yeates Painting for eight years now. He has painted several areas in my home as well as interior and exterior painting at our vacation home in Arizona. I call Mike and his crew whenever I have a client that requires painting during their renovations. His work is professional and precise. I wouldn't consider using any other contractor on my projects.",
    },
  ];

  return (
    <>
      {/* Contractor Information */}
      <section className='contractor-info'>
        <div className='container'>
          <div className='row justify-content-center py-5'>
            <div className='col-lg-12'>
              <h1>Commercial Residential Painting Contractor</h1>

              <h4>Interior and Exterior Experts</h4>

              <h4>License # 522539</h4>

              <h4>Bonded and Insured</h4>

              <h4>
                To book an appointment, call{' '}
                <a className='my-button' href='tel:+17609530373'>
                  1-760-953-0373
                </a>
              </h4>

              <h4>
                Email me and describe your job.{' '}
                <a className='my-button' href='mailto:yeatespaints4u@yahoo.com'>
                  Email Me
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Mike and Heather Image */}
      <section className='container text-center pb-4'>
        <img
          src={`${import.meta.env.BASE_URL}images/MikeHeather_Fotor.png`}
          className='img-fluid testimonials-image'
          alt='Mike and Heather Yeates'
        />
      </section>

      {/* Testimonials */}
      <section className='testimonials-section py-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>What Our Customers Say About Us</h2>

          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              {testimonials.map((testimonial) => (
                <div
                  className='testimonial-card'
                  key={`${testimonial.name}-${testimonial.role}`}
                >
                  <h3>{testimonial.name}</h3>

                  {testimonial.role && <h5>{testimonial.role}</h5>}

                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

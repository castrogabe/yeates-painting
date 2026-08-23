const galleryImages = [
  {
    image: '/images/IMG_1099.JPG',
    alt: 'Prep work',
    description: 'Prep work',
  },
  {
    image: '/images/IMG_1100.JPG',
    alt: 'Painted high ceiling',
    description: 'Painted high ceiling',
  },
  {
    image: '/images/IMG_1101.JPG',
    alt: 'High ceilings with windows',
    description: 'High ceilings with windows',
  },
  {
    image: '/images/IMG_1103.JPG',
    alt: 'Hallway',
    description: 'Hallway',
  },
  {
    image: '/images/IMG_1105.JPG',
    alt: 'Upstairs office',
    description: 'Upstairs Office',
  },
  {
    image: '/images/IMG_1202.JPG',
    alt: 'Commercial building exterior',
    description: 'Commercial Building Exterior',
  },
  {
    image: '/images/IMG_1204.JPG',
    alt: 'Commercial building painted',
    description: 'Commercial Building Painted',
  },
  {
    image: '/images/IMG_1478.JPG',
    alt: 'Stucco repair',
    description: 'Stucco Repair',
  },
  {
    image: '/images/IMG_1624.JPG',
    alt: 'Exterior painted',
    description: 'Exterior Painted',
  },
  {
    image: '/images/IMG_1610.JPG',
    alt: 'White garage door',
    description: 'White Garage Door',
  },
  {
    image: '/images/IMG_1628.JPG',
    alt: 'Painted garage door',
    description: 'Painted Garage Door',
  },
  {
    image: '/images/IMG_1614.JPG',
    alt: 'Patio before',
    description: 'Patio Before',
  },
  {
    image: '/images/IMG_1623.JPG',
    alt: 'Patio after',
    description: 'Patio After',
  },
  {
    image: '/images/IMG_1712.JPG',
    alt: 'Patio deck before',
    description: 'Patio Deck Before',
  },
  {
    image: '/images/IMG_1733.JPG',
    alt: 'Patio deck after',
    description: 'Patio Deck After',
  },
  {
    image: '/images/IMG_1800.JPG',
    alt: 'Painted back yard',
    description: 'Painted Back Yard',
  },
  {
    image: '/images/IMG_2228.jpg',
    alt: 'Front of house before',
    description: 'Front Of House Before',
  },
  {
    image: '/images/IMG_2236.jpg',
    alt: 'Painted front of house',
    description: 'Painted Front Of House',
  },
  {
    image: '/images/IMG_2559.jpg',
    alt: 'Bedroom before',
    description: 'Bedroom Before',
  },
  {
    image: '/images/IMG_2560.jpg',
    alt: 'Bedroom after',
    description: 'Bedroom After',
  },
  {
    image: '/images/IMG_2123.jpg',
    alt: 'Painted interior',
    description: 'Painted Interior',
  },
  {
    image: '/images/IMG_2348.jpg',
    alt: 'Gate Church kids ministry',
    description: 'Gate Church Kids Ministry',
  },
  {
    image: '/images/IMG_1110.JPG',
    alt: 'House before',
    description: 'House Before',
  },
  {
    image: '/images/IMG_1150.JPG',
    alt: 'House after',
    description: 'House After',
  },
  {
    image: '/images/IMG_0960.jpeg',
    alt: 'Street view',
    description: 'Street View',
  },
  {
    image: '/images/IMG_0962.JPG',
    alt: 'Street view after',
    description: 'Street View After',
  },
  {
    image: '/images/IMG_0977.jpeg',
    alt: 'Working',
    description: 'Working',
  },
  {
    image: '/images/IMG_0978.jpeg',
    alt: 'At work',
    description: 'At Work',
  },
  {
    image: '/images/IMG_0973.jpeg',
    alt: 'Painted exterior',
    description: 'Painted Exterior',
  },
  {
    image: '/images/IMG_0957.jpeg',
    alt: 'Painted exterior',
    description: 'Painted Exterior',
  },
  {
    image: '/images/IMG_0982.jpeg',
    alt: 'Painted exterior',
    description: 'Painted Exterior',
  },
  {
    image: '/images/IMG_0981.jpeg',
    alt: 'Painted after',
    description: 'Painted After',
  },
];

export default function Gallery() {
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

      {/* Gallery */}
      <section className='gallery-section'>
        <div className='container'>
          <h2 className='text-center mb-4'>
            Some Before and After Pictures of Our Work
          </h2>

          <div className='row g-4'>
            {galleryImages.map((item, index) => (
              <div
                className='col-12 col-sm-6 col-lg-3'
                key={`${item.image}-${index}`}
              >
                <div className='gallery-card'>
                  <a
                    href={item.image}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className='img-fluid'
                    />
                  </a>

                  <div className='gallery-description'>{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Description */}
          <div className='gallery-about py-5'>
            <p>
              A few examples of Yeates Painting. We have been offering the
              highest quality service to the people of the High Desert and
              Inland Empire areas for more than 30 years. We are highly skilled
              residential and commercial painting contractors.
            </p>

            <p>
              Our employees have been with us for up to 15 years. They are
              highly skilled professionals who are committed to punctuality and
              integrity. Our dedication to you, the customer, is our priority.
            </p>

            <p>
              If you own a business or a home that needs some TLC, as you can
              see in some of the photos, no job is too big or too small. Yeates
              Painting can handle it all!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

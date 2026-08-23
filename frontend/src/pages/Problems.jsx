export default function Problems() {
  const services = [
    'Color Matching Experts',
    'Deck Finishing',
    'Interior Painting',
    'Exterior Painting',
    'Commercial Painting',
    'Insurance Claim Repairs',
    'Wood Cabinet Repainting',
    'Remodel Painting',
    'New Construction',
    'Pressure Washing',
    'Stucco Crack Filling',
    'Scrape and Fill',
    'Restore Weathered Fascia Boards',
    'Restore Water Damaged Siding',
    'Restore Water Damaged Drywall',
    'Tenant Improvement Work',
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

      {/* Problems We Resolve Introduction */}
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <p>
                <strong>
                  Mike Yeates Painting has more than 30 years of experience in
                  the High Desert and Inland Empire.
                </strong>{' '}
                If you are planning a paint job inside or out, whether it's a
                commercial property, rental fixer-upper, or your personal home,
                Yeates Painting is your number one choice.
              </p>

              <p>
                As experts in High Desert residential and commercial painting,
                we are committed to delivering the highest quality work.
                Integrity is one of the most important values at Yeates
                Painting. Our goal is to do the job right the first time, every
                time, and go above and beyond whenever possible.
              </p>

              <p>
                Call us today at{' '}
                <a className='my-button' href='tel:+17609530373'>
                  1-760-953-0373
                </a>{' '}
                for dependable residential and commercial painting services.
                Yeates Painting is a full-service painting contractor offering a
                variety of affordable services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <h2 className='mb-4'>Problems We Resolve</h2>

              <ul className='problems-list'>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

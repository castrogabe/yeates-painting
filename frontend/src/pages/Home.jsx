export default function Home() {
  return (
    <>
      {/* Cover Image */}
      <div className='image'>
        <img
          src={`${import.meta.env.BASE_URL}images/yeatespainting.png`}
          className='img-fluid'
          width='100%'
          alt='Yeates Painting'
        />
      </div>

      {/* Two Column Section */}
      <div className='container py-3'>
        <div className='row justify-content-center py-5'>
          {/* Text Column */}
          <div className='col-lg-6'>
            <h3 className='pb-4'>Painting Contractor 30 Years in Business</h3>

            <p>
              Yeates Painting and Decorating is a high quality company, that has
              been helping people throughout the High Desert and elsewhere
              achieve custom paint changes to their homes and businesses. Mike
              Yeates, the owner has 35 years of professional painting
              experience, and his concern is always complete customer
              satisfaction.
            </p>

            <p>
              Yeates Painting is reliable, trustworthy, prompt and neat and
              clean. It is a business with many repeat customers, as they
              appreciate the work we do, and want us back when painting needs
              arise. We also offer expert color assistance, for those that
              aren't quite sure what colors go best together, or what new colors
              might be best to help update or sell a home. Our crew is well
              trained, and professional and customers enjoy having us in to
              improve their space. This is a solid, reputable, trusting company,
              that will give you a great paint job ~ each and every time.
            </p>

            <p>
              As a High Desert resident for 34 years and business owner, Yeates
              Painting has supported several families of employees, we follow
              the contract so there are no surprises. We strive to go above and
              beyond your expectations. As a resident of the High Desert it's
              important to keep your money in the local economy that supports
              small business.
            </p>
          </div>

          {/* Image Column */}
          <div className='col-lg-6'>
            <img
              className='img-fluid'
              src={`${import.meta.env.BASE_URL}images/mikeHeather_Fotor.jpg`}
              alt='Mike and Heather Yeates'
            />
          </div>
        </div>
      </div>
      {/* End Two Column Section */}

      {/* Facebook Section */}
      <div className='container py-3'>
        <div className='row justify-content-center py-5'>
          {/* Facebook Feed */}
          <div className='col-lg-6'>
            <iframe
              src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYeates-Painting-697242553995008%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
              width='100%'
              height='200'
              scrolling='no'
              frameBorder='0'
              allowTransparency='true'
              allow='encrypted-media'
              title='Yeates Painting Facebook Page'
            ></iframe>
          </div>

          {/* Facebook Text */}
          <div className='col-lg-6'>
            <h3 className='pb-4'>Like Us On Facebook</h3>

            <p>
              Yeates Painting is family owned and operated in the High Desert
              since 1988. We specialize in Color Matching!
            </p>
          </div>
        </div>
      </div>
      {/* End Facebook Section */}
    </>
  );
}

import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // GoDaddy SSL Site Seal
    const script = document.createElement('script');
    script.src =
      'https://seal.godaddy.com/getSeal?sealID=W7Lx1svrKiy7PALOTIuwgBSQgfVbkTzfeddiTYJ5ONS7t0Nm4wq4xTIEXQUK';
    script.async = true;
    script.type = 'text/javascript';

    const sealContainer = document.getElementById('siteseal');

    if (sealContainer) {
      sealContainer.appendChild(script);
    }

    return () => {
      if (sealContainer && sealContainer.contains(script)) {
        sealContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Start Footer */}
      <footer>
        <div className='container'>
          <div className='row text-center py-5'>
            {/* Christian Values */}
            <div className='col-md-4'>
              <h3 className='text-center'>Christian Values</h3>

              <p>
                At Yeates Painting, we strive to glorify The Lord in our work.
              </p>
            </div>

            {/* Contact Info */}
            <div className='col-md-4'>
              <h3 className='text-center'>Contact Info</h3>

              <strong>Mike Yeates</strong>

              <p>
                <a className='my-button' href='tel:+17609530373'>
                  1-760-953-0373
                </a>
                <br />
                <a href='mailto:yeatespaints4u@yahoo.com'>
                  yeatespaints4u@yahoo.com
                </a>
              </p>
            </div>

            {/* Connect */}
            <div className='col-md-4 pb-5'>
              <h3 className='text-center'>CONNECT WITH US</h3>

              <br />

              <a
                className='btn btn-outline-light btn-lg'
                href='mailto:yeatespaints4u@yahoo.com'
              >
                SEND US AN EMAIL
              </a>
            </div>
          </div>
        </div>

        <hr
          style={{
            width: '80%',
            height: '1px',
            backgroundColor: '#ffffff',
            border: 'none',
          }}
        />

        <div className='col-12 text-center'>
          <p>
            Powered by{' '}
            <a
              href='https://gabewd.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              &copy; gabewd.com
            </a>
          </p>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;

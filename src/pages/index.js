import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Logo from '../images/bragas-car-care-detailing-logo.png'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/hero.css'
import Facebook from '../../resources/icons/facebook.svg'
import Instagram from '../../resources/icons/instagram.svg'
import Whatsapp from '../../resources/icons/whatsapp.svg'
import Mail from '../../resources/icons/mail.svg'
import Phone from '../../resources/icons/phone.svg'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <section className='text-xl text-gray-100'>
        {/* Hero Section */}

        <section className='relative w-full h-screen overflow-hidden transform -skew-y-12 bg-blue-900'>
          <header>
            <img src={Logo} alt='Braga`s Car Care Detailing' />
          </header>
          <nav className='absolute top-0 z-50 items-center mt-20 ml-80'>
            <ul className='z-50 flex items-center justify-center uppercase'>
              <a href='#about'>
                <li className='hover:text-orange-500'>About</li>
              </a>
              <a className='ml-3' href='#benefits'>
                <li className='hover:text-orange-500'>Benefits</li>
              </a>
              <a className='ml-3' href='#services'>
                <li className='hover:text-orange-500'>Services</li>
              </a>
            </ul>
          </nav>
          <div className='absolute top-0 left-0 flex items-start justify-center w-full h-full mt-16'>
            <div className='w-4/12 mt-24 transform skew-y-12'>
              <h1 className='mt-24 mb-6 text-4xl text-blue-400'>
                Mobile Auto Detailing in Oudtshoorn
              </h1>
              <h2 className='mb-3 text-2xl text-gray-100'>
                We Come Straight to You to Provide the Best Detailing Service in
                the Klein Karoo!
              </h2>
              <p className='mb-3 text-xl text-gray-100'>
                Braga`s Care Car Detailers is an Oudtshoorn based company that
                provides mobile car washing and detailing services!
              </p>
            </div>
            <div className='w-4/12 h-auto mt-10 ml-12 overflow-hidden'>
              <Img
                className='border-4 border-orange-600 border-solid'
                fadeIn={false}
                loading='eager'
                fluid={data.indexHero.childImageSharp.fluid}
              />
            </div>
          </div>
        </section>

        {/* About Section */}

        <section
          id='about'
          className='w-full transform -skew-y-12 bg-blue-800 h-128'
        >
          <div className='w-7/12 pt-40 mx-auto text-center text-gray-100 transform skew-y-12'>
            <h2 className='mb-3 text-3xl text-gray-100'>About Us</h2>
            <p className='text-lg'>
              At Braga`s we believe in providing the best quality service with
              the highest quality products way above industry strandards to
              fulfil our clients` needs. By travelling to our clients, we cut
              out the stress and effort associated with going to a car wash and
              leaving your baby in someone else`s care. Whether you`re at home
              busy spending time with family or at work busy with important
              meeting. We come to where you need us to help take care of your
              automobile car detailing needs.
            </p>
          </div>
        </section>

        {/* Benefits Section */}

        <section id='benefits' className='w-full transform -skew-y-12 h-128'>
          <div className='flex items-center justify-around w-full h-full max-w-4xl mx-auto text-gray-900 transform skew-y-12'>
            <div className='w-64 h-64 p-4 text-center shadow-lg'>
              <h2 className='my-8 text-xl'>Benefit One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                voluptate!
              </p>
            </div>
            <div className='w-64 h-64 p-4 text-center shadow-lg'>
              <h2 className='my-8 text-xl'>Benefit Two</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam, sint!
              </p>
            </div>
            <div className='w-64 h-64 p-4 text-center shadow-lg'>
              <h2 className='my-8 text-xl'>Benefit Three</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, aut.
              </p>
            </div>
          </div>
        </section>

        {/* Service One */}
        <section className='transform -skew-y-12 bg-blue-900'>
          <section id='services' className='w-full h-auto bg-blue-900'>
            <div className='flex items-start justify-center w-full h-full p-16'>
              <div className='w-4/12 mt-24 ml-64 transform skew-y-12'>
                <h2 className='mb-3 text-3xl text-gray-100'>
                  Interior Services
                </h2>
                <p className='text-lg'>
                  The interior of your vehicle will be purged of all loose
                  material carpets while seats and miscellaneous upholstery will
                  be spot treated, shampooed & cleaned.
                </p>
              </div>
              <div className='w-3/12 h-auto ml-6 overflow-hidden'>
                <Img
                  className='border-4 border-orange-600 border-solid'
                  fluid={data.bragasOne.childImageSharp.fluid}
                />
              </div>
            </div>
          </section>

          {/* Service Two */}

          <section className='w-full h-auto text-gray-100 bg-blue-800'>
            <div className='flex items-start justify-center w-full h-full p-16'>
              <div className='w-3/12 h-auto overflow-hidden'>
                <Img
                  className='border-4 border-orange-600 border-solid'
                  fluid={data.bragasTwo.childImageSharp.fluid}
                />
              </div>
              <div className='w-4/12 mt-24 ml-12 mr-64 transform skew-y-12'>
                <h2 className='mb-3 text-3xl'>Exterior Services</h2>
                <p className='text-lg'>
                  Complete exterior detailing including washing your vehicle,
                  claying the paint, removal of bugs/tar and preparing your car
                  for cleaning & polishing finish. During this operation all
                  exterior rubber trim and tires will be dressed to like new
                  condition.
                </p>
              </div>
            </div>
          </section>

          {/* Service Three */}

          <section className='w-full h-auto'>
            <div className='flex items-start justify-center w-full h-full p-16 bg-blue-900'>
              <div className='w-4/12 mt-24 ml-64 transform skew-y-12'>
                <h2 className='mb-3 text-3xl'>Engine Cleaning & Dressing</h2>
                <p className='text-lg'>
                  Engines will be cleaned using the finest products to remove
                  grease and grim from surfaces. A speacial non-silicone
                  dressing will be applied to ensure bright clean surfaces for
                  longer.
                </p>
              </div>
              <div className='w-3/12 h-auto ml-6 overflow-hidden'>
                <Img
                  className='border-4 border-orange-600 border-solid'
                  fluid={data.bragasThree.childImageSharp.fluid}
                />
              </div>
            </div>
          </section>
        </section>

        {/* Footer Section */}

        <footer className='flex items-end justify-end w-full h-full text-gray-900'>
          <div className='mt-6 mr-24'>
            <div className='flex items-center justify-start mb-4'>
              {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
              <img
                className='w-6 h-6 mr-6'
                src={Facebook}
                alt='facebook icon'
              />
              <img
                className='w-6 h-6 mr-6'
                src={Instagram}
                alt='instagram icon'
              />
              <img
                className='w-6 h-6 mr-6'
                src={Whatsapp}
                alt='whatsapp icon'
              />
              <img className='w-6 h-6 mr-6' src={Mail} alt='mail icon' />
              <img className='w-6 h-6 mr-6' src={Phone} alt='phone icon' />
            </div>
            <p className='mb-4'>
              Copyright ©Braga`s Car Care Detailing, {new Date().getFullYear()}.
              All rights reserved.
            </p>
            <p>
              JAMstack Website by{' '}
              <a
                className='text-green-500 hover:text-green-300'
                href='https://chaddwebdesign.co.za'
                target='_blank'
                rel='noopener noreferrer'
              >
                Chadd Web Design
              </a>
            </p>
          </div>
        </footer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    indexHero: file(relativePath: { eq: "bragas-carecare-detailing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bragasOne: file(relativePath: { eq: "bragas-one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bragasTwo: file(relativePath: { eq: "bragas-two.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bragasThree: file(relativePath: { eq: "bragas-three.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

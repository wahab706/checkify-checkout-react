import { Page, Layout, Card, Stack, Button, Checkbox, RadioButton, TextField } from '@shopify/polaris';
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chekifyLogo from '../assets/chekifyLogo.svg'
import paypalLogo from '../assets/paypalLogo.svg'
import card from '../assets/card.png'
import paypal from '../assets/paypal.png'
import gift from '../assets/gift.webp'
import { ShippingForm, BillingForm } from '../components'

export default function HomePage() {

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'pakistan',
    state: '',
    zipCode: '',
    experience: "It's great :)",
  })

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'pakistan',
    zipCode: '',
  })

  const [signUpExclusive, setSignUpExclusive] = useState(true);
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
  const [shippingOptionsValue, setShippingOptionsValue] = useState('pro');
  const [discountCode, setDiscountCode] = useState();
  const [oneYearwarranty, setOneYearWarraty] = useState(false);
  const [buy1Get1warranty, setBuy1Get1warranty] = useState(true);

  const handleShippingDetails = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })
  }

  const handleBillingDetails = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value })
  }

  const handleSignUpExclusive = useCallback((newChecked) => setSignUpExclusive(newChecked), []);
  const handleIsBillingAddressSame = useCallback((newChecked) => setIsBillingAddressSame(newChecked), []);
  const handleShippingOptionsValue = useCallback((_checked, newValue) => setShippingOptionsValue(newValue), [],);
  const handleDiscountCode = useCallback((newValue) => setDiscountCode(newValue), []);
  const handleOneYearWarraty = useCallback((newChecked) => setOneYearWarraty(newChecked), []);
  const handleBuy1Get1warranty = useCallback((newChecked) => setBuy1Get1warranty(newChecked), []);

  useEffect(() => {
    console.log(isBillingAddressSame);
  }, [isBillingAddressSame])


  return (
    <div className='container Checkout-Page'>
      <Page fullWidth>
        <div className='Logo-Container'>
          <Link url='/' className='Logo-Section' >
            <img src={chekifyLogo} alt="logo" />
          </Link>
        </div>
        <Layout>
          <Layout.Section>
            <div className='Announcement-Top'>
              {Announement()}
            </div>

            <div className='PayButton LinkButton'>
              <Card sectioned>
                <Button>
                  <div className='LinkButton-content'>
                    <span className='LinkButton-logo'>
                      <svg className="LinkButton-logoSvg" focusable="false" viewBox="0 0 250 113.3" fill="none">
                        <path fill="#1D3944" d="M39.8 1.7C41.5.6 43.4 0 45.5 0c2.7 0 5.3 1.1 7.2 3 1.9 1.9 3 4.5 3 7.2 0 2-.6 4-1.7 5.7-1.1 1.7-2.7 3-4.6 3.8-1.9.8-3.9 1-5.9.6-2-.4-3.8-1.4-5.2-2.8-1.4-1.4-2.4-3.3-2.8-5.2-.4-2-.2-4 .6-5.9.7-2 2-3.5 3.7-4.7zM0 1.1h18.3v110.6H0V1.1zM247.2 32.7c-6.3 13.6-13.8 26.6-22.3 38.9l25.1 40h-21.6L213 87c-15.5 17.7-30.8 26.3-45.6 26.3-18 0-25.4-12.9-25.4-27.5V75.3c0-19.3-2-24.8-8.6-23.9-12.5 1.7-31.6 30.2-44 60.3H72.3v-79h18.3v39.5c10.4-17.6 20-32.7 35.4-38.5 8.9-3.4 16.5-1.9 20.4-.2 14.2 6.3 14.2 21.5 14 42v8.7c0 7.4 2.1 10.7 7.1 11.2 3 .3 6-.4 8.6-1.9V1.1h18.3v79.2s15.9-14.5 32.6-47.5h20.2zM54.6 32.8H36.3v78.9h18.3V32.8z">
                        </path>
                      </svg>
                    </span>

                    <span className='LinkButton-text'>
                      <div className='LinkButton-textDivider'></div>
                      <span>Pay faster</span>
                      <svg className="LinkButton-lock" focusable="false" viewBox="0 0 13 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7V5a5 5 0 0 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h.5Zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm3-2.5V5a3 3 0 0 0-6 0v2h6Z" fill="#1D3944">
                        </path>
                      </svg>
                    </span>

                  </div>
                </Button>
              </Card>
            </div>

            <div className='PayButton PaypalButton'>
              <Card sectioned>
                <Button>
                  <div className='PaypalButton-content'>
                    <img src={paypalLogo} alt="paypal-logo" />
                    <span> Buy Now</span>
                  </div>
                </Button>
              </Card>
            </div>

            <div className='Pay-Another-Way'>
              <span>Or Pay Another Way Below</span>
            </div>

            <div className='Shipping-Details'>
              <h1 className='Checikfy-Heading'>Shipping Details</h1>

              <div className='Announcement-Bottom'>
                {Announement()}
              </div>

              <Card sectioned>
                <ShippingForm shippingDetails={shippingDetails} handleShippingDetails={handleShippingDetails} />
              </Card>

              <Card sectioned>
                <Checkbox
                  label="Sign up for exclusive offers and news"
                  checked={signUpExclusive}
                  onChange={handleSignUpExclusive}
                />
              </Card>
            </div>

            <div className='Shipping-Options'>
              <h1 className='Checikfy-Heading'>Shipping Options</h1>

              <Card sectioned>
                <Stack vertical>
                  <RadioButton
                    label={
                      <span className='Shipping-Options-Description'>
                        <span>
                          Checkify Beta 1.0
                          <small>(Best checkout ever)</small>
                        </span>
                        <span className='Shipping-Options-Description-Price'>
                          Free
                        </span>
                      </span>
                    }
                    checked={shippingOptionsValue === 'beta1'}
                    id="beta1"
                    name="beta1"
                    onChange={handleShippingOptionsValue}
                  />

                  <RadioButton
                    label={
                      <span className='Shipping-Options-Description'>
                        <span>
                          Checkify Beta 2.0
                          <small>(⭐⭐ Best checkout ever)</small>
                        </span>
                        <span className='Shipping-Options-Description-Price'>
                          Free
                        </span>
                      </span>
                    }
                    checked={shippingOptionsValue === 'beta2'}
                    id="beta2"
                    name="beta2"
                    onChange={handleShippingOptionsValue}
                  />

                  <RadioButton
                    label={
                      <span className='Shipping-Options-Description'>
                        <span>
                          Checkify Pro
                          <small>(⭐⭐⭐ Best checkout ever)</small>
                        </span>
                        <span>
                          €29.90
                        </span>
                      </span>
                    }
                    checked={shippingOptionsValue === 'pro'}
                    id="pro"
                    name="pro"
                    onChange={handleShippingOptionsValue}
                  />
                </Stack>
              </Card>
            </div>

            <div className='Billing-Address'>
              <h1 className='Checikfy-Heading'>Billing Details</h1>

              <Card sectioned>
                <Checkbox
                  label="Billing address is the same as shipping"
                  checked={isBillingAddressSame}
                  onChange={handleIsBillingAddressSame}
                />

                <span className={`${isBillingAddressSame ? 'visually-hidden' : ''}`}>
                  <BillingForm billingDetails={billingDetails} handleBillingDetails={handleBillingDetails} />
                </span>
              </Card>
            </div>

            <div className='Test-Section'>
              <Card sectioned>
                <Stack vertical>
                  <div className='Test-Grids'>
                    <div className='Test-Logo-Section'>
                      <img src={card} alt="gift" className='Test-Img' />
                    </div>
                    <div>
                      <h1 className='Checikfy-Heading'>Test Checkify with Stripe Payment Methods</h1>
                      <p>Credit card number: 4242 4242 4242 4242 || Date: 02/24 || CVV: 222 /// For testing SEPA Direct Debit use AT321904300235473204</p>
                    </div>
                  </div>

                  <div className='Test-Grids'>
                    <div className='Test-Logo-Section'>
                      <img src={paypal} alt="gift" className='Test-Img' />
                    </div>
                    <div>
                      <h1 className='Checikfy-Heading'>Test Checkify with PayPal</h1>
                      <p>For testing PayPal payment flow you need to have PayPal sandbox account https://www.sandbox.paypal.com/</p>
                    </div>
                  </div>

                  <div className='Test-Grids'>
                    <div className='Test-Logo-Section'>
                      <img src={gift} alt="gift" className='Test-Img' />
                    </div>
                    <div>
                      <h1 className='Checikfy-Heading'>Get a free gift!</h1>
                      <p>Test our checkout seven days for free!</p>
                    </div>
                  </div>
                </Stack>
              </Card>
            </div>

            <div className='Footer-Section'>
              <Stack>
                <span className='Footer-Item'>
                  <a className="jss142" href="https://checkify.pro/en/data-processing-agreement" target="_blank" rel="noreferrer">Refund policy</a>
                </span>
                <span className='Footer-Item'>
                  <a className="jss142" href="https://checkify.pro/en/privacy-policy" target="_blank" rel="noreferrer">Privacy policy</a>
                </span>
                <span className='Footer-Item'>
                  <a className="jss142" href="https://checkify.pro/en/terms-of-use" target="_blank" rel="noreferrer">Terms of service</a>
                </span>
              </Stack>
            </div>
          </Layout.Section>

          <Layout.Section secondary>
            <div className='Order-Summary'>
              <h1 className='Checikfy-Heading'>Order Summary</h1>
              <Card sectioned>
                <div className='Order-Summary-InnerCards'>
                  <Card sectioned>
                    <div className='Order-Product-Details'>
                      <Stack>
                        <div className='Order-Product-Image-Section'>
                          <div className='Order-Product-Image'>
                            <img src="https://cdn.shopify.com/s/files/1/0516/2831/0707/products/14-1.jpg?v=1665588654&width=100" alt="product" />
                          </div>

                          <div className='Order-Quantity'>1</div>
                        </div>
                        <div className='Order-Product-Detail-Section'>
                          <div className='Product-Title-Section'>
                            <h2 className='Product-Title'>Aglaonema Plant</h2>
                            <h2 className='Product-Title'>€35.00</h2>
                          </div>
                          <h3 className='Product-Extras'>Old</h3>
                        </div>
                      </Stack>
                    </div>

                    {DiscountCode(discountCode, handleDiscountCode)}
                  </Card>
                </div>

                <div className='Order-Prices-Section'>
                  <Stack>
                    <span>Subtotal</span>
                    <span>€35.00</span>
                  </Stack>
                  <Stack>
                    <span className='Order-Prices-Dual'>
                      VAT
                      <span className='Order-Prices-Percentage'>17.00%</span>
                    </span>
                    <span>€5.95</span>
                  </Stack>
                  <Stack>
                    <span className='Order-Prices-Dual'>
                      Checkify Pro
                      <span className='Order-Prices-Percentage'>⭐⭐⭐ Best checkout ever</span>
                    </span>
                    <span>€29.90</span>
                  </Stack>
                </div>

                <div>
                  {ProductWarrantyOptions(oneYearwarranty, handleOneYearWarraty, buy1Get1warranty, handleBuy1Get1warranty)}
                </div>

                <div className='Order-Total-Section'>
                  <p>Total</p>
                  <p>
                    <span className='Order-Price-Currency'>EUR</span>
                    <span className='Order-Price'>
                      €70.85
                    </span>
                    <span className='Order-Price-Currency'>(~ PKR 16751)</span>
                  </p>
                </div>
              </Card>
            </div>


          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}

function Announement() {
  return (
    <div className='Strong-Demand-Announcement'>
      <Card sectioned>
        <div>
          <p>🔥 Strong demand! Complete your order before it's too late!</p>
        </div>
      </Card>
    </div>
  )
}

function DiscountCode(discountCode, handleDiscountCode) {
  return (
    <div className='Discount-Input-Section'>
      <div className='Discount-Input-Section-Inner'>
        <div className='Discount-Input'>
          {/* <label htmlFor="discount">Discount Code</label>
          <span>
            <input type="text"
              id='discount'
              value={discountCode}
              onChange={handleDiscountCode}
            />
          </span> */}
          <TextField
            placeholder='Discount Code'
            value={discountCode}
            onChange={handleDiscountCode}
            autoComplete="off"
          />
        </div>
        {discountCode ?
          <Button> Apply Code</Button>
          :
          <Button disabled> Apply Code </Button>
        }
      </div>
    </div>
  )
}

function ProductWarrantyOptions(oneYearwarranty, handleOneYearWarraty, buy1Get1warranty, handleBuy1Get1warranty) {
  return (
    <>
      <div className='Order-Summary-InnerCards Warranty-Options'>
        <Card sectioned>
          <Checkbox
            label={
              <div className='Order-Product-Details'>
                <Stack>
                  <div className='Order-Product-Image-Section'>
                    <div className='Order-Product-Image'>
                      <img src="https://cdn.shopify.com/s/files/1/0516/2831/0707/files/Extended-Warranty-1year-widcare.png?v=1660557379&width=100" alt="product" />
                    </div>
                  </div>
                  <div className='Order-Product-Detail-Section'>
                    <div className='Product-Title-Section'>
                      <span className='Product-Title'>
                        1 Year Extended Warranty
                        <h3 className='Product-Extras'>This limited warranty applies to any repair or replacement item.</h3>
                      </span>
                      <h2 className='Product-Title'>€4.99</h2>
                    </div>

                  </div>
                </Stack>
              </div>
            }
            checked={oneYearwarranty}
            onChange={handleOneYearWarraty}
          />
        </Card>
      </div>

      <div className='Order-Summary-InnerCards Warranty-Options'>
        <Card sectioned>
          <Checkbox
            label={
              <div className='Order-Product-Details'>
                <Stack>
                  <div className='Order-Product-Image-Section'>
                    <div className='Order-Product-Image'>
                      <img src="https://cdn.shopify.com/s/files/1/0516/2831/0707/products/14-1.jpg?v=1665588654&width=40&width=100" alt="product" />
                    </div>
                  </div>
                  <div className='Order-Product-Detail-Section'>
                    <div className='Product-Title-Section'>
                      <span className='Product-Title'>
                        Buy 1 Get 2 - Aglaonema Plant
                        <h3 className='Product-Extras'>Special offer for you</h3>
                      </span>
                      <h2 className='Product-Title'>Free</h2>
                    </div>

                  </div>
                </Stack>
              </div>
            }
            checked={buy1Get1warranty}
            onChange={handleBuy1Get1warranty}
          />
        </Card>
      </div>
    </>
  )
}
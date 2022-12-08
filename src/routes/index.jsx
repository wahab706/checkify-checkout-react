import { Page, Layout, Card, Stack, Button, Checkbox, RadioButton, TextField, Text, Tabs, Form, FormLayout } from '@shopify/polaris';
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chekifyLogo from '../assets/chekifyLogo.svg'
import paypalLogo from '../assets/paypalLogo.svg'
import card from '../assets/card.png'
import paypal from '../assets/paypal.png'
import gift from '../assets/gift.webp'
import paypalFullLogo from '../assets/paypalFullLogo.svg'
import paypalRedirect from '../assets/paypalRedirect.svg'
import AmEx from '../assets/AmEx.svg'
import master from '../assets/master.svg'
import union from '../assets/union.svg'
import visa from '../assets/visa.svg'
import lock from '../assets/lock.svg'
import { ShippingForm, BillingForm } from '../components'

export default function HomePage() {

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'Pakistan',
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

  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiration: '',
    cvc: '',
  })

  const [signUpExclusive, setSignUpExclusive] = useState(true);
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
  const [shippingOptionsValue, setShippingOptionsValue] = useState('pro');
  const [discountCode, setDiscountCode] = useState();
  const [oneYearwarranty, setOneYearWarraty] = useState(false);
  const [buy1Get1warranty, setBuy1Get1warranty] = useState(true);
  const [paymentOptionsValue, setPaymentOptionsValue] = useState('card')
  const [paymentSelectedTab, setPaymentSelectedTab] = useState(0);
  const [headerPanelStatus, setHeaderPanelStatus] = useState(false)
  const [cartTimer, setCartTimer] = useState(true)


  const handleShippingDetails = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })
  }

  const handleBillingDetails = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value })
  }

  const handleCardDetails = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value })
  }

  const handleSignUpExclusive = useCallback((newChecked) => setSignUpExclusive(newChecked), []);
  const handleIsBillingAddressSame = useCallback((newChecked) => setIsBillingAddressSame(newChecked), []);
  const handleShippingOptionsValue = useCallback((_checked, newValue) => setShippingOptionsValue(newValue), [],);
  const handleDiscountCode = useCallback((newValue) => setDiscountCode(newValue), []);
  const handleOneYearWarraty = useCallback((newChecked) => setOneYearWarraty(newChecked), []);
  const handleBuy1Get1warranty = useCallback((newChecked) => setBuy1Get1warranty(newChecked), []);
  const handlePaymentTabChange = useCallback((selectedTabIndex) => setPaymentSelectedTab(selectedTabIndex), [],);
  const handlePaymentOptionsValue = useCallback((_checked, newValue) => {
    setPaymentOptionsValue(newValue),
      setPaymentSelectedTab(0)
  });

  const handlePaymentSubmit = useCallback((_event) => {
    console.log('payment submit');
  }, []);

  const paymentDetailTabs = [
    {
      id: '1',
      content: (
        <span>
          <svg className='Tab-Icon' role="presentation" fill="var(--colorIcon)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 4a2 2 0 012-2h12a2 2 0 012 2H0zm0 2v6a2 2 0 002 2h12a2 2 0 002-2V6H0zm3 5a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1z">
            </path>
          </svg>
          <Text variant="headingSm" as="h6">
            Card
          </Text>
        </span>
      ),
    },
    {
      id: '2',
      content: (
        <span>
          <svg viewBox="0 0 16 16" className='Tab-Icon' fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
            <path d="M0 2.564A2.562 2.562 0 0 1 2.563 0h10.875A2.562 2.562 0 0 1 16 2.564v10.872A2.563 2.563 0 0 1 13.437 16H2.563A2.563 2.563 0 0 1 0 13.437V2.564Z" fill="#fff"></path><path d="M2.563 0A2.562 2.562 0 0 0 0 2.564v10.873A2.563 2.563 0 0 0 2.563 16h10.874A2.563 2.563 0 0 0 16 13.437v-.111c-.048-.02-4.158-1.735-6.248-2.74-1.41 1.735-3.227 2.787-5.115 2.787-3.192 0-4.276-2.793-2.764-4.632.33-.401.89-.784 1.76-.998 1.36-.335 3.527.208 5.557.878.365-.672.673-1.413.901-2.202H3.835v-.634h3.226V4.65H3.154v-.634H7.06v-1.62s0-.274.277-.274h1.577v1.894h3.863v.634H8.915v1.136h3.153a12.897 12.897 0 0 1-1.335 3.373c.957.346 1.816.674 2.456.889 2.135.714 2.734.801 2.811.81V2.565A2.562 2.562 0 0 0 13.438 0H2.563Zm1.755 8.669a4.773 4.773 0 0 0-.414.023c-.4.04-1.15.216-1.56.58-1.23 1.072-.494 3.032 1.995 3.032 1.447 0 2.893-.925 4.028-2.406-1.464-.714-2.725-1.244-4.05-1.23Z"
              fill="#00A1E9">
            </path>
          </svg>
          <Text variant="headingSm" as="h6">
            Alipay
          </Text>
        </span>
      ),
    },
    {
      id: '3',
      content: (
        <span>
          <svg viewBox="0 0 22 16" className='Tab-Icon' fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.34 13.09a1.817 1.817 0 0 1-1.147.407H1.817C.8 13.497 0 12.647 0 11.659V6.254c0-.896.645-1.62 1.48-1.777a.897.897 0 0 1-.11-.42v-.765C1.423 1.62 2.817.3 4.504.3 6.223.3 7.64 1.67 7.64 3.389v.669c0 .157-.043.3-.11.42.843.16 1.48.905 1.48 1.79l-.001.6a3.552 3.552 0 0 1 2.898-1.504c1.237 0 2.32.635 2.957 1.594a2.5 2.5 0 0 1 2.326-1.594h3.538v2.808h-.047c.518.463.844 1.137.844 1.88 0 1.354-1.091 2.507-2.46 2.527H11.17V15.7H8.34v-2.61Z" fill="#fff"></path><path d="M19.054 8.237c.974.014 1.771.83 1.771 1.814 0 .985-.797 1.814-1.77 1.828h-5.291c.66-.276.986-.826 1.321-1.47h3.944a.364.364 0 0 0 .376-.36.374.374 0 0 0-.376-.374h-1.84c-.99 0-1.796-.812-1.796-1.805 0-.994.806-1.806 1.797-1.806h2.838v1.408H17.19a.39.39 0 0 0-.376.391c0 .208.169.374.376.374h1.864Zm-7.147-2.173c1.58 0 2.86 1.297 2.86 2.896 0 1.6-1.283 2.919-2.863 2.919h-1.433V15H9.04V8.965c0-1.599 1.287-2.9 2.867-2.9Zm0 4.346a1.44 1.44 0 0 0 1.442-1.45c0-.81-.647-1.469-1.442-1.469-.795 0-1.436.66-1.436 1.47v1.449h1.436Z" fill="#5F6360"></path><path d="M4.511 11.879h3.782c-.09.52-.549.918-1.1.918H1.817c-.615 0-1.117-.52-1.117-1.138V6.254a1.11 1.11 0 0 1 1.117-1.108h5.376c.614 0 1.117.506 1.117 1.123l-.006 4.14H4.511c-.581 0-1.085-.275-1.334-.764h4.22v-.702a2.9 2.9 0 0 0-2.892-2.895c-1.35 0-2.486.94-2.796 2.203 0 0-.085.423-.085.698 0 .276.09.695.09.695.307 1.266 1.444 2.235 2.797 2.235Zm-.006-4.457c.579 0 1.082.356 1.332.815H3.172c.25-.459.754-.815 1.333-.815ZM6.94 3.389v.669c0 .086-.075.17-.163.17h-.896c-.088 0-.159-.084-.159-.17v-.67c0-.658-.545-1.194-1.217-1.194s-1.218.536-1.218 1.195v.669c0 .086-.077.17-.164.17h-.896c-.088 0-.157-.084-.157-.17v-.735C2.105 2.034 3.18 1 4.504 1 5.85 1 6.94 2.07 6.94 3.389Z"
              fill="#A41760">
            </path>
          </svg>
          <Text variant="headingSm" as="h6">
            EPS
          </Text>
        </span>
      ),
    },
  ];

  useEffect(() => {
    console.log('isBillingAddressSame: ', isBillingAddressSame);
  }, [isBillingAddressSame])

  // useEffect(() => {
  //   function countdown(elementName, minutes, seconds) {
  //     var element, endTime, hours, mins, msLeft, time;

  //     function twoDigits(n) {
  //       return (n <= 9 ? "0" + n : n);
  //     }

  //     function updateTimer() {
  //       msLeft = endTime - (+new Date);
  //       if (msLeft < 1000) {
  //         element.innerHTML = "Time is up!";
  //       } else {
  //         time = new Date(msLeft);
  //         hours = time.getUTCHours();
  //         mins = time.getUTCMinutes();
  //         element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
  //         setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
  //       }
  //     }

  //     element = document.getElementById(elementName);
  //     endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
  //     updateTimer();
  //   }

  //   countdown("ten-countdown", 10, 0);

  // }, [])


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

            {/* <div className='Cart-Timer-Section'>
              <div className='Cart-Timer-Section-Info'>
                {'Your cart is reserved for '}
                <span id='ten-countdown'></span>
              </div>
            </div> */}

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

            {/* <div className='PayButton BuyNowButton'>
              <Card sectioned>
                <Button>
                  <div className='BuyNowButton-Content'>
                    <span className='BuyNowButton-Text'>Buy now</span>
                    <canvas class="BuyNowButton-Icon"></canvas>
                  </div>
                </Button>
              </Card>
            </div> */}

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
                <ShippingForm
                  shippingDetails={shippingDetails}
                  handleShippingDetails={handleShippingDetails}
                />
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
                        <span className='Shipping-Options-Description-Title'>
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
                        <span className='Shipping-Options-Description-Title'>
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
                        <span className='Shipping-Options-Description-Title'>
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

                <div>
                  <span className={`${!isBillingAddressSame ? ' ' : 'visually-hidden'}`}>
                    <BillingForm
                      billingDetails={billingDetails}
                      handleBillingDetails={handleBillingDetails}
                    />
                  </span>
                </div>

              </Card>
            </div>

            <div className='Test-Section-Desktop'>
              {TestSection()}
            </div>

          </Layout.Section>

          <Layout.Section secondary>
            <div className='Order-Summary'>
              <div className='Header-Mobile' onClick={() => setHeaderPanelStatus(!headerPanelStatus)}>
                <div className='Panel-Status'>
                  <h1> {headerPanelStatus ? 'Hide Order Summary' : 'Show Order Summary'} </h1>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    {headerPanelStatus ?
                      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path> :
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    }
                  </svg>
                </div>
                <div className='Total-Price'>€75.84</div>
              </div>
              <h1 className='Checikfy-Heading'>Order Summary</h1>

              {/* <div className='Cart-Timer-Section'>
                  <div className='Cart-Timer-Section-Info'>
                    {'Your cart is reserved for '}
                    <span id='ten-countdown'></span>
                  </div>
              </div> */}

              <span className={`${!headerPanelStatus && 'Order-Summary-Hidden'}`}>
                <Card sectioned>
                  <div className='Subdued-Card-Section'>
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

                      <span className='Discount-Input-Desktop'>
                        {DiscountCode(discountCode, handleDiscountCode)}
                      </span>

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

                  <div className='Subdued-Card-Section Warranty-Options'>
                    <span className='Warranty-Options-Mobile'>
                      {oneYearwarranty &&
                        <Card sectioned>
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
                        </Card>
                      }
                    </span>
                    <span className='Warranty-Options-Desktop'>
                      <Card sectioned>
                        {ProductWarrantyOption1(oneYearwarranty, handleOneYearWarraty)}
                      </Card>
                    </span>
                  </div>

                  <div className='Subdued-Card-Section Warranty-Options'>
                    <span className='Warranty-Options-Mobile'>
                      {buy1Get1warranty &&
                        <Card sectioned>
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
                        </Card>
                      }
                    </span>
                    <span className='Warranty-Options-Desktop'>
                      <Card sectioned>
                        {ProductWarrantyOption2(buy1Get1warranty, handleBuy1Get1warranty)}
                      </Card>
                    </span>
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
              </span>

            </div>

            <div className='Product-Offers-Mobile'>
              <h1 className='Checikfy-Heading'>Product Offers</h1>
              <Card sectioned>
                <div className=' Warranty-Options'>
                  {ProductWarrantyOption1(oneYearwarranty, handleOneYearWarraty)}
                </div>

                <div className=' Warranty-Options'>
                  {ProductWarrantyOption2(buy1Get1warranty, handleBuy1Get1warranty)}
                </div>
              </Card>
            </div>

            <div className='Discount-Mobile'>
              <h1 className='Checikfy-Heading'>Discount Code</h1>
              <Card sectioned>
                {DiscountCode(discountCode, handleDiscountCode)}
              </Card>
            </div>

            <div className='Payment-Section'>
              <h1 className='Checikfy-Heading'>Payment Method</h1>
              <Card sectioned>
                <Stack vertical>
                  <div className='Payment-Option-Card'>
                    <RadioButton
                      label='Payment Details'
                      checked={paymentOptionsValue === 'card'}
                      id="card"
                      name="card"
                      onChange={handlePaymentOptionsValue}
                    />

                    <span className={`${paymentOptionsValue === 'card' ? ' ' : 'visually-hidden'}`}>
                      <Tabs
                        tabs={paymentDetailTabs}
                        selected={paymentSelectedTab}
                        onSelect={handlePaymentTabChange}
                        fitted
                      // disclosureText="More views"
                      >
                        {(() => {
                          switch (paymentSelectedTab) {
                            case 1:
                              return (
                                <div className='Subdued-Card-Section'>
                                  <Card sectioned>
                                    <svg viewBox="0 0 16 16" className='Payment-Option-Icon' fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
                                      <path d="M0 2.564A2.562 2.562 0 0 1 2.563 0h10.875A2.562 2.562 0 0 1 16 2.564v10.872A2.563 2.563 0 0 1 13.437 16H2.563A2.563 2.563 0 0 1 0 13.437V2.564Z" fill="#fff"></path><path d="M2.563 0A2.562 2.562 0 0 0 0 2.564v10.873A2.563 2.563 0 0 0 2.563 16h10.874A2.563 2.563 0 0 0 16 13.437v-.111c-.048-.02-4.158-1.735-6.248-2.74-1.41 1.735-3.227 2.787-5.115 2.787-3.192 0-4.276-2.793-2.764-4.632.33-.401.89-.784 1.76-.998 1.36-.335 3.527.208 5.557.878.365-.672.673-1.413.901-2.202H3.835v-.634h3.226V4.65H3.154v-.634H7.06v-1.62s0-.274.277-.274h1.577v1.894h3.863v.634H8.915v1.136h3.153a12.897 12.897 0 0 1-1.335 3.373c.957.346 1.816.674 2.456.889 2.135.714 2.734.801 2.811.81V2.565A2.562 2.562 0 0 0 13.438 0H2.563Zm1.755 8.669a4.773 4.773 0 0 0-.414.023c-.4.04-1.15.216-1.56.58-1.23 1.072-.494 3.032 1.995 3.032 1.447 0 2.893-.925 4.028-2.406-1.464-.714-2.725-1.244-4.05-1.23Z"
                                        fill="#00A1E9">
                                      </path>
                                    </svg>
                                    <p>Alipay selected.</p>
                                    <hr />
                                    <p className='Payment-Option-Guide'>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40" role="presentation">
                                        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M9 1a4 4 0 00-4 4v30a4 4 0 004 4h18a4 4 0 004-4v-9a1 1 0 10-2 0v9a2 2 0 01-2 2H9a2 2 0 01-2-2V14a2 2 0 012-2h18a2 2 0 012 2v2a1 1 0 102 0V5a4 4 0 00-4-4H9zm26.992 15.409L39.583 20H24a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM7 8.5A1.5 1.5 0 018.5 7h19a1.5 1.5 0 010 3h-19A1.5 1.5 0 017 8.5zM23 3a1 1 0 100 2 1 1 0 000-2zm-8 1a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 30a1 1 0 100 2h6a1 1 0 100-2h-6z">
                                        </path>
                                      </svg>
                                      After submission, you will be redirected to securely complete next steps.
                                    </p>
                                  </Card>
                                </div>
                              )
                            case 2:
                              return (
                                <div className='Subdued-Card-Section'>
                                  <Card sectioned>
                                    <svg viewBox="0 0 22 16" className='Payment-Option-Icon' fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M8.34 13.09a1.817 1.817 0 0 1-1.147.407H1.817C.8 13.497 0 12.647 0 11.659V6.254c0-.896.645-1.62 1.48-1.777a.897.897 0 0 1-.11-.42v-.765C1.423 1.62 2.817.3 4.504.3 6.223.3 7.64 1.67 7.64 3.389v.669c0 .157-.043.3-.11.42.843.16 1.48.905 1.48 1.79l-.001.6a3.552 3.552 0 0 1 2.898-1.504c1.237 0 2.32.635 2.957 1.594a2.5 2.5 0 0 1 2.326-1.594h3.538v2.808h-.047c.518.463.844 1.137.844 1.88 0 1.354-1.091 2.507-2.46 2.527H11.17V15.7H8.34v-2.61Z" fill="#fff"></path><path d="M19.054 8.237c.974.014 1.771.83 1.771 1.814 0 .985-.797 1.814-1.77 1.828h-5.291c.66-.276.986-.826 1.321-1.47h3.944a.364.364 0 0 0 .376-.36.374.374 0 0 0-.376-.374h-1.84c-.99 0-1.796-.812-1.796-1.805 0-.994.806-1.806 1.797-1.806h2.838v1.408H17.19a.39.39 0 0 0-.376.391c0 .208.169.374.376.374h1.864Zm-7.147-2.173c1.58 0 2.86 1.297 2.86 2.896 0 1.6-1.283 2.919-2.863 2.919h-1.433V15H9.04V8.965c0-1.599 1.287-2.9 2.867-2.9Zm0 4.346a1.44 1.44 0 0 0 1.442-1.45c0-.81-.647-1.469-1.442-1.469-.795 0-1.436.66-1.436 1.47v1.449h1.436Z" fill="#5F6360"></path><path d="M4.511 11.879h3.782c-.09.52-.549.918-1.1.918H1.817c-.615 0-1.117-.52-1.117-1.138V6.254a1.11 1.11 0 0 1 1.117-1.108h5.376c.614 0 1.117.506 1.117 1.123l-.006 4.14H4.511c-.581 0-1.085-.275-1.334-.764h4.22v-.702a2.9 2.9 0 0 0-2.892-2.895c-1.35 0-2.486.94-2.796 2.203 0 0-.085.423-.085.698 0 .276.09.695.09.695.307 1.266 1.444 2.235 2.797 2.235Zm-.006-4.457c.579 0 1.082.356 1.332.815H3.172c.25-.459.754-.815 1.333-.815ZM6.94 3.389v.669c0 .086-.075.17-.163.17h-.896c-.088 0-.159-.084-.159-.17v-.67c0-.658-.545-1.194-1.217-1.194s-1.218.536-1.218 1.195v.669c0 .086-.077.17-.164.17h-.896c-.088 0-.157-.084-.157-.17v-.735C2.105 2.034 3.18 1 4.504 1 5.85 1 6.94 2.07 6.94 3.389Z"
                                        fill="#A41760">
                                      </path>
                                    </svg>
                                    <p>EPS selected.</p>
                                    <hr />
                                    <p className='Payment-Option-Guide'>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40" role="presentation">
                                        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M9 1a4 4 0 00-4 4v30a4 4 0 004 4h18a4 4 0 004-4v-9a1 1 0 10-2 0v9a2 2 0 01-2 2H9a2 2 0 01-2-2V14a2 2 0 012-2h18a2 2 0 012 2v2a1 1 0 102 0V5a4 4 0 00-4-4H9zm26.992 15.409L39.583 20H24a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM7 8.5A1.5 1.5 0 018.5 7h19a1.5 1.5 0 010 3h-19A1.5 1.5 0 017 8.5zM23 3a1 1 0 100 2 1 1 0 000-2zm-8 1a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 30a1 1 0 100 2h6a1 1 0 100-2h-6z">
                                        </path>
                                      </svg>
                                      After submission, you will be redirected to securely complete next steps.
                                    </p>
                                  </Card>
                                </div>
                              )
                            default:
                              return (
                                <div className='Payment-Card-Form'>
                                  <Form>
                                    <FormLayout>
                                      <FormLayout.Group>
                                        <div>
                                          <div className="Polaris-Labelled__LabelWrapper">
                                            <div className="Polaris-Label">
                                              <label htmlFor='number' className="Polaris-Label__Text">
                                                <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Card number</span>
                                              </label>
                                            </div>
                                          </div>

                                          <div className="Polaris-Connected">
                                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                              <div className="Polaris-TextField">
                                                <input type="number"
                                                  id='number'
                                                  name='number'
                                                  value={cardDetails.number}
                                                  onChange={handleCardDetails}
                                                  placeholder='1234 1234 1234 1234'
                                                  aria-invalid="false"
                                                  className="Polaris-TextField__Input"
                                                />
                                                <div className="Polaris-TextField__Backdrop"> </div>
                                                <div className='Payment-Card-Input-Icon'>
                                                  <img src={visa} alt="visa" />
                                                  <img src={master} alt="master" />
                                                  <img src={AmEx} alt="AmEx" />
                                                  <img src={union} alt="union" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </FormLayout.Group>

                                      <FormLayout.Group condensed>
                                        <div>
                                          <div className="Polaris-Labelled__LabelWrapper">
                                            <div className="Polaris-Label">
                                              <label htmlFor='expiration' className="Polaris-Label__Text">
                                                <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Expiration</span>
                                              </label>
                                            </div>
                                          </div>

                                          <div className="Polaris-Connected">
                                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                              <div className="Polaris-TextField">
                                                <input type="number"
                                                  id='expiration'
                                                  name='expiration'
                                                  value={cardDetails.expiration}
                                                  onChange={handleCardDetails}
                                                  placeholder='MM /YY'
                                                  aria-invalid="false"
                                                  className="Polaris-TextField__Input"
                                                />
                                                <div className="Polaris-TextField__Backdrop"> </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div>
                                          <div className="Polaris-Labelled__LabelWrapper">
                                            <div className="Polaris-Label">
                                              <label htmlFor='cvc' className="Polaris-Label__Text">
                                                <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">CVC</span>
                                              </label>
                                            </div>
                                          </div>

                                          <div className="Polaris-Connected">
                                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                              <div className="Polaris-TextField">
                                                <input type="number"
                                                  id='cvc'
                                                  name='cvc'
                                                  value={cardDetails.cvc}
                                                  onChange={handleCardDetails}
                                                  placeholder='CVC'
                                                  aria-invalid="false"
                                                  className="Polaris-TextField__Input"
                                                />
                                                <div className="Polaris-TextField__Backdrop"> </div>
                                                <div className='Payment-Card-Input-Icon'>
                                                  <svg width="24" height="24"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
                                                    <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M15.337 4A5.493 5.493 0 0013 8.5c0 1.33.472 2.55 1.257 3.5H4a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1v-.6a5.526 5.526 0 002-1.737V18a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h12.337zm6.707.293c.239.202.46.424.662.663a2.01 2.01 0 00-.662-.663z"></path><path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M13.6 6a5.477 5.477 0 00-.578 3H1V6h12.6z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.5 14a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-2.184-7.779h-.621l-1.516.77v.786l1.202-.628v3.63h.943V6.22h-.008zm1.807.629c.448 0 .762.251.762.613 0 .393-.37.668-.904.668h-.235v.668h.283c.565 0 .95.282.95.691 0 .393-.377.66-.911.66-.393 0-.786-.126-1.194-.37v.786c.44.189.88.291 1.312.291 1.029 0 1.736-.526 1.736-1.288 0-.535-.33-.967-.88-1.14.472-.157.778-.573.778-1.045 0-.738-.652-1.241-1.595-1.241a3.143 3.143 0 00-1.234.267v.77c.378-.212.763-.33 1.132-.33zm3.394 1.713c.574 0 .974.338.974.778 0 .463-.4.785-.974.785-.346 0-.707-.11-1.076-.337v.809c.385.173.778.26 1.163.26.204 0 .392-.032.573-.08a4.313 4.313 0 00.644-2.262l-.015-.33a1.807 1.807 0 00-.967-.252 3 3 0 00-.448.032V6.944h1.132a4.423 4.423 0 00-.362-.723h-1.587v2.475a3.9 3.9 0 01.943-.133z">
                                                    </path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </FormLayout.Group>
                                    </FormLayout>
                                  </Form>
                                </div>
                              )
                          }
                        })()}
                      </Tabs>
                    </span>
                  </div>

                  <div className='Payment-Option-Paypal'>
                    <RadioButton
                      label={
                        <span className='Payment-Options-Paypal-Label'>
                          Paypal
                          <img src={paypalFullLogo} alt="paypal" />
                        </span>
                      }
                      checked={paymentOptionsValue === 'paypal'}
                      id="paypal"
                      name="paypal"
                      onChange={handlePaymentOptionsValue}
                    />

                    <span className={`${paymentOptionsValue === 'paypal' ? 'Subdued-Card-Section' : 'visually-hidden Subdued-Card-Section'}`}>
                      <Card sectioned>
                        <img src={paypalRedirect} alt="Paypal Redirect" />
                        <Text variant="headingSm" as="h6" alignment='center'>
                          After clicking the Complete Purchase you will be redirected to a PayPal payment window.
                        </Text>
                      </Card>
                    </span>
                  </div>

                  <div className='Payment-Option-Cod'>
                    <RadioButton
                      label='Cash on Delivery'
                      checked={paymentOptionsValue === 'cod'}
                      id="cod"
                      name="cod"
                      onChange={handlePaymentOptionsValue}
                    />

                    <span className={`${paymentOptionsValue === 'cod' ? 'Subdued-Card-Section' : 'visually-hidden Subdued-Card-Section'}`}>
                      <Card sectioned>
                        <Text variant="headingSm" as="h6" alignment='center'>
                          By clicking the Complete Purchase you will place your order without online transaction and will be able to make
                          offline payment later. Please note that you may be charged an additional fee for using this payment method.
                        </Text>
                      </Card>
                    </span>
                  </div>

                  <Button submit>Complete Purchase</Button>
                </Stack>
              </Card>

              <div className='Payment-Section-Footer'>
                <div className='Payment-Footer-Left'>
                  <img src={lock} alt="lock" />
                  <span>Transaction secured</span>
                </div>

                <div className='Payment-Footer-Right'>
                  <span>©️ </span>
                  <img src={chekifyLogo} alt="checkify" />
                </div>
              </div>
            </div>

            <div className='Test-Section-Mobile'>
              {TestSection()}
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

function OrderSummary() {
  return (
    <>

    </>
  )
}

function ProductWarrantyOption1(oneYearwarranty, handleOneYearWarraty) {
  return (
    <>
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
    </>
  )
}

function ProductWarrantyOption2(buy1Get1warranty, handleBuy1Get1warranty) {
  return (
    <>
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
    </>
  )
}

function TestSection() {
  return (
    <>
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

    </>
  )
}
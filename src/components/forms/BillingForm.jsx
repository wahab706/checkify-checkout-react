import React from 'react'
import { Form, FormLayout } from '@shopify/polaris';

export function BillingForm({ billingDetails, handleBillingDetails }) {
    return (
        <div className='Billing-Form'>
            <Form>
                <FormLayout>
                    <FormLayout.Group>
                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-TextField">
                                    <input type="text"
                                        name='firstName'
                                        value={billingDetails.firstName}
                                        onChange={handleBillingDetails}
                                        placeholder='First Name'
                                        aria-invalid="false"
                                        className="Polaris-TextField__Input"
                                    />
                                    <div className="Polaris-TextField__Backdrop"> </div>
                                </div>
                            </div>
                        </div>

                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-TextField">
                                    <input type="text"
                                        name='lastName'
                                        value={billingDetails.lastName}
                                        onChange={handleBillingDetails}
                                        placeholder='Last Name'
                                        aria-invalid="false"
                                        className="Polaris-TextField__Input"
                                    />
                                    <div className="Polaris-TextField__Backdrop"> </div>
                                </div>
                            </div>
                        </div>
                    </FormLayout.Group>

                    <FormLayout.Group>
                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-TextField">
                                    <input type="text"
                                        name='address'
                                        value={billingDetails.address}
                                        onChange={handleBillingDetails}
                                        placeholder='Address'
                                        aria-invalid="false"
                                        className="Polaris-TextField__Input"
                                    />
                                    <div className="Polaris-TextField__Backdrop"> </div>
                                </div>
                            </div>
                        </div>
                    </FormLayout.Group>

                    <FormLayout.Group>
                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-TextField">
                                    <input type="text"
                                        name='city'
                                        value={billingDetails.city}
                                        onChange={handleBillingDetails}
                                        placeholder='City'
                                        aria-invalid="false"
                                        className="Polaris-TextField__Input"
                                    />
                                    <div className="Polaris-TextField__Backdrop"> </div>
                                </div>
                            </div>
                        </div> 

                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-TextField">
                                    <input type="number"
                                        name='zipCode'
                                        value={billingDetails.zipCode}
                                        onChange={handleBillingDetails}
                                        placeholder='Zip Code'
                                        aria-invalid="false"
                                        className="Polaris-TextField__Input"
                                    />
                                    <div className="Polaris-TextField__Backdrop"> </div>
                                </div>
                            </div>
                        </div>
                    </FormLayout.Group>

                    <FormLayout.Group>
                        <div className="Polaris-Connected">
                            <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                <div className="Polaris-Select">
                                    <select
                                        name='country'
                                        value={billingDetails.country}
                                        onChange={handleBillingDetails}
                                        className="Polaris-Select__Input"
                                        aria-invalid="false">

                                        <option value="pakistan">Pakistan</option>
                                        <option value="india">India</option>
                                        <option value="china">China</option>
                                    </select>
                                    <div className="Polaris-Select__Content" aria-hidden="true">
                                        <span className="Polaris-Select__SelectedOption">{billingDetails.country}</span>
                                        <span className="Polaris-Select__Icon">
                                            <span className="Polaris-Icon">
                                                <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--visuallyHidden">
                                                </span>
                                                <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M7.676 9h4.648c.563 0 .879-.603.53-1.014l-2.323-2.746a.708.708 0 0 0-1.062 0l-2.324 2.746c-.347.411-.032 1.014.531 1.014Zm4.648 2h-4.648c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="Polaris-TextField__Backdrop"> </div>
                            </div>
                        </div>
                    </FormLayout.Group>


                </FormLayout>
            </Form>
        </div>
    )
}

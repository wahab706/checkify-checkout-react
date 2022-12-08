import React, { useMemo, useEffect } from 'react'
import { Form, FormLayout, Select, } from '@shopify/polaris';
import countryList from 'react-select-country-list'

export function ShippingForm({ shippingDetails, handleShippingDetails }) {
    const options = useMemo(() => countryList().getData(), [])

    return (
        <Form>
            <FormLayout>
                <FormLayout.Group>
                    <div className="Polaris-Connected">
                        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                            <div className="Polaris-TextField">
                                <input type="email"
                                    name='email'
                                    value={shippingDetails.email}
                                    onChange={handleShippingDetails}
                                    placeholder='Email Address'
                                    aria-invalid="false"
                                    required
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
                                    name='firstName'
                                    value={shippingDetails.firstName}
                                    onChange={handleShippingDetails}
                                    placeholder='First Name'
                                    aria-invalid="false"
                                    required
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
                                    value={shippingDetails.lastName}
                                    onChange={handleShippingDetails}
                                    placeholder='Last Name'
                                    aria-invalid="false"
                                    required
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
                                    value={shippingDetails.address}
                                    onChange={handleShippingDetails}
                                    placeholder='Address'
                                    aria-invalid="false"
                                    required
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
                                    value={shippingDetails.city}
                                    onChange={handleShippingDetails}
                                    placeholder='City'
                                    aria-invalid="false"
                                    required
                                    className="Polaris-TextField__Input"
                                />
                                <div className="Polaris-TextField__Backdrop"> </div>
                            </div>
                        </div>
                    </div>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    <div className="Polaris-Connected">
                        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                            <div className="Polaris-Select">
                                <select
                                    name='country'
                                    value={shippingDetails.country}
                                    onChange={handleShippingDetails}
                                    className="Polaris-Select__Input"
                                    aria-invalid="false">

                                    {options?.map((item, index) => {
                                        return (
                                            <option value={item.label} key={index}> {item.label}</option>
                                        )
                                    })}

                                </select>
                                <div className="Polaris-Select__Content" aria-hidden="true">
                                    <span className="Polaris-Select__SelectedOption">{shippingDetails.country}</span>
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

                    <div className="Polaris-Connected">
                        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                            <div className="Polaris-TextField">
                                <input type="text"
                                    name='state'
                                    value={shippingDetails.state}
                                    onChange={handleShippingDetails}
                                    placeholder='State'
                                    aria-invalid="false"
                                    required
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
                                    value={shippingDetails.zipCode}
                                    onChange={handleShippingDetails}
                                    placeholder='Zip Code'
                                    aria-invalid="false"
                                    required
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
                                    name='experience'
                                    value={shippingDetails.experience}
                                    onChange={handleShippingDetails}
                                    className="Polaris-Select__Input"
                                    aria-invalid="false">

                                    <option value="It's awesome!">It's awesome!</option>
                                    <option value="It's great :)">It's great :)</option>
                                    <option value="It's okay...">It's okay...</option>
                                    <option value="It can be better :(">It can be better :(</option>
                                </select>


                                <div className="Polaris-Select__Content" aria-hidden="true">
                                    <span className="Polaris-Select__SelectedOption">{shippingDetails.experience}</span>
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
    )
}

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <>
            <style>
                {`
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f7f6;
                    margin: 0;
                    padding: 0;
                    color: #333;
                }

                header {
                    background-color: black;
                    color: white;
                    text-align: center;
                    padding: 20px;
                }

                h1 {
                    font-size: 2.5em;
                    margin: 0;
                }

                section {
                    margin: 20px;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                section a{
                    color: blue;
                }

                h2 {
                    color: #black;
                    font-size: 1.8em;
                    border-bottom: 2px solid black;
                    padding-bottom: 5px;
                }

                h3 {
                    color: #black;
                    font-size: 1.5em;
                    margin-top: 15px;
                }

                h4 {
                    color: #black;
                    font-size: 1.3em;
                    margin-top: 10px;
                }

                p, ul {
                    font-size: 1.1em;
                    line-height: 1.8;
                    margin: 15px 0;
                }

                ul {
                    margin-left: 20px;
                }

                li {
                    margin-bottom: 10px;
                }

                footer {
                    color: black;
                    font-size: 0.9em;
                }

                footer a {
                    color: #white;
                    text-decoration: none;
                }
                `}
            </style>

            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-left pt-40 mb-8">
                <header>
                    <h1>Privacy Policy</h1>
                    <p>Last updated: Jan 25, 2025</p>
                </header>

                <section>
                    <h2>Introduction</h2>
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                    <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.</p>
                </section>

                <section>
                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>

                    <h3>Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                        <li><strong>Company</strong> refers to Fosl X (SMC) Pvt Ltd, located in Peshawar, KPK, Pakistan.</li>
                        <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing details of Your browsing history.</li>
                        <li><strong>Country</strong> refers to: Pakistan</li>
                        <li><strong>Device</strong> means any device that can access the Service, such as a computer, cellphone, or digital tablet.</li>
                        <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                        <li><strong>Service</strong> refers to the Website.</li>
                        <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                        <li><strong>Usage Data</strong> refers to data collected automatically from the Service.</li>
                        <li><strong>Website</strong> refers to Fosl X, accessible from <a href="https://foslx.com" target="_blank" rel="noopener noreferrer">foslx.com</a></li>
                        <li><strong>You</strong> means the individual accessing or using the Service.</li>
                    </ul>
                </section>

                <section>
                    <h2>Collecting and Using Your Personal Data</h2>
                    <h3>Types of Data Collected</h3>
                    <h4>Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                    </ul>

                    <h4>Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service, including information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, and the time and date of Your visit.</p>
                </section>

                <section>
                    <h2>Tracking Technologies and Cookies</h2>
                    <p>We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. These technologies may include:</p>
                    <ul>
                        <li><strong>Cookies</strong> (small files placed on Your Device)</li>
                        <li><strong>Web Beacons</strong> (electronic files used for counting users)</li>
                    </ul>
                    <p>Cookies can be "Persistent" or "Session" Cookies, and We use them to improve and analyze Our Service, provide a more personal experience, and enhance security.</p>
                </section>

                <section>
                    <h2>Use of Your Personal Data</h2>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain the Service.</li>
                        <li>To manage Your Account.</li>
                        <li>For the performance of a contract.</li>
                        <li>To contact You regarding updates or offers.</li>
                        <li>To evaluate and improve the Service and user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2>Retention of Your Personal Data</h2>
                    <p>The Company will retain Your Personal Data only for as long as necessary to comply with legal obligations or to resolve disputes.</p>
                </section>

                <section>
                    <h2>Transfer of Your Personal Data</h2>
                    <p>Your information may be processed outside of Your jurisdiction, and by submitting Your information, You consent to this transfer.</p>
                </section>

                <section>
                    <h2>Delete Your Personal Data</h2>
                    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may also contact Us for assistance with your personal information.</p>
                </section>

                <section>
                    <h2>Disclosure of Your Personal Data</h2>
                    <p>Your Personal Data may be disclosed in certain situations, such as in business transactions or to comply with legal obligations.</p>
                </section>

                <section>
                    <h2>Security of Your Personal Data</h2>
                    <p>While We strive to protect Your Personal Data, no method of transmission over the Internet is completely secure. We cannot guarantee absolute security.</p>
                </section>

                <section>
                    <h2>Children's Privacy</h2>
                    <p>Our Service does not address anyone under the age of 13. If We become aware that We have collected Personal Data from anyone under 13, We will take steps to remove that information.</p>
                </section>

                <section>
                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to third-party websites. We have no control over the content or privacy policies of these sites.</p>
                </section>

                <section>
                    <h2>Changes to this Privacy Policy</h2>
                    <p>We may update Our Privacy Policy from time to time. We will notify You of changes by posting the new Privacy Policy on this page.</p>
                </section>

                <section>
                    <h2>Note</h2>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <p>By email: <a href="mailto:contact@foslx.com">contact@foslx.com</a></p>
                </section>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default TermsCondition;
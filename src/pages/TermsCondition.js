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
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: Jan 25, 2025</p>
                </header>

                <section>
                    <h2>Introduction</h2>
                    <p>Please read these terms and conditions carefully before using Our Service.</p>
                </section>

                <section>
                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                    <h3>Definitions</h3>
                    <p>For the purposes of these Terms and Conditions:</p>
                    <ul>
                        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                        <li><strong>Country</strong> refers to: Pakistan</li>
                        <li><strong>Company</strong> refers to Fosl X (SMC) Pvt Ltd, located in Peshawar, KPK, Pakistan.</li>
                        <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                        <li><strong>Service</strong> refers to the Website.</li>
                        <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.</li>
                        <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                        <li><strong>Website</strong> refers to Fosl X, accessible from <a href="https://foslx.com" target="_blank" rel="noopener noreferrer">foslx.com</a></li>
                        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    </ul>
                </section>

                <section>
                    <h2>Acknowledgment</h2>
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                    <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                </section>

                <section>
                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                </section>

                <section>
                    <h2>Termination</h2>
                    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                    <p>Upon termination, Your right to use the Service will cease immediately.</p>
                </section>

                <section>
                    <h2>Limitation of Liability</h2>
                    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                    <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                </section>

                <section>
                    <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                    <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                    <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                    <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                </section>

                <section>
                    <h2>Governing Law</h2>
                    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                </section>

                <section>
                    <h2>Disputes Resolution</h2>
                    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                </section>

                <section>
                    <h2>For European Union (EU) Users</h2>
                    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
                </section>

                <section>
                    <h2>United States Legal Compliance</h2>
                    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                </section>

                <section>
                    <h2>Severability and Waiver</h2>
                    <h3>Severability</h3>
                    <p>If any provision of these Terms and Conditions is held to be invalid or unenforceable, the remaining provisions of these Terms and Conditions will remain in full force and effect.</p>
                </section>

                <section>
                    <h2>Changes to this Terms and Conditions</h2>
                    <p>We may update Our Terms and Conditions from time to time. We will notify You of changes by posting the new Terms and Conditions on this page.</p>
                </section>

                <section>
                    <h2>Note</h2>
                    <p>If you have any questions about this Terms and Conditions, You can contact us:</p>
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
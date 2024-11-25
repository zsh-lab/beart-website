import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div style={{ padding: '2rem', overflowY: 'scroll', height: '100vh', width: '100wh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Privacy</h1>
            <div style={{ maxWidth: '100%', textAlign: 'left' }}>
                <h2>User License Agreement</h2>
                <p>
                    This User License Agreement (hereinafter referred to as the “Agreement”) and its terms constitute an agreement between you and this software, establishing the rights and obligations regarding the downloading, installation, and use of this software (hereinafter referred to as the “Software”).
                </p>
                <p>
                    Please read carefully and choose whether to accept or reject this Agreement (minors should read under the supervision of a legal guardian).
                </p>
                <p>
                    If you disagree with any terms of this Agreement or with future amendments and supplements, you may choose not to use the service. Your registration, login, and use will be deemed as acceptance of the Agreement, and you agree to be bound by all terms of the Agreement.
                </p>
                <p>
                    This Agreement may be updated at any time, and the updated terms will replace the previous version upon publication without separate notification. If you do not accept the revised terms after the Agreement is modified, please stop using the services provided immediately. Continued use of the services will be regarded as acceptance of the modified terms.
                </p>

                <h2>Intellectual Property Statement</h2>
                <p>
                    All intellectual property rights of this software and all associated content, including but not limited to text, icons, graphics, images, charts, color schemes, interface design, layout structure, relevant data, additional programs, printed materials, or electronic documents, are owned by us and are protected by copyright law, international copyright treaties, and other intellectual property laws and regulations.
                </p>
                <p>
                    Without written consent, users are prohibited from using, transferring, or licensing any third party to use or transfer the above intellectual property rights for any commercial or non-commercial purpose. We reserve the right to pursue legal responsibility against those who engage in such unauthorized conduct.
                </p>

                <h2>Scope of Authorization</h2>
                <p>
                    The Software is free of charge, and users may install, use, display, and run the Software on end devices for non-commercial purposes. Users may copy, distribute, and share the Software for non-commercial purposes and without restrictions on quantity. Each copy, distribution, and sharing must be complete and authentic, including all relevant software, electronic documentation, copyright, trademark, and this Agreement.
                </p>

                <h2>Retained Rights</h2>
                <p>
                    Any rights not expressly authorized here remain reserved by us, and users must obtain written consent for any other usage.
                </p>

                <h2>Privacy Protection</h2>
                <p>
                    We fully understand and respect users’ reasonable expectations of privacy protection and commit to using reasonable means to protect users’ personal privacy in accordance with the law.
                </p>
                <p>
                    Except as required by law or authorized governmental agencies, we will not disclose or share users’ personal information to any third party without user consent. Users who agree to this Agreement or have otherwise agreed with us or our partners to disclose or use personal information accept any resulting risks. We are not liable for these risks.
                </p>
                <p>
                    Users agree that the Privacy Policy also governs their use of the provided services.
                </p>

                <h2>User Usage</h2>
                <p>
                    To prevent data loss on user terminals and to better serve users, we offer data backup services to registered users. With authorization, the data stored in the registered user’s terminal database will be uploaded to the server, and recovery services are provided to restore data to the user’s terminal device.
                </p>
                <p>
                    Users are responsible for the authenticity, legality, harmlessness, and effectiveness of information transmitted and shall bear all legal responsibility for related issues. We are not responsible for any content recorded by users or transmitted through the service, as it does not reflect our views or policies.
                </p>
                <p>
                    Users may not use the Software to produce, upload, copy, or transmit any content that:
                </p>
                <ul>
                    <li>Opposes the fundamental principles of the Constitution;</li>
                    <li>Endangers national security, leaks state secrets, subverts state power, or undermines national unity;</li>
                    <li>Damages national honor and interests;</li>
                    <li>Incites ethnic hatred or ethnic discrimination, or undermines national unity;</li>
                    <li>Undermines state religious policies or promotes cults and feudal superstition;</li>
                    <li>Spreads rumors, disrupts social order, or undermines social stability;</li>
                    <li>Spreads pornography, gambling, violence, murder, terror, or incites crime;</li>
                    <li>Insults or defames others or infringes upon others’ lawful rights;</li>
                    <li>Is prohibited by other laws or administrative regulations.</li>
                </ul>
                <p>
                    The services we provide may contain advertisements, and users agree to see advertisements from us, third-party suppliers, or partners during use. Any disputes arising between users and third parties regarding services or products must be resolved by users and third parties. We bear no responsibility.
                </p>
                <p>
                    We reserve the right to change, suspend, restrict, terminate, or revoke any part or all of the services on our servers at any time without prior notice due to business needs.
                </p>

                <h2>User Rights and Obligations</h2>
                <p>
                    Users have the right to modify or delete data, information, and transmitted content on their terminals. However, deleting such data may also result in the deletion of data uploaded to the server by registered users.
                </p>
                <p>
                    Users must comply with all terms of this Agreement and properly use the services provided. If users violate any terms of this Agreement, we reserve the right to discontinue service to those users and retain the right to retrieve accounts at any time.
                </p>

                <h2>Legal Responsibility and Disclaimer</h2>
                <p>
                    Users bear sole responsibility for any third-party claims resulting from their violation of this Agreement or relevant service terms.
                </p>
                <p>
                    We are not responsible for any losses users suffer due to third parties (e.g., telecommunications departments) or due to communication line failures, technical issues, network or computer malfunctions, system instability, or other force majeure events.
                </p>
                <p>
                    If a technical fault or other force majeure event impacts the normal operation of the services, we commit to cooperating with relevant parties to repair it promptly.
                </p>
                <p>
                    Users understand that, despite our ongoing efforts to provide stable, secure, and convenient software services, we do not assume liability for any losses users incur due to software bugs, user configuration errors, or other factors.
                </p>

                <h2>Other Terms</h2>
                <p>
                    We remind users to carefully read any disclaimers and clauses that may increase user obligations in this Agreement, and to consider risks independently.
                </p>
                <p>
                    Any clause in this Agreement that is partially or entirely invalid does not affect the validity of other clauses.
                </p>
                <p>
                    Any dispute between users and us should first be resolved amicably. If agreement cannot be reached, either party has the right to submit the dispute to the court with jurisdiction in our location to resolve it according to Chinese law.
                </p>
                <p>
                    We reserve the right of final interpretation and modification of this Agreement.
                </p>
            </div>
        </div>
    )
}

export default Privacy;
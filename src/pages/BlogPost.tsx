
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Tag, Calendar } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

// Sample blog posts data (expanded version of the preview data)
const allBlogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Law in Kenya",
    excerpt: "An overview of corporate law regulations and compliance requirements for businesses operating in Kenya.",
    content: `<p>Corporate law in Kenya governs the formation, operation, and dissolution of corporations. It is primarily regulated by the Companies Act of 2015, which replaced the older Companies Act (Cap 486) and modernized Kenya's corporate legal framework to align with international standards.</p>
    <h2>Key Aspects of Corporate Law in Kenya</h2>
    <p>The Companies Act of 2015 introduced several significant changes to improve the business environment:</p>
    <ul>
      <li>Simplified incorporation procedures</li>
      <li>Enhanced corporate governance rules</li>
      <li>Improved protection for minority shareholders</li>
      <li>Clearer regulations on directors' duties and liabilities</li>
      <li>More transparent financial reporting requirements</li>
    </ul>
    <p>Companies operating in Kenya must comply with various regulatory requirements, including:</p>
    <h3>1. Company Registration</h3>
    <p>The registration process involves several steps, including name reservation, preparation of incorporation documents, and filing with the Registrar of Companies. The Business Registration Service (BRS) oversees this process.</p>
    <h3>2. Tax Compliance</h3>
    <p>Companies must register for taxes with the Kenya Revenue Authority (KRA) and comply with various tax obligations, including:</p>
    <ul>
      <li>Corporate Income Tax (30% for resident companies)</li>
      <li>Value Added Tax (VAT) (16% standard rate)</li>
      <li>Pay As You Earn (PAYE) for employee salaries</li>
      <li>Withholding taxes on various payments</li>
    </ul>
    <h3>3. Employment Law Compliance</h3>
    <p>Companies must comply with the Employment Act, which governs the employer-employee relationship, including:</p>
    <ul>
      <li>Minimum wage requirements</li>
      <li>Working hours and leave entitlements</li>
      <li>Termination procedures</li>
      <li>Workplace health and safety standards</li>
    </ul>
    <h2>Corporate Governance</h2>
    <p>Good corporate governance is increasingly important in Kenya's business environment. The Capital Markets Authority (CMA) has issued guidelines that promote transparency, accountability, and responsible management practices.</p>
    <p>Key principles include:</p>
    <ul>
      <li>Board composition and diversity</li>
      <li>Clear separation of ownership and control</li>
      <li>Protection of shareholder rights</li>
      <li>Ethical business conduct</li>
      <li>Risk management and internal controls</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Navigating Kenya's corporate legal landscape requires careful attention to compliance requirements and governance standards. Businesses that prioritize legal compliance not only avoid penalties but also build stronger foundations for sustainable growth.</p>
    <p>At Edwin Omulama & Associates Advocates, we provide comprehensive legal advisory services to help businesses establish and maintain full compliance with Kenya's corporate laws and regulations.</p>`,
    date: "April 1, 2025",
    author: "Edwin Omulama",
    category: "Corporate Law",
    tags: ["Corporate Law", "Compliance", "Business", "Kenya"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Property Disputes: Legal Strategies for Resolution",
    excerpt: "Effective legal approaches to resolve complex property disputes in Kenya's evolving real estate market.",
    content: `<p>Property disputes are among the most common legal challenges in Kenya's dynamic real estate sector. These conflicts can arise from various sources, including boundary disagreements, ownership contests, lease disputes, and inheritance claims.</p>
    <h2>Common Types of Property Disputes</h2>
    <h3>1. Land Boundary Disputes</h3>
    <p>Boundary disputes often emerge due to unclear demarcations, encroachments, or historical irregularities in land surveys. These disputes are particularly common in areas where formal land registration systems were implemented after informal settlements had already been established.</p>
    <h3>2. Title Disputes</h3>
    <p>Contested ownership frequently occurs due to:</p>
    <ul>
      <li>Fraudulent land transactions</li>
      <li>Multiple title issuances for the same property</li>
      <li>Improper land succession processes</li>
      <li>Historical land injustices</li>
    </ul>
    <h3>3. Landlord-Tenant Disputes</h3>
    <p>These typically involve disagreements over:</p>
    <ul>
      <li>Rent payment and increases</li>
      <li>Property maintenance responsibilities</li>
      <li>Security deposit returns</li>
      <li>Eviction procedures</li>
    </ul>
    <h3>4. Family Land Disputes</h3>
    <p>These often emerge during property succession and inheritance, particularly when wills are unclear or non-existent, or when customary law conflicts with statutory provisions.</p>
    <h2>Effective Resolution Strategies</h2>
    <h3>1. Alternative Dispute Resolution (ADR)</h3>
    <p>ADR mechanisms have gained popularity due to their efficiency and cost-effectiveness compared to litigation:</p>
    <ul>
      <li><strong>Mediation:</strong> A neutral third party facilitates negotiations between disputing parties</li>
      <li><strong>Arbitration:</strong> A private, binding decision-making process outside the court system</li>
      <li><strong>Traditional dispute resolution:</strong> Involving community elders in resolving land conflicts</li>
    </ul>
    <h3>2. Litigation</h3>
    <p>When ADR fails, court proceedings may be necessary. Kenya's Environment and Land Court specializes in resolving land and property disputes. The litigation process typically involves:</p>
    <ul>
      <li>Filing a case with the appropriate court</li>
      <li>Gathering evidence, including title documents, surveys, and witness testimony</li>
      <li>Court hearings and arguments</li>
      <li>Judgment and enforcement</li>
    </ul>
    <h3>3. Administrative Remedies</h3>
    <p>Some disputes can be resolved through administrative bodies:</p>
    <ul>
      <li>Land Control Boards</li>
      <li>Rent Restriction Tribunals</li>
      <li>National Land Commission</li>
    </ul>
    <h2>Preventive Measures</h2>
    <p>Prevention is always better than resolution. Property owners should:</p>
    <ul>
      <li>Conduct thorough due diligence before property transactions</li>
      <li>Ensure proper boundary demarcation and surveys</li>
      <li>Register all property interests formally</li>
      <li>Maintain clear documentation of all transactions</li>
      <li>Use well-drafted contracts for all property dealings</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Resolving property disputes requires a strategic approach that considers the specific nature of the conflict, the relevant legal framework, and the most appropriate forum for resolution. At Edwin Omulama & Associates Advocates, we provide comprehensive legal support to navigate these complex issues and protect our clients' property interests.</p>`,
    date: "March 25, 2025",
    author: "Sarah Kamau",
    category: "Real Estate Law",
    tags: ["Property Law", "Dispute Resolution", "Real Estate", "Land Law"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
  },
  {
    id: 3,
    title: "Employment Law Updates: What Employers Need to Know",
    excerpt: "Recent changes in employment legislation and their implications for businesses and HR practices.",
    content: `<p>Kenya's employment law landscape continues to evolve in response to changing economic conditions, social expectations, and international labor standards. Recent legislative updates and court decisions have significant implications for employers across all sectors.</p>
    <h2>Key Legislative Changes</h2>
    <h3>1. Employment (Amendment) Act Provisions</h3>
    <p>Recent amendments to the Employment Act have introduced several important changes:</p>
    <ul>
      <li>Enhanced protection for employees on fixed-term contracts</li>
      <li>Expanded parental leave benefits, including paternity leave</li>
      <li>Strengthened anti-discrimination provisions</li>
      <li>Updated regulations on working hours and overtime compensation</li>
    </ul>
    <h3>2. Health and Safety Requirements</h3>
    <p>The Occupational Safety and Health Act (OSHA) has been reinforced with new regulations that require employers to:</p>
    <ul>
      <li>Conduct regular workplace risk assessments</li>
      <li>Implement comprehensive safety policies</li>
      <li>Provide appropriate personal protective equipment</li>
      <li>Report incidents and maintain safety records</li>
    </ul>
    <h3>3. Data Protection Requirements</h3>
    <p>The Data Protection Act now imposes strict obligations on employers regarding the collection, storage, and processing of employee personal data, including:</p>
    <ul>
      <li>Obtaining informed consent for data collection</li>
      <li>Implementing appropriate security measures</li>
      <li>Allowing employees access to their personal information</li>
      <li>Appointing data protection officers in larger organizations</li>
    </ul>
    <h2>Significant Court Decisions</h2>
    <p>Recent Employment and Labour Relations Court judgments have established important precedents in areas such as:</p>
    <ul>
      <li>Unfair dismissal standards and compensation</li>
      <li>Recognition of constructive dismissal</li>
      <li>Interpretation of redundancy procedures</li>
      <li>Enforcement of non-compete clauses</li>
    </ul>
    <h2>Practical Implications for Employers</h2>
    <h3>1. Policy Updates</h3>
    <p>Employers should review and update their policies and handbooks to ensure compliance with current legal requirements, particularly in areas such as:</p>
    <ul>
      <li>Disciplinary procedures</li>
      <li>Leave entitlements</li>
      <li>Anti-discrimination and harassment</li>
      <li>Remote work arrangements</li>
    </ul>
    <h3>2. Contract Reviews</h3>
    <p>Employment contracts should be reviewed to ensure they:</p>
    <ul>
      <li>Clearly define the employment relationship</li>
      <li>Incorporate all statutory minimum benefits</li>
      <li>Include appropriate confidentiality and intellectual property provisions</li>
      <li>Comply with current legal standards for termination procedures</li>
    </ul>
    <h3>3. HR Practices</h3>
    <p>Human resource departments should update their practices to ensure:</p>
    <ul>
      <li>Proper documentation of all employment decisions</li>
      <li>Fair and consistent application of policies</li>
      <li>Regular training on compliance requirements</li>
      <li>Effective grievance resolution mechanisms</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Staying current with employment law changes is essential for business compliance and risk management. At Edwin Omulama & Associates Advocates, we help employers navigate these complex legal requirements through proactive advisory services, policy development, and representation in employment disputes.</p>`,
    date: "March 18, 2025",
    author: "Amina Hassan",
    category: "Employment Law",
    tags: ["Employment Law", "HR Compliance", "Workplace", "Legislation"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  },
  {
    id: 4,
    title: "Intellectual Property Protection for Startups",
    excerpt: "Essential strategies for Kenyan startups to protect their innovations, brands, and creative assets.",
    content: `<p>For startups in Kenya's growing innovation ecosystem, intellectual property (IP) is often the most valuable asset. Effective IP protection strategies can provide competitive advantages, create revenue opportunities, and enhance company valuation.</p>
    <h2>Understanding Intellectual Property Rights</h2>
    <p>Different types of IP rights protect various aspects of a business:</p>
    <h3>1. Patents</h3>
    <p>Patents protect new inventions that offer technical solutions to problems. For Kenyan startups, patent protection:</p>
    <ul>
      <li>Grants exclusive rights for 20 years</li>
      <li>Prevents others from making, using, or selling the invention</li>
      <li>Requires registration with the Kenya Industrial Property Institute (KIPI)</li>
      <li>Demands novelty, inventive step, and industrial applicability</li>
    </ul>
    <h3>2. Trademarks</h3>
    <p>Trademarks protect distinctive signs, such as logos, names, and slogans that identify products or services:</p>
    <ul>
      <li>Registration with KIPI provides 10-year renewable protection</li>
      <li>Prevents others from using similar marks that might confuse consumers</li>
      <li>Builds brand equity and customer recognition</li>
      <li>Can be filed for specific classes of goods and services</li>
    </ul>
    <h3>3. Copyrights</h3>
    <p>Copyrights protect original creative works, including software, content, and artistic expressions:</p>
    <ul>
      <li>Automatic protection upon creation, though registration with the Kenya Copyright Board provides additional benefits</li>
      <li>Lasts for the author's lifetime plus 50 years</li>
      <li>Covers software code, website content, marketing materials, and creative works</li>
    </ul>
    <h3>4. Trade Secrets</h3>
    <p>Trade secrets include confidential business information that provides competitive advantages:</p>
    <ul>
      <li>Protected through confidentiality measures rather than registration</li>
      <li>Can include business methods, formulas, processes, and customer lists</li>
      <li>Requires proper internal policies and agreements</li>
    </ul>
    <h2>IP Protection Strategies for Startups</h2>
    <h3>1. Early Assessment and Planning</h3>
    <p>Startups should identify protectable IP assets early and develop a comprehensive protection strategy:</p>
    <ul>
      <li>Conduct an IP audit to identify all valuable intellectual assets</li>
      <li>Prioritize protection based on business goals and available resources</li>
      <li>Develop a timeline for securing protection for different IP assets</li>
    </ul>
    <h3>2. Proper Documentation</h3>
    <p>Maintaining thorough records is essential for establishing IP ownership:</p>
    <ul>
      <li>Document development processes with dated records</li>
      <li>Maintain inventor notebooks for patentable innovations</li>
      <li>Archive all creative works with creation dates</li>
    </ul>
    <h3>3. Contractual Protection</h3>
    <p>Well-drafted agreements help secure IP rights:</p>
    <ul>
      <li>Founder agreements clearly allocating IP ownership</li>
      <li>Employee and contractor agreements with IP assignment provisions</li>
      <li>Non-disclosure agreements (NDAs) for all business discussions</li>
      <li>Licensing agreements for controlled use of IP by third parties</li>
    </ul>
    <h3>4. Strategic Registration</h3>
    <p>Formal registration provides the strongest protection for many IP assets:</p>
    <ul>
      <li>File trademark applications for company and product names and logos</li>
      <li>Consider patent applications for key innovations</li>
      <li>Register copyrights for important creative works</li>
      <li>Consider international protection through PCT (patents), Madrid System (trademarks), or other international frameworks</li>
    </ul>
    <h2>Enforcement Considerations</h2>
    <p>Having rights is only valuable if they can be enforced:</p>
    <ul>
      <li>Monitor the market for potential infringements</li>
      <li>Develop a graduated response strategy for different types of violations</li>
      <li>Consider the cost-benefit analysis of enforcement actions</li>
      <li>Build relationships with experienced IP litigation counsel</li>
    </ul>
    <h2>Conclusion</h2>
    <p>A proactive approach to IP protection helps startups secure their innovations and creative assets, creating long-term business value. At Edwin Omulama & Associates Advocates, we provide strategic IP counseling tailored to the unique needs and growth stages of innovative startups.</p>`,
    date: "March 10, 2025",
    author: "Daniel Ochieng",
    category: "Intellectual Property",
    tags: ["Intellectual Property", "Startups", "Innovation", "Business Law"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
  },
  {
    id: 5,
    title: "Navigating Commercial Contract Disputes",
    excerpt: "Best practices for businesses facing contract disputes and how to achieve favorable resolutions.",
    content: `<p>Commercial contract disputes are an unfortunate reality in business operations. Whether related to service agreements, supply contracts, distribution arrangements, or partnership agreements, these disputes can disrupt business relationships and operations.</p>
    <h2>Common Sources of Contract Disputes</h2>
    <h3>1. Ambiguous Contract Terms</h3>
    <p>Many disputes arise from unclear or ambiguous contract language that leads to different interpretations by the parties. Problems often occur in relation to:</p>
    <ul>
      <li>Performance standards and deliverables</li>
      <li>Payment terms and conditions</li>
      <li>Delivery timeframes</li>
      <li>Quality specifications</li>
    </ul>
    <h3>2. Changed Circumstances</h3>
    <p>Business conditions can change after a contract is signed, creating performance challenges:</p>
    <ul>
      <li>Market disruptions affecting supply chains</li>
      <li>Regulatory changes impacting contract execution</li>
      <li>Economic fluctuations altering the financial viability of agreements</li>
      <li>Force majeure events</li>
    </ul>
    <h3>3. Performance Failures</h3>
    <p>Disputes frequently result from alleged failures to meet contractual obligations:</p>
    <ul>
      <li>Missed deadlines</li>
      <li>Quality deficiencies</li>
      <li>Payment defaults</li>
      <li>Service level shortfalls</li>
    </ul>
    <h3>4. Breach of Warranties or Representations</h3>
    <p>Claims that factual statements or promises made during contract formation were inaccurate or misleading.</p>
    <h2>Effective Dispute Resolution Approaches</h2>
    <h3>1. Negotiation</h3>
    <p>Direct negotiation between the parties is often the most efficient resolution method:</p>
    <ul>
      <li>Focus on business interests rather than legal positions</li>
      <li>Identify creative solutions that preserve relationships</li>
      <li>Consider contract modifications to address changed circumstances</li>
      <li>Document any resolution with clear, written terms</li>
    </ul>
    <h3>2. Mediation</h3>
    <p>When direct negotiations stall, mediation offers a structured process with a neutral facilitator:</p>
    <ul>
      <li>Provides a confidential forum for candid discussions</li>
      <li>Helps parties identify underlying interests and creative solutions</li>
      <li>Maintains control of the outcome with the parties</li>
      <li>Typically faster and less costly than arbitration or litigation</li>
    </ul>
    <h3>3. Arbitration</h3>
    <p>When more formal resolution is needed, arbitration offers a private alternative to court:</p>
    <ul>
      <li>Provides a binding decision by a neutral arbitrator</li>
      <li>Typically faster and more flexible than court proceedings</li>
      <li>Offers greater confidentiality than litigation</li>
      <li>May be required by mandatory arbitration clauses in contracts</li>
    </ul>
    <h3>4. Litigation</h3>
    <p>Court proceedings may be necessary when other methods fail or when legal precedent is important:</p>
    <ul>
      <li>Provides formal procedures and evidence rules</li>
      <li>Offers appeal rights not available in arbitration</li>
      <li>May be necessary for interim relief like injunctions</li>
      <li>Can establish binding precedent for similar future disputes</li>
    </ul>
    <h2>Strategic Considerations</h2>
    <h3>1. Evidence Preservation</h3>
    <p>From the earliest signs of a dispute, parties should:</p>
    <ul>
      <li>Implement document retention protocols</li>
      <li>Preserve all communications related to the contract</li>
      <li>Document performance issues with specific details</li>
      <li>Maintain records of all attempts to resolve the dispute</li>
    </ul>
    <h3>2. Contract Review</h3>
    <p>A thorough analysis of the contract is essential to understand:</p>
    <ul>
      <li>The specific obligations of each party</li>
      <li>Any notice requirements for claiming breach</li>
      <li>Cure periods and opportunities to remedy defaults</li>
      <li>Dispute resolution mechanisms specified in the contract</li>
      <li>Governing law and jurisdiction provisions</li>
    </ul>
    <h3>3. Business Relationship Evaluation</h3>
    <p>The approach to dispute resolution should consider:</p>
    <ul>
      <li>The value of the ongoing business relationship</li>
      <li>Reputational impacts of different resolution strategies</li>
      <li>Business disruption risks from prolonged disputes</li>
      <li>Cost-benefit analysis of various resolution options</li>
    </ul>
    <h2>Preventive Measures</h2>
    <p>The best dispute resolution strategy is prevention through:</p>
    <ul>
      <li>Clear, comprehensive contract drafting</li>
      <li>Regular contract reviews and updates</li>
      <li>Proactive communication about performance concerns</li>
      <li>Documented change management processes</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Effectively managing contract disputes requires a strategic approach that balances legal rights, business interests, and relationship considerations. At Edwin Omulama & Associates Advocates, we guide businesses through contract dispute resolution with a focus on efficient, commercially sensible outcomes.</p>`,
    date: "March 5, 2025",
    author: "Edwin Omulama",
    category: "Contract Law",
    tags: ["Contract Law", "Dispute Resolution", "Commercial Law", "Business"],
    image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 6,
    title: "Tax Compliance for Kenyan Businesses",
    excerpt: "A comprehensive guide to understanding tax obligations and maintaining compliance in Kenya.",
    content: `<p>Tax compliance is a fundamental legal obligation for all businesses operating in Kenya. Understanding and fulfilling tax requirements is essential not only to avoid penalties but also to maintain good standing with regulatory authorities and build a reputation for corporate integrity.</p>
    <h2>Overview of Kenya's Tax Framework</h2>
    <p>Kenya's tax system is administered primarily by the Kenya Revenue Authority (KRA) and includes several key tax types:</p>
    <h3>1. Corporate Income Tax (CIT)</h3>
    <p>CIT is levied on the profits of incorporated businesses:</p>
    <ul>
      <li>Standard rate: 30% for resident companies, 37.5% for non-resident companies</li>
      <li>Reduced rate of 25% for companies newly listed on the Nairobi Securities Exchange (NSE)</li>
      <li>Special rates for specific sectors like mining and petroleum</li>
      <li>Annual filing requirement with option for quarterly installment payments</li>
    </ul>
    <h3>2. Value Added Tax (VAT)</h3>
    <p>VAT is a consumption tax applied to the supply of taxable goods and services:</p>
    <ul>
      <li>Standard rate: 16%</li>
      <li>Zero-rated supplies (0% but eligible for input tax credits)</li>
      <li>Exempt supplies (not subject to VAT and no input tax credits)</li>
      <li>Registration threshold: annual turnover of KES 5 million</li>
      <li>Monthly filing and payment requirement</li>
    </ul>
    <h3>3. Pay As You Earn (PAYE)</h3>
    <p>PAYE is a withholding tax on employment income:</p>
    <ul>
      <li>Progressive tax rates ranging from 10% to 30%</li>
      <li>Employers must withhold and remit to KRA monthly</li>
      <li>Includes contributions to the National Social Security Fund (NSSF) and National Hospital Insurance Fund (NHIF)</li>
    </ul>
    <h3>4. Withholding Taxes</h3>
    <p>Various withholding taxes apply to specific types of payments:</p>
    <ul>
      <li>Dividends: 5% for residents, 15% for non-residents</li>
      <li>Interest: 15% for residents, 15% for non-residents</li>
      <li>Royalties: 5% for residents, 20% for non-residents</li>
      <li>Management and professional fees: 5% for residents, 20% for non-residents</li>
    </ul>
    <h3>5. Excise Duty</h3>
    <p>Applied to specific goods and services, including:</p>
    <ul>
      <li>Alcoholic beverages and tobacco products</li>
      <li>Petroleum products</li>
      <li>Motor vehicles</li>
      <li>Financial services</li>
      <li>Mobile money transfer services</li>
    </ul>
    <h2>Key Compliance Requirements</h2>
    <h3>1. Registration</h3>
    <p>Businesses must register for relevant tax obligations:</p>
    <ul>
      <li>Tax Identification Number (TIN) for all businesses</li>
      <li>VAT registration for businesses meeting the threshold</li>
      <li>PAYE registration for employers</li>
      <li>Excise duty registration for affected businesses</li>
    </ul>
    <h3>2. Filing and Payment</h3>
    <p>Timely submission of returns and payment of taxes is crucial:</p>
    <ul>
      <li>Corporate tax: annual returns by the end of the 6th month after year-end</li>
      <li>VAT: monthly returns by the 20th of the following month</li>
      <li>PAYE: monthly returns by the 9th of the following month</li>
      <li>Withholding taxes: monthly returns by the 20th of the following month</li>
    </ul>
    <h3>3. Record Keeping</h3>
    <p>Proper documentation is essential for compliance and audit defense:</p>
    <ul>
      <li>Maintain accounting records for at least 7 years</li>
      <li>Keep supporting documents for all transactions</li>
      <li>Ensure electronic records meet KRA requirements</li>
      <li>Implement proper invoice management systems</li>
    </ul>
    <h2>Tax Compliance Strategies</h2>
    <h3>1. Proactive Planning</h3>
    <p>Effective tax management requires forward-looking strategies:</p>
    <ul>
      <li>Regular tax planning reviews</li>
      <li>Awareness of available incentives and exemptions</li>
      <li>Structured transactions with tax implications in mind</li>
      <li>Cash flow management for tax payment obligations</li>
    </ul>
    <h3>2. Technology Adoption</h3>
    <p>Leveraging technology enhances compliance efficiency:</p>
    <ul>
      <li>Accounting software with tax compliance features</li>
      <li>Electronic filing systems integration</li>
      <li>Automated tax calendar reminders</li>
      <li>Digital document management</li>
    </ul>
    <h3>3. Professional Support</h3>
    <p>Complex tax matters often require specialized expertise:</p>
    <ul>
      <li>Regular consultation with tax advisors</li>
      <li>Professional review of major transactions</li>
      <li>Expert assistance with tax audits</li>
      <li>Training for finance and accounting staff</li>
    </ul>
    <h2>Managing Tax Controversies</h2>
    <p>When disputes with tax authorities arise:</p>
    <ul>
      <li>Respond promptly to KRA notices and queries</li>
      <li>Gather comprehensive documentation to support positions</li>
      <li>Consider alternative dispute resolution mechanisms</li>
      <li>Understand and utilize appropriate appeal processes</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Tax compliance is not just a legal requirement but a business imperative that affects reputation, operations, and financial health. At Edwin Omulama & Associates Advocates, we provide comprehensive tax advisory services to help businesses navigate Kenya's complex tax landscape while minimizing risks and optimizing legitimate tax planning opportunities.</p>`,
    date: "February 28, 2025",
    author: "Sarah Kamau",
    category: "Tax Law",
    tags: ["Tax Law", "Compliance", "Business", "Finance"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the post by ID
    const postId = parseInt(id);
    const foundPost = allBlogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      // Update document title
      document.title = `${foundPost.title} - Edwin Omulama & Associates Advocates`;
      setPost(foundPost);
      
      // Find related posts with the same category or tags (excluding current post)
      const related = allBlogPosts
        .filter(p => p.id !== postId && 
          (p.category === foundPost.category || 
           p.tags.some(tag => foundPost.tags.includes(tag))))
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Blog Post Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back to Blog Link */}
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-law-secondary hover:text-law-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
          
          {/* Blog Post Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-law-secondary mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 gap-4 mt-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Post Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}>
              </div>
              
              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-law-primary hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-2">Share this article:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-law-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-law-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-law-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-law-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-law-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.170 14.142l-.142-.142a5.5 5.5 0 0 1-1.53-4.823l.26-1.968 1.89.556a4.001 4.001 0 1 0 5.393-3.21l-1.206-1.076a6 6 0 1 1-6.867 3.21l-.26 1.969a7.5 7.5 0 0 0 2.085 6.33l.142.142 8.808 8.809 1.415-1.414-8.808-8.808 7.324 7.324 1.414-1.414-7.324-7.324L7.17 14.143Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Related Articles</h3>
                
                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map(related => (
                      <div key={related.id} className="flex gap-4">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-bold text-law-secondary hover:text-law-primary transition-colors">
                            <Link to={`/blog/${related.id}`}>
                              {related.title.length > 60 ? related.title.substring(0, 60) + '...' : related.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{related.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Need Legal Advice?</h3>
                  <p className="text-gray-600 mb-4">Our team of experienced lawyers is ready to help you with any legal matters.</p>
                  <Button className="w-full bg-law-secondary hover:bg-law-primary text-white transition-colors">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;

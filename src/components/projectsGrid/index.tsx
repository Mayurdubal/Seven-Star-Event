"use client";

import { useState } from "react";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

export const projectData = [
  {
    id: 1,
    name: "bartleby",
    title: "Bartleby",
    category: "Education",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStuday: 1,
    objective:
      "- Enhance Learning Outcomes: Utilize Bartleby’s resources to provide students with additional learning support, leading to improved academic performance.- Increase Accessibility: Make high-quality educational resources easily accessible to students anytime and anywhere.-Support Educators: Provide teachers with tools and resources to supplement their teaching and support their students more effectively.- Foster Self-Paced Learning: Encourage students to engage in self-paced learning through access to Bartleby’s comprehensive resources..",
    solutions:
      "- Comprehensive Integration Plan: Develop a detailed plan to integrate Bartleby’s platform with the institution’s LMS, including testing phases to ensure compatibility and smooth operation.- Training Programs: Conduct training sessions for both students and faculty to familiarize them with Bartleby’s resources and how to use them effectively.- Robust Security Measures: Implement advanced security protocols to protect student data and comply with educational regulations.- Impact Assessment Tools: Develop tools and methods to assess the impact of Bartleby’s resources on student performance and engagement..",
    benefits:
      "- Improved Academic Performance: Enhanced access to learning resources leads to better understanding of course material and improved grades.- Increased Engagement: Students are more likely to engage with their studies when they have access to comprehensive support tools.- Support for Diverse Learning Styles: Bartleby’s range of resources supports different learning styles and needs, helping all students succeed.- Empowered Educators: Teachers have additional resources to supplement their teaching and provide more personalized support to students.",
    overview:
      "The Bartleby Education Project aims to leverage Bartleby, an educational platform, to enhance student learning and support. Bartleby provides a range of services, including textbook solutions, expert Q&A, and personalized study help. This project will focus on integrating Bartleby's resources into educational institutions to improve student outcomes and engagement.   ",
    challenges:
      "- Integration with Existing Systems: Ensuring seamless integration of Bartleby’s platform with the institution’s existing Learning Management Systems (LMS).- Adoption by Students and Faculty: Encouraging both students and faculty to utilize the new resources available through Bartleby.- Data Privacy and Security: Maintaining compliance with educational data protection regulations and ensuring student data privacy.- Measuring Impact: Effectively measuring the impact of Bartleby’s resources on student learning outcomes.   ",
    technology: " ",
    results:
      "- Successful Integration: Bartleby’s platform is seamlessly integrated with the institution’s LMS, providing easy access for students and faculty.- High Adoption Rates: Significant usage of Bartleby’s resources by both students and faculty.- Positive Feedback: High satisfaction rates from students and teachers using Bartleby’s resources.- Improved Metrics: Noticeable improvement in student grades and engagement metrics.- Enhanced Student Support: Students report feeling more supported in their learning, leading to increased confidence and academic success.  ",
    img: "/bartleby.svg"
  },
  {
    id: 2,
    name: "designer-watches-llp",
    title: "Designer Watches LLP",
    category: "Inventory Management",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStuday: 2,
    objective:
      "- Improve Inventory Tracking: Implement a system to accurately track inventory levels in real-time.- Reduce Inventory Losses: Minimize losses due to theft, misplacement, or errors through better management practices.- Optimize Stock Levels: Ensure optimal stock levels to meet customer demand without overstocking or understocking.- Enhance Operational Efficiency: Streamline inventory processes to save time and reduce costs.",
    solutions:
      "- Robust Inventory Management System : Implement a comprehensive system with features such as real-time tracking, automated reorder points, and detailed reporting.- Barcode and RFID Technology: Utilize barcode scanners and RFID tags to enhance accuracy and speed of inventory tracking.- Employee Training Programs**: Conduct thorough training sessions for employees to ensure they can efficiently use the new system.- Integration Tools: Use integration tools and APIs to connect the inventory management system with existing software solutions.- Regular Audits and Reviews :  Implement regular inventory audits and system reviews to ensure data accuracy and system efficiency.",
    benefits:
      "- Increased Accuracy: Real-time tracking and automated systems reduce errors and improve the accuracy of inventory data.- Reduced Losses: Improved tracking and security measures help to minimize inventory losses due to theft or misplacement.- Optimized Inventory Levels : Automated reorder points and detailed analytics help to maintain optimal stock levels, reducing both overstocking and stockouts.- Enhanced Efficiency: Streamlined processes save time and reduce operational costs, allowing staff to focus on more strategic tasks.- Better Decision-Making: Detailed reporting and analytics provide insights that support better business decisions regarding inventory management.",
    overview:
      "The Designer Watches LLP Inventory Management Project aims to streamline and enhance the inventory management processes for Designer Watches LLP, a company specializing in high-end designer watches. The project focuses on implementing a robust inventory management system to improve inventory tracking, reduce losses, optimize stock levels, and enhance overall operational efficiency. ",
    challenges:
      "- Integration with Existing Systems: Ensuring the new inventory management system integrates seamlessly with existing sales, accounting, and supply chain systems.- Accurate Data Entry: Ensuring that all inventory data is accurately entered into the system to avoid discrepancies.- Training Employees: Training staff to effectively use the new inventory management system.- Scalability: Ensuring the system can scale with the company's growth and handle increased inventory volumes.",
    technology: "   ",
    results:
      "- Successful Implementation: The new inventory management system is successfully implemented and fully operational.- High Accuracy Rates : Significant reduction in inventory discrepancies and errors.- Reduced Losses: Noticeable decrease in inventory losses due to better tracking and security measures.- Optimal Stock Levels: Maintenance of optimal inventory levels, leading to improved customer satisfaction.- Increased Efficiency: Streamlined operations and reduced costs, contributing to overall business growth and profitability.",

    img: "/designer.svg"
  },
  {
    id: 3,
    name: "uk-post-office",
    title: "UK Post Office",
    category: "Govt",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Govt",
    caseStuday: 3,
    objective:
      "- Modernize Operations: Implement advanced technologies to streamline operations and reduce manual processes.- Enhance Customer Service: Improve the customer experience by offering faster, more reliable, and user-friendly services.- Increase Efficiency: Optimize resource utilization to reduce operational costs and improve service delivery.- Ensure Sustainability: Develop a sustainable operational model that supports long-term growth and adaptability.",
    solutions:
      "- Advanced IT Infrastructure: Develop and implement a robust IT infrastructure to support new technologies and services.- Digital Platforms:  Introduce digital platforms for services such as postal tracking, payments, and customer support.- Comprehensive Training Programs: Conduct extensive training sessions for employees to ensure they are proficient in using new technologies.- Public Awareness Campaigns: Launch campaigns to educate customers about new services and encourage their use.",
    benefits:
      "- Improved Customer Experience: Enhanced service delivery and user-friendly platforms improve overall customer satisfaction.- Operational Efficiency: Reduced manual processes and optimized resource utilization lead to cost savings and faster service.- Data-Driven Decisions: Data analytics provide valuable insights that support informed decision-making and continuous improvement.- Sustainable Growth: A modernized, efficient operation model supports long-term sustainability and adaptability..",
    overview:
      "The UK Post Office is embarking on a government project aimed at modernizing its operations to improve efficiency, customer service, and overall functionality. This project involves the implementation of new technologies and processes to streamline services, enhance user experience, and support the organization's long-term sustainability.  ",
    challenges:
      "- Legacy System Integration: Integrating new technologies with existing legacy systems without causing disruptions.- Data Security and Privacy: Ensuring the security and privacy of customer data amidst the implementation of new digital solutions.- Staff Training and Adaptation: Training employees to effectively use new systems and adapt to changes in operational processes- Customer Adaptation: Encouraging customers to adopt and utilize new digital services.   ",
    technology: "   ",
    results:
      "- Successful Implementation : New technologies and processes are successfully integrated with minimal disruption.- Enhanced Customer Satisfaction: Positive feedback from customers regarding improved service delivery and user experience.- Operational Improvements: Noticeable improvements in operational efficiency and reduction in costs.- Data Security: Robust cybersecurity measures ensure the protection of customer data and compliance with regulations.  ",
    img: "/bartleby.svg"
  },
  {
    id: 4,
    name: "nike",
    title: "Nike",
    category: "Inventory Management",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStuday: 4,
    objective:
      "- Improve Inventory Accuracy : Implement systems to ensure real-time tracking and accurate inventory data.- Reduce Excess Inventory : Optimize inventory levels to reduce holding costs and minimize excess stock.- Enhance Supply Chain Efficiency : Streamline supply chain processes to ensure timely restocking and reduced lead times.- Boost Customer Satisfaction : Ensure product availability and timely delivery to enhance the overall customer experience. ",
    solutions:
      "- Advanced Inventory Management System : Implement a robust inventory management system with real-time tracking and automated updates.- Demand Forecasting Tools: Use advanced analytics and machine learning algorithms to improve demand forecasting accuracy.- RFID Technology: Implement RFID (Radio-Frequency Identification) for precise inventory tracking and reduced manual errors- Training Programs: Develop comprehensive training programs for employees to ensure effective use of new systems and adherence to new processes.- Integration Middleware: Utilize middleware solutions to facilitate seamless integration between new inventory systems and existing IT infrastructure.",
    benefits:
      "- Increased Inventory Accuracy: Real-time tracking and automated updates significantly reduce discrepancies and errors in inventory data.- Reduced Holding Costs : Optimized inventory levels lead to lower holding costs and reduced excess inventory.- Improved Supply Chain Efficiency : Streamlined processes result in faster restocking and reduced lead times, ensuring products are available when needed- Enhanced Customer Satisfaction : Improved product availability and timely deliveries lead to higher customer satisfaction and loyalty.- Data-Driven Decisions: Advanced analytics provide insights that support better decision-making and continuous improvement in inventory management.",
    overview:
      "The Nike Inventory Management Project aims to optimize and enhance the efficiency of Nike's inventory management processes. This project focuses on implementing advanced technologies and strategies to ensure accurate tracking, reduce excess inventory, improve supply chain efficiency, and ultimately enhance customer satisfaction.  ",
    challenges:
      "- Integration with Existing Systems: Ensuring seamless integration of new inventory management technologies with Nike’s existing IT infrastructure.- Data Accuracy and Consistency : Maintaining accurate and consistent inventory data across multiple channels and locations.- Demand Forecasting : Accurately predicting customer demand to optimize inventory levels and reduce stockouts or overstocking.- Employee Training and Adaptation : Training employees to effectively use new inventory management tools and adapt to new processes. ",
    technology: "   ",
    results:
      "- Successful Integration: The new inventory management system is seamlessly integrated with Nike’s existing infrastructure.- High Inventory Accuracy: Significant improvement in inventory accuracy, reducing discrepancies and manual errors.- Optimized Inventory Levels: Reduction in excess inventory and holding costs, leading to more efficient stock management.- Efficient Supply Chain: Enhanced supply chain processes result in timely restocking and reduced lead times.- Positive Customer Feedback: Increased customer satisfaction due to better product availability and timely delivery.- Improved Operational Efficiency: Streamlined inventory management processes lead to overall improvements in operational efficiency and cost savings. ",

    img: "/nike.svg"
  },
  {
    id: 5,
    name: "tamohara",
    title: "Tamohara",
    category: "Finance",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStuday: 5,
    objective:
      "- Optimize Investment Management: Enhance the efficiency and effectiveness of investment management processes through technology.- Enhance Data Analytics: Leverage advanced data analytics to gain deeper insights into market trends and investment opportunities.- Improve Client Services: Provide more personalized and timely services to clients by utilizing advanced technology solutions.- Ensure Security and Compliance: Implement robust security measures to protect financial data and ensure compliance with regulatory standards.",
    solutions:
      "- Advanced Analytics Tools: Implement sophisticated data analytics and machine learning algorithms to improve investment strategies and decision-making.- Blockchain Technology: Use blockchain for secure, transparent, and tamper-proof transaction processing.- Automated Trading Systems: Deploy automated trading systems that utilize algorithmic trading strategies for efficient trade execution.- Cloud Computin*: Leverage cloud-based solutions for scalability, flexibility, and enhanced data storage.- Cybersecurity Measures: Implement advanced cybersecurity solutions to protect data integrity and ensure regulatory compliance.- Comprehensive Training Programs: Conduct extensive training sessions for employees to ensure proficiency in new systems and processes.",
    benefits:
      "- Enhanced Decision-Making: Advanced analytics and AI provide deeper insights, leading to more informed and strategic investment decisions.- Operational Efficiency: Automation of trading and back-office processes increases efficiency and reduces operational costs.- Improved Security: Blockchain and advanced cybersecurity measures ensure the integrity and security of financial transactions.- Scalability: Cloud computing allows the system to scale according to demand, supporting business growth.- Cost Savings: Automation and optimized processes lead to significant cost reductions.- Superior Client Services: Enhanced data analytics and personalized services improve client satisfaction and retention.",
    overview:
      "The Tamohara Project is a financial technology initiative aimed at enhancing investment management processes, improving data analytics capabilities, and providing superior client services. This project focuses on integrating advanced technologies to streamline operations, facilitate data-driven decision-making, and drive overall business growth within the finance sector.   ",
    challenges:
      "- Advanced Analytics Tools: Implement sophisticated data analytics and machine learning algorithms to improve investment strategies and decision-making.- Blockchain Technology: Use blockchain for secure, transparent, and tamper-proof transaction processing.- Automated Trading Systems: Deploy automated trading systems that utilize algorithmic trading strategies for efficient trade execution.- Cloud Computing: Leverage cloud-based solutions for scalability, flexibility, and enhanced data storage.- Cybersecurity Measures: Implement advanced cybersecurity solutions to protect data integrity and ensure regulatory compliance.- Comprehensive Training Programs: Conduct extensive training sessions for employees to ensure proficiency in new systems and processes.  ",
    technology: " ",
    results:
      "- Successful Technology Integration: Seamless integration of new technologies with existing systems, with minimal operational disruption.- Increased Efficiency: Noticeable improvements in the efficiency of financial transactions and investment processes.- Better Investment Outcomes: Data-driven strategies lead to improved investment performance and higher returns for clients.- High Client Satisfaction: Positive client feedback due to enhanced services and better investment results.- Cost Reduction: Significant cost savings achieved through automation and process optimization.- Scalable Solutions: The system effectively handles increased transaction volumes, demonstrating scalability and flexibility.  ",
    img: "/smi.svg"
  },
  {
    id: 6,
    name: "qritive",
    title: "Qritive",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 6,
    objective:
      "- Enhance Diagnostic Accuracy: Utilize Qritive's AI tools to support pathologists in making precise and reliable cancer diagnoses.- Increase Efficiency: Streamline diagnostic workflows to reduce turnaround times for pathology results.- Seamless Integration: Ensure that Qritive’s AI tools integrate smoothly with Optum and UHC’s existing health information systems.-Maintain Compliance: Adhere to healthcare regulations and ensure robust patient data security.",

    solutions:
      "- Robust Integration Strategy: Develop a detailed integration plan, including thorough testing phases to ensure seamless connectivity with existing systems.-Comprehensive Training Programs: Implement extensive training sessions and provide detailed user manuals for pathologists and lab technicians.-Advanced Security Protocols: Implement state-of-the-art security measures to ensure data protection and compliance with regulatory standards.-Continuous Monitoring and Support: Set up a system for continuous monitoring of AI tool performance and gather user feedback for ongoing improvements.",
    benefits:
      "- Improved Diagnostic Accuracy: More precise cancer diagnoses leading to better treatment decisions.- Increased Efficiency: Reduced time required for pathology results, allowing for quicker clinical decisions.-Enhanced Patient Outcomes: Timely and accurate diagnoses leading to improved patient care.-Support for Ongoing Research: Advanced tools facilitate ongoing research in pathology, leading to continuous improvements in diagnostic techniques.",
    overview:
      "Qritive is an innovative healthcare technology company that leverages artificial intelligence (AI) to enhance pathology services, particularly in cancer diagnosis. This project aims to integrate Qritive's advanced AI-driven pathology solutions with Optum and UnitedHealthcare (UHC) to improve diagnostic accuracy, efficiency, and patient outcomes.",
    challenges:
      -"System Integration: Ensuring seamless integration of Qritive’s AI tools with the existing complex IT infrastructure of Optum and UHC.- Data Security and Privacy: Maintaining compliance with stringent healthcare regulations such as HIPAA to ensure patient data security and privacy.- Adoption and Training: Ensuring that healthcare professionals are adequately trained and comfortable using new AI tools. - Ongoing Support and Monitoring: Providing continuous support and monitoring to ensure the AI tools function correctly and efficiently.   ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "-Successful Integration: Seamless integration of Qritive’s AI tools with Optum and UHC’s systems.-Positive Feedback: High satisfaction rates from healthcare professionals using the new tools.-Improved Metrics: Significant reduction in diagnostic errors and turnaround times for pathology reports.-Enhanced Patient Care: Improved patient outcomes due to more accurate and timely diagnoses. ",
    img: "/qritive.svg"
  },
  {
    id: 7,
    name: "optum-uhc",
    title: "Optum + UHC",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 7,
    objective:
      "- Enhance Diagnostic Accuracy: Leverage Qritive's AI tools to support pathologists in making precise and reliable cancer diagnoses.- Increase Efficiency: Streamline diagnostic workflows to reduce turnaround times for pathology results.-Seamless Integration: Ensure Qritive’s AI tools integrate smoothly with Optum and UHC’s existing health information systems.- Ensure Compliance: Adhere to healthcare regulations and ensure robust patient data security.",
    solutions:
      "- Robust Integration Plan: Develop a detailed integration plan, including thorough testing phases to ensure seamless connectivity with existing systems.- Comprehensive Training Programs: Implement extensive training sessions and provide detailed user manuals for pathologists and lab technicians.- Advanced Security Protocols:  Implement state-of-the-art security measures to ensure data protection and compliance with regulatory standards.- Continuous Monitoring and Support: Set up a system for continuous monitoring of AI tool performance and gather user feedback for ongoing improvements.",
    benefits:
      "- Improved Diagnostic Accuracy: More precise cancer diagnoses leading to better treatment decisions.- Increased Efficiency: Reduced time required for pathology results, allowing for quicker clinical decisions.- Enhanced Patient Outcomes: Timely and accurate diagnoses leading to improved patient care. -Support for Ongoing Research: Advanced tools facilitate ongoing research in pathology, leading to continuous improvements in diagnostic techniques.",
    overview:
      "This healthcare project focuses on integrating advanced AI-driven pathology solutions from Qritive into the services provided by Optum and UnitedHealthcare (UHC). The aim is to enhance diagnostic accuracy, streamline workflows, and improve patient outcomes through cutting-edge technology.  ",
    challenges:
      "- System Integration: Ensuring the seamless integration of Qritive’s AI tools with the existing IT infrastructure of Optum and UHC.-Data Security and Privacy: Maintaining compliance with stringent healthcare regulations such as HIPAA to ensure patient data security and privacy.-Adoption and Training: Ensuring that healthcare professionals are adequately trained and comfortable using new AI tools.- Ongoing Support and Monitoring: Providing continuous support and monitoring to ensure the AI tools function correctly and efficiently.   ",
    technology: " ",
    results:
      "- Successful Integration: Seamless integration of Qritive’s AI tools with Optum and UHC’s systems.- Positive Feedback: High satisfaction rates from healthcare professionals using the new tools.- Improved Metrics : Significant reduction in diagnostic errors and turnaround times for pathology reports.- Enhanced Patient Care: Improved patient outcomes due to more accurate and timely diagnoses.  ",

    img: "/bartleby.svg"
  },
  {
    id: 8,
    name: "lofoods",
    title: "LoFoods",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 8,
    objective:
      "- Promote Healthy Eating: Encourage healthier eating habits among consumers by providing accessible, nutritious, low-calorie food options.- Improve Health Outcomes: Reduce the prevalence of diet-related health issues such as obesity, diabetes, and cardiovascular diseases.- Personalized Nutrition: Develop personalized dietary plans based on individual health data and nutritional needs.- Increase Accessibility: Ensure that healthy food options are widely available and affordable.",
    solutions:
      "- Personalized Dietary Plans: Use advanced data analytics and machine learning to create personalized dietary plans based on individual health data.- Health Tracking Tools: Develop mobile applications and wearables to track dietary intake, physical activity, and health metrics.- Educational Campaigns: Conduct awareness campaigns to educate the public on the benefits of healthy eating and how to make better food choices.- Partnerships with Suppliers: Partner with local and regional food suppliers to ensure a steady supply of fresh, nutritious foods.- Robust Data Security Measures: Implement strong data security protocols to protect user data and comply with regulatory standards.",
    benefits:
      "- Improved Health Outcomes: Personalized nutrition plans and better food choices lead to improved health metrics and reduced incidence of diet-related diseases.- Enhanced User Engagemen: Interactive tools and personalized recommendations increase user engagement and adherence to healthy eating habits.- Data-Driven Insights: Advanced analytics provide valuable insights into dietary trends and health outcomes, aiding in continuous improvement.- Accessibility and Convenience: Easy access to healthy food options and convenient tracking tools help users make healthier choices effortlessly.- Cost Savings: Preventive health measures through improved nutrition can lead to significant cost savings in healthcare expenses.",
    overview:
      "The LoFoods Project is an initiative in the healthcare sector aimed at promoting healthy eating habits and improving overall health outcomes through the provision of low-calorie, nutritious food options. The project focuses on leveraging advanced technology and data analytics to create personalized dietary plans, track health metrics, and ensure the availability of healthy food choices.  ",
    challenges:
      "- Behavioral Change: Encouraging consumers to change their eating habits and adopt healthier diets.- Data Privacy: Ensuring the privacy and security of sensitive health and nutritional data- Supply Chain Management: Managing the supply chain to ensure the availability and freshness of healthy food products.- Integration with Healthcare Systems: Integrating dietary and nutritional data with existing healthcare systems for holistic health management.- Scalability: Scaling the project to reach a larger population while maintaining the quality and consistency of services.   ",
    technology: "  ",
    results:
      "- Successful Implementation: The LoFoods project is successfully launched, with robust technology infrastructure and partnerships in place.- Positive Health Metrics: Users report improved health outcomes, such as weight loss, better blood sugar control, and improved cardiovascular health.- High User Adoption: Significant uptake of the personalized dietary plans and health tracking tools among the target population.- Increased Availability of Healthy Foods: Wider availability and affordability of low-calorie, nutritious food options.- Valuable Health Insights: Aggregated data provides insights into the impact of dietary habits on health, guiding future initiatives.   ",

    img: "/lofoods.svg"
  },
  {
    id: 9,
    name: "alphacoach",
    title: "Alphacoach",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 9,
    objective:
      "- Personalized Health Plans: Develop tailored health and fitness programs based on individual data and health goals.- Promote Sustainable Habits: Encourage the adoption of lasting healthy habits through continuous coaching and motivation.- Monitor Health Metrics: Track and analyze various health metrics to ensure progress and make necessary adjustments.- Increase User Engagement: Create an engaging platform that motivates users to stay committed to their health goals.",
    solutions:
      "- Unified Data Platform: Develop a platform that aggregates and analyzes data from various sources to provide a comprehensive view of each user's health.- Engagement Strategies: Implement gamification, reminders, rewards, and social features to boost user engagement and retention.- Robust Security Measures: Utilize strong encryption and data protection protocols to secure user information.- Scalable Infrastructure: Employ cloud-based solutions to ensure the platform can scale effectively.- AI and Machine Learning: Use AI and machine learning algorithms to analyze data and provide accurate, personalized health and fitness recommendations.",
    benefits:
      "- Enhanced Health Outcomes: Personalized plans and continuous monitoring lead to better health and fitness results.- Increased User Engagement:  Engaging features and personalized support keep users motivated and committed.- Data-Driven Insights: Advanced analytics provide deep insights into health patterns, enabling better decision-making.- Improved Accessibility: A user-friendly mobile app makes it easy for users to access and engage with their health plans.- Cost-Effective Solutions: Preventive health measures reduce the need for more expensive medical treatments.",
    overview:
      "The Alphacoach project is designed to improve health and fitness outcomes by offering customized coaching plans tailored to individual needs. It leverages data analytics, artificial intelligence, and modern digital tools to provide users with real-time insights, track their progress, and adjust their plans accordingly.  ",
    challenges:
      "- Data Integration: Combining data from multiple sources such as wearables, medical records, and user inputs.- User Adoption and Consistency: Ensuring users consistently engage with and benefit from the platform.- Data Privacy and Security: Protecting sensitive health information and complying with data protection regulations.- Scalability: Building a platform that can scale to accommodate a growing user base.- Accurate Personalization: Continuously improving the accuracy of personalized recommendations based on diverse data inputs.  ",
    technology: " ",
    results:
      "- Successful Integration: The platform integrates seamlessly with various data sources and devices, providing a comprehensive health overview.- High User Adoption and Retention: Significant user engagement with the platform, leading to sustained health improvements.- Positive Health Metrics: Users report improved health outcomes such as weight loss, better fitness levels, and improved overall wellness.- Scalability Achieved: The platform successfully scales to accommodate a growing user base without performance issues.- Enhanced User Satisfaction: Positive feedback from users regarding the personalized support and ease of use.    ",

    img: "/alphacoach.svg"
  },
  {
    id: 10,
    name: "bhavyata-foundation",
    title: "Bhavyata Foundation",
    category: "NGO",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "NGO",
    caseStuday: 10,
    objective:
      "- Empower Communitie: Provide education, healthcare, and skill development opportunities to underprivileged communities.- Sustainable Development: Promote sustainable practices in rural development to ensure long-term benefits.- Healthcare Accessibility: Improve access to essential healthcare services for marginalized populations.- Educational Support: Enhance educational infrastructure and provide resources for quality education.- Skill Training: Offer vocational training programs to enhance employability and economic independence.",
    solutions:
      "- Partnerships: Collaborate with other NGOs, government bodies, and private sector partners to pool resources and expertise.- Community Involvement: Engage community members in the planning and implementation of projects to ensure their needs are met and to foster ownership.- Sustainable Practices: Focus on environmentally sustainable practices in all development projects to ensure long-term viability.- Robust Monitoring Systems: Develop monitoring and evaluation frameworks to track progress and measure impact.- Diversified Funding Sources: Seek funding from multiple sources, including grants, donations, and corporate social responsibility (CSR) initiatives.",
    benefits:
      "- Improved Quality of Life: Enhanced education, healthcare, and skill training improve the overall quality of life for beneficiaries.- Economic Independence: Skill training programs increase employability and economic independence.- Sustainable Development: Sustainable practices ensure long-term benefits for the community and environment.- Healthcare Access: Improved access to healthcare services leads to better health outcomes.- Empowered Communities: Community involvement fosters a sense of ownership and empowerment..",
    overview:
      "The Bhavyata Foundation project is an initiative by the NGO to address critical social issues and improve the quality of life for underprivileged communities. The foundation focuses on areas such as education, healthcare, rural development, and skill training. By leveraging community participation and sustainable practices, the project aims to create a long-lasting positive impact. ",
    challenges:
      "- Resource Allocation: Ensuring efficient use of limited resources to maximize impact.- Community Engagement: Encouraging active participation from the community in various initiatives.- Sustainability: Implementing projects that are sustainable and can continue without ongoing external support.- Monitoring and Evaluation: Effectively tracking the progress and impact of the initiatives.- Funding: Securing consistent funding to support various programs and initiatives.    ",
    technology: " ",
    results:
      "- Educational Achievements: Increased enrollment and improved performance in schools within the target communities.- Healthcare Improvements: Better health outcomes through increased access to medical services and health education.- Economic Benefits: Higher employment rates and income levels among beneficiaries who received skill training.- Sustainable Projects: Successful implementation of sustainable development projects that continue to benefit the community.- Community Empowerment: Greater community engagement and ownership of local development initiatives.   ",

    img: "/bhavyata.svg"
  },
  {
    id: 11,
    name: "lemark-education",
    title: "LeMark Education",
    category: "Education",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStuday: 11,
    objective:
      "- Enhance Educational Quality: Improve the overall quality of education by integrating advanced teaching methods and technologies.- Increase Accessibility: Make education more accessible to a broader audience, including underprivileged and remote learners.- Personalized Learning: Develop personalized learning paths to cater to the unique needs and pace of each student.- Professional Development: Provide training and resources for educators to enhance their teaching skills and adapt to new technologies.",
    solutions:
      "- E-Learning Platforms: Develop and deploy e-learning platforms that provide interactive and engaging educational content.- Blended Learning Models: Implement blended learning models that combine online and offline education to enhance flexibility and accessibility.- Teacher Training Programs: Offer comprehensive training programs for teachers to help them adapt to new technologies and teaching strategies.- Digital Inclusion Initiatives: Launch initiatives to provide digital devices and internet access to underprivileged students.- Personalized Learning Tools: Use AI and data analytics to create personalized learning experiences tailored to each student's needs.",
    benefits:
      "- Improved Learning Outcomes: Enhanced engagement and personalized learning lead to better academic performance.- Increased Accessibility: Broader access to education through online platforms and digital inclusion initiatives.- Teacher Empowerment: Professional development programs empower teachers with new skills and teaching methodologies- Student Engagement: Interactive and multimedia content keeps students engaged and motivated.- Scalability: Digital platforms allow for the scalable delivery of educational programs to a large audience.",
    overview:
      "The LeMark Education project is an initiative aimed at enhancing the quality of education through innovative teaching methods and advanced technology. LeMark Education focuses on providing comprehensive educational programs that cater to various learning needs, utilizing digital tools and modern pedagogical approaches to improve learning outcomes and engagement.   ",
    challenges:
      "- Technology Integration: Integrating advanced technology into traditional educational systems.- Digital Divide: Ensuring all students have access to necessary digital tools and internet connectivity.- Teacher Training: Equipping educators with the skills and knowledge to effectively use new technologies and teaching methods.- Student Engagement: Keeping students engaged and motivated in a digital learning environment.- Resource Allocation: Efficiently allocating resources to maximize impact and reach. ",
    technology: "   ",
    results:
      "- Higher Student Achievement: Students show improved academic performance and engagement with the curriculum.- Wider Access to Education: Increased enrollment from remote and underprivileged areas due to digital learning platforms.- Enhanced Teacher Skills: Teachers are better equipped with modern teaching techniques and tools.- Positive Feedback: Positive feedback from students, parents, and educators on the effectiveness of the programs.- Scalable Model: Successful implementation of a scalable model that can be replicated in different regions and contexts.   ",

    img: "/lemark.svg"
  }
];

const ProjectsGrid = () => {
  const [filterKey, setFilterKey] = useState<string>("all");

  const filteredData =
    filterKey === "all"
      ? projectData
      : projectData.filter((item) => item.category === filterKey);

  return (
    <div className="my-5">
      <ul className="category-list">
        <li>
          <button
            className={filterKey === "all" ? "active" : ""}
            onClick={() => setFilterKey("all")}
          >
            All ({projectData.length})
          </button>
        </li>
        {Object.entries(
          projectData.reduce((acc: Record<string, number>, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([category, count]) => (
          <li key={category}>
            <button
              className={filterKey === category ? "active" : ""}
              onClick={() => setFilterKey(category)}
            >
              {category}({count})
            </button>
          </li>
        ))}
      </ul>
      <div className="project-container">
        {filteredData.map((item) => (
          <div className="project-card" key={item.id}>
            <div>
              <figure>
                <Image
                  src={`${item.img}`}
                  width={270}
                  height={270}
                  alt="bartleby"
                />
              </figure>
              <span>
                <h6>{item.category}</h6>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <Link
                  href="/casestudy/[id]"
                  as={`/casestudy/${item.name}-${item.id}`}
                  key={item.id}
                >
                  <Image
                    className="caseButton"
                    src="/caseButton.svg"
                    width={140}
                    height={140}
                    alt="caseStudy"
                  />
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;

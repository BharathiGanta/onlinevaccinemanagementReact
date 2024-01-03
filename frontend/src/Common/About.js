import React from 'react';
import CommonNavbar from "./CommonNavbar";

const VaccineInfo = () => {
    const containerStyle = {
        backgroundImage: 'url("../bgimage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
      };
  return (
    <>
    <CommonNavbar />
    <div className="container my-5" style={containerStyle}>
      <br></br>
      <h2 className="text-center mb-4" style={{color:'blue', fontFamily:'KaushanScript',}}><strong>Vaccine Information</strong></h2>
      <p>Welcome to our Vaccine Information Page! We provide details about various vaccines, including their availability, uses, age limits, and more.</p>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>COVID-19 Vaccine</h3>
        <p>The COVID-19 vaccine is crucial in preventing the spread of the virus. It is recommended for individuals of eligible age groups to protect against severe illness and hospitalization.</p>
        <h4>Vaccine Details:</h4>
        <ul>
          <li>Available for Ages 12 and Above</li>
          <li>Two-dose Series</li>
          <li>Provides Immunity Against COVID-19</li>
        </ul>
      </div>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>Influenza (Flu) Vaccine</h3>
        <p>The influenza vaccine helps protect against seasonal flu viruses. It is recommended for individuals of all ages, especially those at higher risk of complications from the flu.</p>
        <h4>Vaccine Details:</h4>
        <ul>
          <li>Available for All Ages</li>
          <li>Annual Vaccination Recommended</li>
          <li>Reduces the Risk of Flu-related Complications</li>
        </ul>
      </div>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>HPV Vaccine</h3>
        <p>The Human Papillomavirus (HPV) vaccine is essential for preventing HPV infections, which can lead to various cancers. It is recommended for adolescents and young adults.</p>
        <h4>Vaccine Details:</h4>
        <ul>
          <li>Available for Adolescents and Young Adults</li>
          <li>Multi-Dose Series</li>
          <li>Prevents HPV-related Cancers</li>
        </ul>
      </div>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>Meningococcal Vaccine</h3>
        <p>The Meningococcal vaccine protects against meningococcal disease, which can cause severe illnesses such as meningitis. It is recommended for certain age groups and high-risk individuals.</p>
        <h4>Vaccine Details:</h4>
        <ul>
          <li>Available for Adolescents and College Students</li>
          <li>May Require Booster Doses</li>
          <li>Prevents Meningococcal Infections</li>
        </ul>
      </div>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>Childhood Vaccines</h3>
        <p>A series of childhood vaccines are recommended to protect children from various diseases, including measles, mumps, rubella, and more. The schedule is designed for specific age groups.</p>
        <h4>Vaccine Details:</h4>
        <ul>
          <li>Routine Vaccination Schedule</li>
          <li>Protects Against Multiple Diseases</li>
          <li>Ensures Immunity in Early Years</li>
        </ul>
      </div>

      <div className="vaccine-card" style={{backgroundcolor:'white', 
    border: '1px solid #dee2e6',
    borderradius: '5px',
    padding: '20px',
    margintop: '20px',
    marginbottom: '20px'}}>
        <h3 style={{color:'blue'}}>Upcoming Vaccines</h3>
        <p>Stay informed about upcoming vaccines and vaccination programs. We are committed to introducing new vaccines to enhance protection against emerging infectious diseases.</p>
      </div>
      <br></br>
    </div>
    </>
  );
}

export default VaccineInfo;